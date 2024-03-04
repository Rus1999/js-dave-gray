const myArray = [];

myArray[0] = "Rus";
myArray[1] = 1001;
myArray[2] = false;
myArray[3] = 'a';

myArray.unshift("unshift"); // add element to the 
myArray.push("push");
console.log(`Unshift and Push \n`)
console.log(myArray);

myArray.shift();
myArray.pop();
console.log('Shift and Pop');
console.log(myArray);