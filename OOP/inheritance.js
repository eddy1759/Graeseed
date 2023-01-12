// ! INHERITANCE

// * Using protopytal inheriatnce

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

class Person {
    constructor(name, sex, age){
        this.name = name
        this.sex = sex
        this.age = age
    }

    getDetails() {
        return `My name is ${this.name}, a ${this.sex} and i'm ${this.age} year old`
    }
}

class Student extends Person {
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