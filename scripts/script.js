const myObj = {
  name: "Rus",
  hobbies: ["all five sin", "bad habit", "coding"],
  hello: () => {
    console.log("Hello!");
  }
};

console.log(myObj);
myObj.hello();

console.log(typeof(myObj));

const sendJSON = JSON.stringify(myObj); 
console.log(sendJSON);
console.log(typeof sendJSON); // string
console.log(sendJSON.name); // return undefined

const receiveJSON = JSON.parse(sendJSON);
console.log(receiveJSON.name);
console.log(typeof receiveJSON); // object