# Object Oriented Programming (OOP)

### What are Objects
Javascript objects are what makes the javascript programming so versatile.

-  There are 8 data types in javascript. Seve of thm are called `primitive`, because their values contain only a single thing (be it a string or a number or whatever).

- Objects are a key concept in OOP. In OOP codes are organized into structures called `objects` and `classes`.

> The objects are instanes of classes that contain real data, these data are keyed collections of various data and more complex entities while classes define the structure and behaviour of objects.


- Object can be created via the object literal {} with an optional list of properties or via the object constructor syntax `new Object()`
- A property is a `key: value` pair, where `key` is a string (also called a "property name") and a `value` can be anything.

- Function that are stored in object properties are called `methods.`
- Methods allows objects to "act" like `object.doSomething`
- Method can reference the object as `this`
- The value of `this` is defined at runtime.
> _-the `this` keyword in javascript refers to the current object that the code is executed on. it can be used to access the properties of the current object  and to call the method of the current object._
- When a function is declared, it may use `this`, but that `this` has no value until the function is called.
- When a function is called in the "method" syntax: `object.method(), the value of `this` during the call is `object`

- A `constructor` in JS is a special method that is used to initialize an object when it is created. The constructor is a special method that is automatically called when an object is created from class. it is used to set up the initial state of the object and to performa any other setup that is required.

 - In JavaScript unlike other class based language like Java/C++, if you don't define a constructor , JavaScript will define an empty constructor

```
     function exampleClass() {
        `this.property` = 'some value';

        `this.method` = function() (
            console.log(`this.property`)
        )
    }
    
    const obj = `new exampleClass()`
    console.log(obj.property) //Output: some value
    obj.method() //Output: `some value`
```
The `this` keyword is used inside the `exampleClass` constructor function to refer to the object beig constructed and it is used inside the `method` function to refer to the `obj` instance of `exampleClass`

