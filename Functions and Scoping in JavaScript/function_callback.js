function showCallbackFunction(callback) {
    let value = 10;
    // here we are passing the function as an argument to another function, this is called a callback function.
    callback(value);
}

function printValue(value) {
    console.log("The value is: " + value);
}

showCallbackFunction(printValue);