import ArrayClass from "./index.mjs";

const newArray = new ArrayClass()

newArray.push('hi');
console.log(newArray);
newArray.push('you');
console.log(newArray);
newArray.push('!');
console.log(newArray);
newArray.shiftItems(1);
console.log(newArray);
newArray.pop();
console.log(newArray);
newArray.delete(0);
console.log(newArray);