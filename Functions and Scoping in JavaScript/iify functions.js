//IIFE -> Immediatley invoked function expressions

// IIFE -> Method to run a funcion as soon as it is declared, so that we can make a private variable, and cannot be directly accessed.box1

(function abcd() {
  var a = 12;
})()

// console.log(a); //ReferenceError: a is not defined

const ans = (function () {
  var privateVal = 13;

  return {
    getter: function () {
      console.log(privateVal);
    },
    setter: function (val) {
      privateVal = val
    }
  }
})()

ans.getter();
ans.setter(112);
ans.getter()