console.log( 'client.js ready' );

$( document ).ready( readyNow );

function readyNow() {
    console.log( 'jQuery ready' );
    
    clickListeners();

    // need to get tasks in database on page startup/refresh
    getTasks();
};

// function to detect click of any button on the DOM and react appropriately
function clickListeners() {
    console.log( 'click listeners setup' );

    // function's for each button click
    $( '#add-btn' ).on( 'click', getTask );
    $( '#taskList' ).on( 'click', '.complete-btn', completeTask );
    $( '#taskList' ).on( 'click', '.delete-btn', deleteTask );

}; //end clickListeners

// function to delete task
function deleteTask() {
    console.log( 'Deleting task:', $(this).data().id );

}; // end deleteTask

// function to change task status to complete
function completeTask() {
    console.log( 'Completing task:', $(this).data().id );

}; //end completetask

// function to get inputs from DOM on add-btn click
function getTask( event ) {
    event.preventDefault();
    console.log( 'Getting tast from DOM' );

    // create new task object from values in the DOM
    let newTask = {
        name: $( '#name-in' ).val(),
        description: $( '#description-in' ).val(),
        status: $( '#status-in' ).val()
    };

    // call saveTask function on newTask Object
    saveTask( newTask );

}; // end getTask


// Get all tasks from server
function getTasks() {
    // ajax request to the server
    $.ajax({
        'type': 'GET',
        'url': '/tasks'
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

// function to send task to server to be saved in database
function saveTask( task ) {
    console.log( 'Sending task to server:', task );

}; //End task

// display tasks on the DOM.
// Should be called after a succesful GET.
function renderTasks( toDoList ) {
    console.log( 'Rendering tasks to the DOM', toDoList );
    
    //taskList is a placeholder on the DOM. Celear
    $( '#taskList' ).empty();

    //for each task create a new row, append each property as a new td,
    // append the row to taskList
    // append a delete and complete button to each new item. 
    // include task id as data on each button for detection
    for( let task of toDoList ) {
        let $tr = $( '<tr></tr>' );
        $tr.data( 'task', task );
        $tr.append( `<td>${task.Task}</td>`);
        $tr.append( `<td>${task.Description}</td>`);
        $tr.append( `<td>${task.Status}</td>`);
        $tr.append( `<td><button data-id="${task.id}" class="complete-btn">Complete</button></td>`);
        $tr.append( `<td><button data-id="${task.id}" class="delete-btn">Delete</button></td>`);
        
        $( '#taskList' ).append( $tr );
    };

}; //End renderTask