function* simpleGenerator(){
    yield "mango"
    yield "apple"
    yield "banana"
}

// ! Generator Class
class GeneratorClass{
    constructor() {
        this.index = 0
    }

    *[Symbol.iterator]() {
        while(this.index < 10) {
            yield this.index++
        }
    }
}

// const generatorObj = simpleGenerator()
// console.log(generatorObj)
// console.log(generatorObj.next())
// console.log(generatorObj.next())
// console.log(generatorObj.next())
// console.log(generatorObj.next())

const generatorClass = new GeneratorClass()
for (let value of generatorClass){
    console.log(value)
}
