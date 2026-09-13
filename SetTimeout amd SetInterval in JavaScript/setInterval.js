function printNames() {
    console.log("John");
    console.log("Jane");
    console.log("Doe");
}

setTimeout(printNames, 2000); // This will call printNames after 2 seconds and will only call it once.

// clearInterval(printNames); // This will clear the interval and stop calling printNames after 2 seconds.