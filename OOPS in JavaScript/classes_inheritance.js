class MyClass {

  #private_var = "This is a private variable."; //Cannot be directly accessed just by the dot operator
  #setter_b = 10;

  constructor(value1 = 20, value2 = 30, privateChange = "This is a private variable.") {
    this.a = value1;
    this.b = value2;
    this.c = "Default Value";
    this.#private_var = privateChange;
  }

  print() {
    console.log("I'm printing!");
  }

  printPrivate() {
    console.log(this.#private_var);
  }

  get getPrivate() {
    return this.#private_var;
  }

  /**
   * @param {number} b
   */
  set setterB(b) {
    this.#setter_b = b;
  }

  get getSetterB() {
    return this.#setter_b;
  }
}

const obj1 = new MyClass();

console.log(obj1);

obj1.print();

obj1.printPrivate();

const obj2 = new MyClass(25, 56);

console.log(obj2);

obj2.print();

obj2.printPrivate();

const obj3 = new MyClass(15, 15, "Changing private var value.")

console.log(obj3);

obj3.printPrivate();

console.log(obj3.getPrivate); //no need to call since using a getter function

console.log(`The value set before using setter function is: ${obj3.getSetterB}`);

obj3.setterB = 15;

console.log(`The value set using setter function is: ${obj3.getSetterB}`);

const myDate = new Date();

console.log(myDate);
console.log(myDate.getDate());
console.log(myDate.getDay());
console.log(myDate.getFullYear());
console.log(myDate.getHours());
console.log(myDate.getMonth());


