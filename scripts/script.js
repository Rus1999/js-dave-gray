// import playGuitar from "./guitars.js";
// import { shredding as shred, plucking as fingerpicking} from "./guitars.js";

// console.log(playGuitar());
// console.log(shred());
// console.log(fingerpicking());


import * as Guitars from "./guitars.js";
import User from "./user.js";

console.log(Guitars.default()); // when import all it good to change the default to something else
console.log(Guitars.shredding());
console.log(Guitars.plucking());

const me = new User("rus@co.ru", "Rus");
console.log(me);
console.log(me.greeting());