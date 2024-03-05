// Factory Function
function pizzaFactory(pizzaSize){
  const crust = "original";
  const size = pizzaSize;

  return {
    bake: () => console.log(`Baking a ${size} ${crust} crust pizza.`)
  }  
}

const myPizza = pizzaFactory("small");
myPizza.bake();

// normal class declaration
// class Pizza {
//   constructor (pizzaSize){
//     this._size = pizzaSize; // private equipvalent
//     this._crust = "original";
//   }

//   getCrust() {
//     return this._crust;
//   }

//   setCrust(pizzaCrust) {
//     this._crust = pizzaCrust;
//   }
// }
