
function instanceOfClass() {
  //Normal function that uses This
  //While calling tha function we use new keyword
  //this by defaullt points to window

  this.width = 12;
  this.height = 13;
  this.color = "brown";
  this.taste = "sugary";
}

var onj1 = new instanceOfClass()
var onj2 = new instanceOfClass()
var onj3 = new instanceOfClass()

console.log(onj1);
console.log(onj2);
console.log(onj3);

console.log(typeof (onj1));
console.log(typeof (onj2));
console.log(typeof (onj3));

//When you need to make many instance of same type then you can use constructor function


function circularButton(color) {
  this.radius = 2
  this.color = color;
  this.icon = false;
  this.pressable = true;
}

var redBtn = new circularButton("Red");
var greenBtn = new circularButton("Green");
var blueBtn = new circularButton("Blue");

console.log(redBtn);
console.log(greenBtn);
console.log(blueBtn);
