const vehicle = {
  wheels : 4,
  engine : () => {
    return "Vrroooom!";
  }
}

const car = Object.create(vehicle);
car.doors = 7;
car.engine = () => { return "Whoooosh! " }
console.log(car.doors);
console.log(car.engine());

const testla = Object.create(car);
console.log(testla.wheels);
console.log(testla.doors);
console.log(testla.engine());
testla.engine = () => { return "Shhhh....." }
console.log(testla.engine());
