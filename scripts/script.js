class Pizza {
  crust = "original"; // public
  #sauce = "traditional"; // private
  #size;

  constructor(pizzaSize) {
    this.#size = pizzaSize;
  }

  getCrust() {
    return this.crust;
  }
  
  setCrust(pizzaCrust) {
    this.crust = pizzaCrust;
  }

  hereYouGo() {
    console.log(`Here's your ${this.crust} ${this.#sauce} sauce ${this.#size} pizza.`);
  }
}

const myPizza = new Pizza("large");
myPizza.hereYouGo();
console.log(myPizza.getCrust()); 
console.log(myPizza.crust); 
console.log(myPizza.#sauce); // throw exception