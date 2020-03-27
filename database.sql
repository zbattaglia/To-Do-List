CREATE TABLE "toDoList" (
    "id" serial PRIMARY KEY,
    "Task" varchar(100) NOT NULL,
    "Description" text,
    "Status" varchar(1)
);

INSERT INTO "toDoList"( "Task", "Description", "Status" )
VALUES
    ( 'Get Ready in the Morning', 'Shower, brush teeth, and make coffee', 'N' ),
    ( 'Breakfast', 'Make oatmeal and grab a banana', 'N' ),
    ( 'Prime', 'Log in to virtual class by 9:00 am', 'N' ),
    ( 'Lunch', 'Heat up leftovers from dinner', 'N' ),
    ( 'Start Weekend Challenge', 'Check in with instructors before 5 with questions', 'N' ),
    ( 'Exercise', 'Go for a run around the stone arch', 'N' ),
    ( 'Dinner', 'Check with Emily and see if she wants Pizza', 'Y' ),
    ( 'Unwind', 'Start Tiger King on Netflix?', 'N' );