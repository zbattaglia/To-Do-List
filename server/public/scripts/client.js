console.log( 'client.js ready' );

$( document ).ready( readyNow );

function readyNow() {
    console.log( 'jQuery ready' );
    
    getTasks();
};

// Get all tasks from server
function getTasks() {
    // ajax request to the server
    $.ajax({
        'type': 'GET',
        'url': 'tasks'
    })
    .then( ( response ) => {
        console.log( 'got respnose from server' );
        // pass tasks to renderFunction
        renderTasks( response );
    })
    .catch( ( error ) => {
        alert( 'Error getting tasks from server. See Console.' );
        console.log( 'Error:', error );
    });

}; //End getTasks


// display tasks on the DOM.
// Should be called after a succesful GET.
function renderTasks( toDoList ) {
    console.log( 'Rendering tasks to the DOM', toDoList );
    
    //taskList is a placeholder on the DOM. Celear
    $( '#taskList' ).empty();

    //for each task create a new row, append each property as a new td,
    // append the row to taskList
    for( let task of toDoList ) {
        console.log('name', task.name);
        console.log('descriptio', task.description);
        console.log('status', task.status);

        let $tr = $( '<tr></tr>' );
        $tr.data( 'task', task );
        $tr.append( `<td>${task.name}</td>`);
        $tr.append( `<td>${task.description}</td>`);
        $tr.append( `<td>${task.status}</td>`);
        $( '#taskList' ).append( $tr );
    }

}; //End renderTask