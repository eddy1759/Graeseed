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

// ==========================================


// ! POLYMORPHISM
class Shape {
    constructor(name) {
        this.name = name
    }

    getArea() {
        return "This shape does not have a defined area."
    }
}

class Circle extends Shape {
    constructor(radius) {
        super('Circle')
        this.radius = radius
    }

    getArea() {
        return Math.PI * this.radius ** 2
    }
}

class Rectangle extends Shape {
    constructor(width, height) {
        super("Rectangle")
        this.width = width
        this.height = height
    }

    getArea() {
        return this.width * this.height
    }
}

class Triangle extends Shape {
    constructor(base, height) {
        super("Triangle")
        this.base = base
        this.height = height
    }

    getArea() {
        return 0.5 * this.base * this.height
    }
}

class Square extends Shape {
    constructor(length){
        super("Square")
        this.length = length
    }

    getArea() {
        return this.length ** 2
    }
}

class Trapezium extends Shape {
    constructor(a, b, h){
        super("Trapezium")
        this.a = a
        this.b = b
        this.h = h
    }

    getArea() {
        return 0.5 * (this.a + this.b) * this.h
    }
}

const circle = new Circle(5)
const rectangle = new Rectangle(10, 20)
const triangle = new Triangle(5, 10)
const square = new Square(4)
const trapezium = new Trapezium(4, 8, 12)

console.log("Circle name", circle.name)
console.log("Circle area", circle.getArea())
console.log("====================")

console.log("Rectangle name", rectangle.name)
console.log("Rectangle area", rectangle.getArea())
console.log("====================")

console.log("Triangle name", triangle.name)
console.log("Triangle area", triangle.getArea())
console.log("====================")

console.log("Square name", square.name)
console.log("Square name", square.getArea())
console.log("====================")

console.log("Trapezium name", trapezium.name)
console.log("Trapezium name", trapezium.getArea())
console.log("====================")

// ==========================================

// ! INHERITANCE

// * Using prototypal inheriatnce
function Person(name, sex, age) {
    this.name = name
    this.sex = sex
    this.age = age
}

Person.prototype.getDetails = function() {
    return `My name is ${this.name}, a ${this.sex} and i'm ${this.age} year old`
}

function Student(name, age, sex, dept, grade) {
    Person.call(this, name, sex, age);
    this.dept = dept
    this.grade = grade
}

Student.prototype = Object.create(Person.prototype);
Student.prototype.constructor = Student



// ? Using Class
class Persons {
    constructor(name, sex, age){
        this.name = name
        this.sex = sex
        this.age = age
    }

    getDetails() {
        return `My name is ${this.name}, a ${this.sex} and i'm ${this.age} year old`
    }
}

class Student extends Persons {
    constructor(name,age, sex, dept, grade){
        super(name, sex, age)
        this.dept = dept
        this.grade = grade
    }

    getFullDetails() {
        return `My name is ${this.name}, a ${this.sex}, i'm ${this.age} year old in ${this.dept} department and my grade is ${this.grade}` 
    }
    
}


const student = new Student("John Doe", "Male", 30, "fst", "2.1")

console.log(student.name)
console.log(student.sex)
console.log(student.age)
console.log(student.dept)
console.log(student.grade)
console.log(student.getDetails())
console.log(student.getFullDetails())