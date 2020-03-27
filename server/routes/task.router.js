const express = require('express');
const taskRouter = express.Router();

// Connect to database

const pg = require('pg');
const Pool = pg.Pool;
const pool = new Pool({
    database: 'weekend-to-do-app',
    host: 'localhost',
    port: 5432,
    max: 10,
    idleTimeoutMillis: 30000
});

pool.on( 'connect', () => {
    console.log( 'Connected to database...' );
});

pool.on( 'error', (error) => {
    console.log( 'error connecting to database:', error );
});

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