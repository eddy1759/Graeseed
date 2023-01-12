// ! ABSTRACTION

// ? Using Object Literal Notation

const Person = {
    name: "John Doe",
    sex: "Male",
    age: 30,
    getDetails: function() {
        return `My name is ${this.name}, a ${this.sex} and i'm ${this.age} years old`
    }
}


// * Using Object Constructor (this)

function Person(name, sex, age) {
    this.name = name;
    this.sex = sex;
    this.age = age;
    this.getDetails = function() {
        return `My name is ${this.name}, a ${this.sex} and i'm ${this.age} years old`
    }
}


// * Using Class Keyword
class Person {
    constructor(name, sex, age) {
        this.name = name
        this.sex = sex
        this.age = age
    }
    getDetails(){
        return `My name is ${this.name}, a ${this.sex} and i'm ${this.age} years old`
    }
}


const person = new Person("John Doe", "male", 30)
console.log(person.name)
console.log(person.sex)
console.log(person.age)
console.log(person.getDetails())