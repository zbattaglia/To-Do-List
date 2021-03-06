console.log( 'client.js ready' );

$( document ).ready( readyNow );

// global variable to store id of task to be delete until user confirmation
let deleteTaskId = null;

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
    $( '#taskList' ).on( 'click', '.delete-btn', handleDelete );
    // Only calls delete task function if the modal pop-up is confirmed by user
    $( '#myModal' ).on( 'click', '#confirm-btn', deleteTask );
}; //end clickListeners

// function to grab id of task being selected for deletion and store it until confirmed
function handleDelete( event ) {
    event.preventDefault();
    deleteTaskId = $(this).data().id;
} // end handleDelete

// function to delete task
function deleteTask() {
    console.log( 'Deleting task with id', deleteTaskId );
    // ajax DELETE request to server with id encoded in url
    $.ajax({
        type: 'DELETE',
        url: `/tasks/${deleteTaskId}`
    })
    .then( (result) => {
        console.log( 'Successfully deleted task from database', result );
        // call getTasks to update DOM
        deleteTaskId = null;
        getTasks();
    })
    .catch( (error) => {
        console.log( 'Error deleting task', error );
        alert( `Couldn't delete task. See console for details.`, error );
    });

}; // end deleteTask

// function to change task status to complete
function completeTask() {
    // extract task id from data in button clicked
    let taskId = $(this).data().id;
    console.log( 'Completing task:', taskId );
    let currentStatus = $(this).data().Status
    // ajax PUT request to update status of selected task
    // id is encoded in url and status is toggled from current state
    $.ajax({
        type: 'PUT',
        url: `/tasks/${taskId}`,
        data: { status: !currentStatus }
    })
    .then( (response) => {
        console.log( 'Got response from PUT on server', response );
        // call getTasks to update DOM
        getTasks();
    })
    .catch( (error) => {
        console.log( 'Got an error updating status on server', error );
        alert( `Couldn't complete task. See console for details.` );
    });

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
        console.log( 'got response from server' );
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

    // ajax call to POST new task
    $.ajax({
        type: 'POST',
        url: '/tasks',
        data: task
    })
    .then( (response) => {
        console.log( 'Got response from server:', response );
        // call getTasks to refresh DOM with up to date list from database
        getTasks();

        // on successful add clear input fields
        $( '#name-in' ).val(''),
        $( '#description-in' ).val(''),
        $( '#status-in' ).val('')

    })
    .catch( (error) => {
        console.log( 'Error posting to server:', error );
        alert( `Couldn't add task. See console for details` );
    });

}; //End add task

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
        let $tr = $( `<tr></tr>` );
        $tr.data( 'task', task );
        if ( !task.Status ){
            $tr.append( `<td>${convertBoolean( task.Status )}</td>`);
        }
        else {
            $tr.append( `<td class="check"></td>`);
        }
        $tr.append( `<td>${task.Task}</td>`);
        $tr.append( `<td>${task.Description}</td>`);
        if( !task.Status ){
            $tr.append( `<td><button data-id="${task.id}" class="complete-btn btn-success">Complete</button></td>`);
        }
        else {
            $tr.append( `<td></td>`);
        }
            $tr.append( `<td><a href="#myModal" data-toggle="modal"><button data-id="${task.id}" data-status="${task.Status}" class="delete-btn btn-outline-danger">Delete</button></a></td>`);

        $( '#taskList' ).append( $tr );
    };

}; //End renderTask

// function to convert status boolean to yes or no on DOM
function convertBoolean( statusBoolean ){
    if ( statusBoolean === true ) {
        return 'Complete';
    }
    else {
        return 'Not Complete';
    }
}; // end convertBoolean