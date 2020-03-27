const express = require( 'express' );
const app = express();
const bodyParser = require( 'body-parser' );
const PORT = process.env.PORT || 5000;
const taskRouter = require( './routes/task.router' );

app.use(bodyParser.urlencoded({extended: true}));
app.use(express.static( 'server/public' ));

// routes go here
app.use( '/tasks', taskRouter );

// Start listening for requests on a specific port
app.listen( PORT, () => {
  console.log( 'listening on port', PORT );
});