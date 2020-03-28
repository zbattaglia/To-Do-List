const express = require( 'express' );
const taskRouter = express.Router();
const pool = require( '../modules/pool' );

// GET tasks from database
taskRouter.get( '/', ( req, res ) => {
    console.log( 'In /tasks GET' );

    // Make a sql SELECT on the database
    let queryText = 'SELECT * FROM "toDoList" ORDER BY "id";'
    pool.query( queryText )
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

// DELETE task from database
taskRouter.delete( '/:id', (req, res) => {
    // extract id from req.params
    let taskId = req.params.id; 
    console.log( 'Deleting task with id', taskId );

    // create query to delete task from database
    let queryText = `DELETE FROM "toDoList" WHERE "id" = $1;`;
    pool.query( queryText, [taskId] )
        .then( (result) => {
            console.log( `Deleted task from database`);
            res.sendStatus( 200 );
        })
        .catch( (error) => {
            console.log( 'Error deleting task from database.', error );
            res.sendStatus( 500 );
        });
}) // end DELETE


// PUT to update status on database
taskRouter.put( '/:id', (req, res) => {
    console.log( `Updating task with id ${req.params.id} to new status`, req.body.status );
    
    let taskId = req.params.id; //extract id from url
    let status = req.body.status; //get new status
    let queryText = `UPDATE "toDoList" SET "Status" = $1 WHERE "id" = $2;`;
    pool.query( queryText, [status, taskId])
        .then( (result) => {
            console.log( 'Updated status on server' );
            res.sendStatus( 200 );
        })
        .catch( (error) => {
            console.log( 'Error updating status', error );
            res.sendStatus( 500 );
        })
}); // end PUT

module.exports = taskRouter;