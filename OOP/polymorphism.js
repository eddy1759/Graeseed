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
console.log(circle.name)
console.log(circle.getArea())
console.log("====================")

const rectangle = new Rectangle(10, 20)
console.log(rectangle.name)
console.log(rectangle.getArea())
console.log("====================")

const triangle = new Triangle(5, 10)
console.log(triangle.name)
console.log(triangle.getArea())
console.log("====================")

const square = new Square(4)
console.log(square.name)
console.log(square.getArea())
console.log("====================")

const trapezium = new Trapezium(4, 8, 12)
console.log(trapezium.name)
console.log(trapezium.getArea())
console.log("====================")