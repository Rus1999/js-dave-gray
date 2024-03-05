class Pizza {
  constructor (pizzaSize){
    this.size = pizzaSize;
    this.crust = "original";
  }

  getCrust() {
    return this.crust;
  }

  setCrust(pizzaCrust) {
    this.crust = pizzaCrust;
  }
}

class SpecialtyPizza extends Pizza {
  constructor (pizzaSize){
    super(pizzaSize);
    this.type = "The Works";
  }

  slice() {
    console.log(`Our ${this.type} ${this.size} pizza`);
  }
}

const mySpecialtyPizza = new SpecialtyPizza("Large");
mySpecialtyPizza.slice();
console.log(mySpecialtyPizza.getCrust());