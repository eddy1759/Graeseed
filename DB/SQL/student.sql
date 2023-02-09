
-- Get a list of databases

SELECT datname FROM pg_database
WHERE datistemplate = false;

-- Creating a database called student
CREATE DATABASE students;

-- Dropping database
DROP DATABASE students;

-- Creating a student table
CREATE TABLE students (
    id serial primary key,
    name VARCHAR(50) NOT NULL,
    email VARCHAR(50) UNIQUE NOT NULL,
    age INTEGER NOT NULL
)

-- Inserting into the student table
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

-- Deleting Data from a Table
DELETE FROM students WHERE id = 1;

-- Window functions:
/* Window functions are used to perform complex calculations and rankings over a set of rows in a table. The following code demonstrates how to use the ROW_NUMBER() window function to calculate the ranking of age column*/
SELECT name, age, ROW_NUMBER() OVER (ORDER BY age DESC) AS ranking
FROM students;

--  Common Table Expressions (CTEs):
/* CTEs are used to create temporary views of a query result within a single query. They are useful for breaking down complex queries into smaller and more manageable parts. The following code demonstrates how to use a CTE in a query. */

WITH cte AS (
    SELECT name, age
    FROM students
    WHERE age > 24
)
SELECT *
FROM cte;

-- Creating a student score table
CREATE TABLE student_scores (
    id serial primary key,
    name VARCHAR(50) NOT NULL,
    subject VARCHAR(50) NOT NULL,
    score INTEGER NOT NULL
)

-- Inserting into the student score table
INSERT INTO student_scores (name, subject, score)
VALUES ('Serah Doe','english', 70);
INSERT INTO student_scores (name, subject, score)
VALUES ('Serah john', 'english', 60);
INSERT INTO student_scores (name, subject, score)
VALUES ('mike Doe', 'english', 70);
INSERT INTO student_scores (name, subject, score)
VALUES ('philip Doe', 'english', 44);
INSERT INTO student_scores (name, subject, score)
VALUES ('Serah Donnie', 'english', 38);
INSERT INTO student_scores (name, subject, score)
VALUES ('brown', 'english', 88);
INSERT INTO student_scores (name, subject, score)
VALUES ('grace', 'english', 32);
INSERT INTO student_scores (name, subject, score)
VALUES ('blessing', 'english', 65);

-- Joining multiple tables:
SELECT students.name, students.age, student_scores.subject, student_scores.score
FROM students
INNER JOIN student_scores
ON students.id = student_scores.id;
