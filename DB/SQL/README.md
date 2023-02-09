## What is SQL

**SQL** (Structured Query Language) is a language used to manage and manipulate data stored in relational databases. In a relational database, data is stored in tables with columns (representing the attributes of an entity) and rows (representing the records of instances of that entity).
Some popular SQL databases include MySQL, PostgreSQL, and Microsoft SQL Server.


SQL has several mechanisms to ensure the integrity and consistency of data stored in a database. One of these mechanisms are constraints, which are rules that restrict the type of data that can be stored in a column or set of columns of a table. There are several types of constraints in SQL, including:

*NOT NULL*: This constraint ensures that a column cannot contain a NULL value.

*UNIQUE*: This constraint ensures that the values in a column are unique across all rows in a table.

*PRIMARY KEY*: This constraint defines a unique identifier for each row in a table. A table can have only one primary key and it cannot contain NULL values.

*FOREIGN KEY*: This constraint is used to enforce referential integrity by linking data in one table to data in another table. A foreign key in one table must match a primary key in another table.

*CHECK*: This constraint restricts the values that can be stored in a column based on a condition.

*DEFAULT*: This constraint sets a default value for a column if no value is specified during data insertion.

In addition to constraints, SQL also has several data types, which specify the type of data that can be stored in a column. Some common data types in SQL include:

`INTEGER:` A whole number (e.g., -2, 0, 1, 100)

`DECIMAL:` A decimal number (e.g., 3.14, -0.5)

`CHAR:` A fixed-length string of characters (e.g., "Hello").

`VARCHAR:` A variable-length string of characters (e.g., "Goodbye").

`DATE:` A date value (e.g., "2022-01-01").

`TIME:` A time value (e.g., "10:30:00").

`BOOLEAN:` A value that can be either true or false.

By specifying constraints and data types, you can ensure that the data stored in your database is consistent and valid.

PostgreSQL is an open-source relational database management system that is used for a variety of applications including web development. It is known for its reliability, robustness, and features like SQL compliance, full-text search, and others.