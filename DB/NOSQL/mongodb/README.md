**Connect to MongoDB**
To connect to MongoDB, use the following command:
```
mongo
```
***Create and Use a DB**
To create and use a db, the command is used
```
use studentdb
```
**Show available databases and collections**
To see a list of available databases and colections, use the following command
```
show dbs
show collections
```
**Create a collection**
To create a collection
```
db.createCollection('students')
```
**Insert data into a collection**
To insert data into a collection
```
db.students.insert({name: "Emediong", age: 25, location: "Uyo"})
```
**Find data in a collection**
To find data in a collection
```
db.<collection_name>.find({<key1>: <value1>, <key2>: <value2>, ...})
```
For example, to find all students in the "students" collection with the name "emediong"
```
db.students.find({name: "John"})
```
**Update data in a collection**
To update data in a collection
```
db.students.update({name: "emediong"}, {$set: {location: "Lagos"}})
```
**Delete data from a collection**
To delete data from a collection
```
db.students.remove({name: "emediong"})
```




