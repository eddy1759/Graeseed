# Iterators
An iterator in javascript is an `object` that defines a sequence of values, which can be iterated (looped) over, one at a time. The object must implement the `next()` method, which returns an object with two properties: `value`, which is the next value in the sequence, and `done`, which is a boolean that indicates if the iteration is complete (`true`) or not (`false`). The `for...of` loop and the `spread` operator(`...`) can be used to loop through the values of an iterator.

### `for...of` loop
- It is used to iterate over the lement of an iterable object usch as `array or a string`.
```
    for (varaible of iterable){
        // loop body
    }
```
- An `iterable` is something that can be iterated over e.g arrays string. 

# Generator
A generator is a special kind of function that can be paused and resumed at a later time. This allows us to create an iterator that can produce a sequence of values, one at a time.

To create a generator function, we use the `function*` syntax instead of the regular function keyword.