// let fruits = ["apple", "mango", "strawberry"]
// for  (let fruit of fruits){
//     console.log(fruit)
// }

// ! Making an iterator function

function makeIterator (params) {
    let index = 0;
    return {
        next : function(){
            if (index < params.length){
                return {value: params[index++], done: false}
    
            } else {
                return {done: true}
            }
        }
    }
}

// ! Making an iterator class

class MakeIterator{
    constructor(data){
        this.data = data;
    }

    [Symbol.iterator]() {
        let index = 0;
        return {
            next: () => {
                if (index < this.data.length) {
                    return {
                        value: this.data[index++], 
                        done: false
                    }

                } else {
                    return {
                        value: undefined,
                        done: true
                    }
                }
            }
        }
    }
}

// let num = makeIterator([1, 2, 3, 4, 5])
// console.log(num.next())
// console.log(num.next())
// console.log(num.next())
// console.log(num.next())
// console.log(num.next())
// console.log(num.next())

let fruits = new MakeIterator(['apple', 'strawberry', 'orange','mango', 5])

for (let fruit of fruits) {
    console.log(fruit)
}