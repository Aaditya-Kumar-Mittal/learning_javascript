class Electorincs {

  #input;
  #output;
  #device;
  #plugType;

  constructor(device, input, output, plugType = "American") {
    this.#device = device;
    this.#input = input;
    this.#output = output;
    this.#plugType = plugType;
  }

  printDevice() {
    console.log(this.#device);
  }
}

class Charger extends Electorincs {

  #brand;

  constructor(device, input, output, plugType = "American", brand) {
    super(device, input, output, plugType);
    this.#brand = brand;
  }

  get getBrand() {
    return this.#brand;
  }
}

const charger = new Charger("Charger", 18, 200, "European", "Apple");
const hardDisk = new Electorincs("Hard-disk", 200, 213);

charger.printDevice(); // Outputs: Charger
console.log(charger.getBrand); // Outputs: Apple
