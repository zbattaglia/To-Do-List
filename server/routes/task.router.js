const express = require( 'express' );
const taskRouter = express.Router();
const pool = require( '../modules/pool' );

// GET tasks from database
taskRouter.get( '/', ( req, res ) => {
    console.log( 'In /tasks GET' );

    // Make a sql SELECT on the database
    let sqlText = 'SELECT * FROM "toDoList" ORDER BY "id";'
    pool.query( sqlText )
        .then( (result) => {
            console.log( 'Got a result:', result );
            res.send( result.rows )
        })
        .catch( (error) => {
            console.log( 'Got an error on SELECT query', error );
            res.sendStatus( 500 );
        });
    
}); // end GET

// POST new task to database
taskRouter.post( '/', (req, res) => {
    // extract new task from req
    let newTask = req.body;
    console.log( 'Adding new task', newTask );

    // create query to insert task into table on database
    let queryText = `INSERT INTO "toDoList" ( "Task", "Description", "Status" )
        VALUES ($1, $2, $3);`;
    pool.query( queryText, [newTask.name, newTask.description, newTask.status] )
        .then( (result) => {
            res.sendStatus( 201 );
        })
        .catch( (error) => {
            console.log( 'Error adding task:', error );
            res.sendStatus( 500 );
        });
}); // end POST

module.exports = taskRouter;