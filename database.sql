CREATE TABLE "toDoList" (
    "id" serial PRIMARY KEY,
    "Task" varchar(100) NOT NULL,
    "Description" text,
    "Status" boolean DEFAULT '0'
);

INSERT INTO "toDoList"( "Task", "Description" )
VALUES
    ( 'Get Ready in the Morning', 'Shower, brush teeth, and make coffee' ),
    ( 'Breakfast', 'Make oatmeal and grab a banana' ),
    ( 'Prime', 'Log in to virtual class by 9:00 am' ),
    ( 'Lunch', 'Heat up leftovers from dinner' ),
    ( 'Start Weekend Challenge', 'Check in with instructors before 5 with questions' ),
    ( 'Exercise', 'Go for a run around the stone arch' ),
    ( 'Dinner', 'Check with Emily and see if she wants Pizza' ),
    ( 'Unwind', 'Start Tiger King on Netflix?' );
    