const setIntevalId = setInterval(() => {
    console.log("Hello");
}, 1000);

setTimeout(() => {
    clearInterval(setIntevalId);
    console.log("Interval cleared");
}, 5000);