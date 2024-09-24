class MyClass {

  #private_var = "This is a private variable.";

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
