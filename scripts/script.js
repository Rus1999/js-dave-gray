"use strict";

const variable = "Rus";
console.log(variable);

const name = "Punyarit";

const makeError = () => {
  let i = 0;

  while (i <= 5) {
    try {
      // const name2 = "Rus";
      // name2 = "punyarit";

      // throw new customError("This is a custom error!");

      // throw new Error("This is a genetic eror");

      if (i % 2 !== 0) {
        throw new Error("Odd number!"); // throw an error then skip to the catch block
      }

      console.log("Even number");
    } catch (err) { // only execute when error occurs
      // console.log(err);
      // console.error(err);
      // console.warn(err);
      // console.table(err);
      // console.error(err.name);
      // console.error(err.message);
      // console.error(err.stack);
      // logTheError(err.stack); // record the log 

      // console.error(err.name);
      // console.error(err.message);
      console.error(err.stack);
    } finally {
      // execute no matter what
      // console.log("WOWZAA!");
      console.log("FINALLY");
      i++;
    }
  }
};

makeError();


const customError = (message) => {
  this.message = message;
  this.name = "customError";
  this.stack = `${this.name}: ${this.message}`;
};