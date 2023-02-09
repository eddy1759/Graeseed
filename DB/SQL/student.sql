
-- Get a list of databases

SELECT datname FROM pg_database
WHERE datistemplate = false;

-- Creating a database called student
CREATE DATABASE students;

-- Dropping database
DROP DATABASE students;

CREATE TABLE students (
    id serial primary key,
    name VARCHAR(50) NOT NULL,
    email VARCHAR(50) UNIQUE NOT NULL,
    age INTEGER NOT NULL
)

INSERT INTO students (name, email, age)
VALUES ('Serah Doe','serahdoe@example.com', 30);
INSERT INTO students (name, email, age)
VALUES ('Serah john', 'serahjohn@example.com', 20);
INSERT INTO students (name, email, age)
VALUES ('mike Doe', 'mikedoe@example.com', 30);
INSERT INTO students (name, email, age)
VALUES ('philip Doe', 'philipdoe@example.com', 24);
INSERT INTO students (name, email, age)
VALUES ('Serah Donnie', 'serahdonnie@example.com', 28);
INSERT INTO students (name, email, age)
VALUES ('brown', 'brown@example.com', 28);
INSERT INTO students (name, email, age)
VALUES ('grace', 'grace@example.com', 22);
INSERT INTO students (name, email, age)
VALUES ('blessing', 'blessing@example.com', 15);

-- Selecting Data from a Table:
SELECT * FROM students

-- Updating Data in a Table:
UPDATE students
SET email = 'eddy@mail.com' 
WHERE id = 1;




