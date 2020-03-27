const express = require( 'express' );
const taskRouter = express.Router();
const pool = require( '../modules/pool' );

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

module.exports = taskRouter;