class TeaMaker {
  #unit; // adding a property unit to this
  #temperature = 75; // adding a property temperature and assigning value

  constructor(unit) {
    this.#unit = unit; // assigning value to unit while creating an object
  }

  heatWater() {
    console.log(`Heating water to ${this.temperature} degrees ${this.unit}.`);
  }

  mixIngredients() {
    console.log("Steeping the tea.");
  }

  makeTea() {
    this.heatWater();
    this.mixIngredients();
    console.log("Tea is ready!");
  }

  setTemperature(newTemperature) {
    this.temperature = newTemperature;
  }
}

let obj=new TeaMaker(23);
console.log(obj);

