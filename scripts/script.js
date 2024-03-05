// objects
const myObj = {
  name : "Punyarit",
  nickName : "Rus"
}

console.log(myObj);
console.log(myObj.name);

const secObj = {
  alive : true,
  answer : 42,
  hobbies : ["Eat", "Sleep", "Code"],
  beverage : {
    morning : "Coffee",
    afternoon : "Milk",
    evening : "Weed water"
  },
  action : function() {
    return `Time for ${this.hobbies[2]}`;
  }
};

console.log(secObj.alive);
console.log(secObj.hobbies[1]);
console.log(secObj["beverage"]);
console.log(secObj.beverage.morning);
console.log(secObj.beverage["morning"]);
console.log(secObj.action());
