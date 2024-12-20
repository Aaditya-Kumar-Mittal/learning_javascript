# learning_javascript

## Closures in JavaScript

- **Closure** is not something you create it's something that the language has created for itself for appropriate development and we need to crack this code that how the language uses it.
- A closure is created when a function is defined inside another function, and **the inner function references variables in the outer function's scope**.
- When the inner function is returned from the outer function, it retains a reference to the outer function's scope, and can continue to access those variables even after the outer function has finished executing. Vice-Versa is not true!!
- In simple terms a closure can "remember" values from its outer function's scope and use them later, even if the outer function has returned and those values would normally be out of scope.

### When To Use Closures?

- From definition, you can see that it's used for retrival of values from outer parent function, so we can understand that closure can be used for retrival of dead values which have become out of scope.
- Also we can comprehend that it can used for privating some varibles or function.
- Thus closures are useful for creating private variables and functions, implementing partial function application, and preserving state in asynchronous code.
- While writing the code whenever there is a need for these types of thing try to incorporate this closure concept i.e. in a programmer languge, it's called `lexical environment`.

### Where and How To Use Closures?

#### Private Variables and Functions

```javascript
const makeCounter = () => {
  let count = 0;

  return () => {
    count++;
    console.log(count);
  };
};

let counter = makeCounter();
counter(); // logs 1
counter(); // logs 2
counter(); // logs 3
```

- In this example, `makeCounter` is an arrow function that returns another `arrow function`.
- The returned function increments a count variable each time it is called, and logs the new value of count to the console.
- When `makeCounter` is called, it creates a new scope with a count variable initialized to 0.
- It then returns a new arrow function that "closes over" this scope and increments the count variable each time it is called.
- When we assign the returned arrow function to the counter variable, we create a closure that retains a reference to the count variable.
- Each time we call counter(), it increments the count variable and logs the new value to the console, because it is still "closing over" the original count variable in the outer function's scope.
- Thus because the count variable is not exposed outside of the returned object, it is effectively a private variable that can only be accessed or modified through the makeCounter() methods.

#### Partial Function

```javascript
function add(x) {
  return function (y) {
    return x + y;
  };
}

let add5 = add(5);
console.log(add5(3)); // 8
```

- In this example, the `add()` function returns another function that takes a single argument and returns the sum of that argument and the x value from the outer function's scope.
- This allows us to "partially apply" the `add()` function by passing in an x value and getting back a new function that always adds that value to its argument.
- Thus we can then use the new function like any other function, passing in different y values as needed.

#### For Preserving States in Asynchronous Code

```javascript
const animate = (element, from, to, duration) => {
  let start = performance.now();

  const update = () => {
    let time = performance.now() - start;
    let progress = time / duration;
    let value = from + (to - from) * progress;

    element.style.left = value + "px";

    if (progress < 1) {
      requestAnimationFrame(update);
    }
  };

  requestAnimationFrame(update);
};

let element = document.getElementById("my-element");
animate(element, 0, 100, 1000);
```

- In this example, the `animate()`function creates a closure over the start variable, which is used to calculate the elapsed time since the animation started.
- The `update()` function also **closes over** the element, from, to, and duration arguments, so that it can use them to update the element's position over time.
- Thus by creating a closure over these values, we can preserve their state between animation frames, even though the `update()` function is called **asynchronously** by `requestAnimationFrame()`.

1. Closures - As I mentioned earlier, closures are an important concept in JavaScript, and understanding how they work is essential for solving the counter function problem. Closures are created whenever a function is defined inside another function, and the inner function has access to the variables and parameters of the outer function.

2. Higher-order functions - The counter function is an example of a higher-order function, which is a function that takes one or more functions as arguments or returns a function as its result. In this case, the `createCounter` function takes an initial count as a parameter and returns an inner function that increments and returns the count on each call.

3. Function expressions - The implementation of the counter function using a closure involves using a function expression to define the inner function. Function expressions are a way to define a function as a value that can be assigned to a variable or passed as an argument to another function.

4. Arrow functions - Arrow functions are a shorthand syntax for defining functions in JavaScript, and they are commonly used in functional programming. The counter function can also be implemented using an arrow function, as I showed in one of the previous solutions.

5. Arrays and array methods - In the test cases for the counter function problem, the function is called multiple times and the results are returned as an array. To implement this, we can use an array to store the results and an array method like `map()` to call the function multiple times and add the results to the array.

## JavaScript Execution Context

### What is Execution Context?

- **Execution Context** is an abstract concept that JavaScript uses to keep track of code execution.
- It contains the environment in which the JavaScript code is evaluated and executed.
- Every time a function is invoked or global code is executed, a new execution context is created.

### Types of Execution Contexts

1. **Global Execution Context (GEC)**

   - Created when the JavaScript code first starts running.
   - It manages the global code (i.e., not inside any function).
   - The global object (`window` in browsers) and the `this` keyword are defined in this context.

2. **Function Execution Context (FEC)**

   - Created whenever a function is invoked.
   - Each function has its own execution context.
   - Contains all the variables, arguments, and inner functions within that function.

3. **Eval Execution Context**
   - Created when the `eval()` function is used to execute code as a string.
   - Not commonly used because it can cause security and performance issues.

### Phases of Execution Context

1. **Creation Phase**

   - JavaScript engine creates the execution context before executing any code.
   - During this phase:
     - **Global variables** and **function declarations** are stored in memory.
     - The value of variables is set to `undefined` (Hoisting).
     - The value of `this` is determined.

2. **Execution Phase**
   - The code inside the function or global scope is executed line by line.
   - Variables are assigned their actual values, and functions are executed.

### Components of Execution Context

1. **Variable Object (VO)**

   - Contains function arguments, inner variable declarations, and function declarations.
   - In the global context, the variable object is the global object.

2. **Scope Chain**

   - Used to resolve variables in the current and outer environments.
   - Functions have access to their own variables and variables from outer (parent) scopes.

3. **this Keyword**
   - Refers to the object that is currently executing the code.
   - In the global context, `this` refers to the global object.
   - In a function, `this` depends on how the function is called.

### Call Stack and Execution Context

- JavaScript uses a **Call Stack** to manage the execution of multiple execution contexts.
- When a function is called, a new execution context is created and pushed onto the call stack.
- When a function finishes execution, its execution context is popped off the call stack.

### Hoisting and Execution Context

- **Hoisting** is a behavior where variable and function declarations are moved to the top of their containing scope during the creation phase.
- This is why you can use functions and variables before they are declared in code.

### Example to Understand

```javascript
// Global Execution Context is created
var name = "John"; // Variable hoisting: name is `undefined` in creation phase

function greet() {
  // Function Execution Context is created
  var greeting = "Hello " + name; // Accesses global variable `name`
  console.log(greeting);
}

greet(); // New Execution Context for greet()
```

### Key Points

- **Every execution context has a scope**, which is the current environment in which the code is executed.
- **Execution contexts are managed using the call stack**, and the most recently created context is always on top.
- **JavaScript has synchronous, single-threaded execution**, meaning it can only execute one piece of code at a time using the call stack.

## JavaScript Promises

### What is a Promise?

- A **Promise** is an object that represents the eventual completion (or failure) of an asynchronous operation and its resulting value.
- It acts like a placeholder for a value that will be available at some point in the future.
- Promises are especially useful for handling asynchronous operations such as fetching data from a server, reading files, or working with APIs.

### Key States of a Promise

A promise has three possible states:

1. **Pending**:

   - The initial state when the promise is neither resolved nor rejected.
   - The promise is waiting for the asynchronous operation to complete.

2. **Fulfilled (Resolved)**:

   - The state when the asynchronous operation is successful.
   - The promise returns a value or result.

3. **Rejected**:
   - The state when the asynchronous operation fails.
   - The promise returns an error or a reason for the failure.

### Basic Syntax of a Promise

### Creating a Promise

You can create a promise using the `new Promise()` constructor. It takes a function (executor) with two arguments: `resolve` (for success) and `reject` (for failure).

```javascript
const myPromise = new Promise((resolve, reject) => {
  // Asynchronous operation (e.g., fetching data)
  let success = true;

  if (success) {
    resolve("Operation was successful!");
  } else {
    reject("Operation failed.");
  }
});
```

### Consuming a Promise

You use `.then()` for when the promise is resolved and `.catch()` for when it’s rejected.

```javascript
myPromise
  .then((result) => {
    console.log(result); // Runs if the promise is resolved
  })
  .catch((error) => {
    console.log(error); // Runs if the promise is rejected
  });
```

## Promises in Real-Life Example

### Simulating an Asynchronous Operation with `setTimeout`

```javascript
const fetchData = () => {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      const data = ["item 1", "item 2", "item 3"];
      resolve(data); // Resolving after 3 seconds
    }, 3000);
  });
};

fetchData()
  .then((data) => {
    console.log("Data fetched:", data); // Logs the data after it is resolved
  })
  .catch((error) => {
    console.error("Error:", error); // Handles any errors
  });
```

## Key Promise Methods

### 1. **.then()**

- Used to handle a promise that has been resolved.
- Takes one function as an argument, which will be executed when the promise is resolved.

```javascript
promise.then((result) => {
  console.log(result); // Executes on successful resolution
});
```

### 2. **.catch()**

- Used to handle errors or rejections of the promise.
- Takes one function as an argument, which will be executed when the promise is rejected.

```javascript
promise.catch((error) => {
  console.error(error); // Executes on rejection or failure
});
```

### 3. **.finally()**

- Executes a piece of code after the promise is settled, whether it’s resolved or rejected.
- Useful for cleaning up resources or final actions.

```javascript
promise.finally(() => {
  console.log("Promise is settled (fulfilled or rejected).");
});
```

## Chaining Promises

You can chain multiple `.then()` calls together to handle promises in sequence.

```javascript
fetchData()
  .then((data) => {
    console.log("First then:", data);
    return processData(data); // Process the fetched data
  })
  .then((processedData) => {
    console.log("Second then:", processedData);
  })
  .catch((error) => {
    console.error("Error occurred:", error); // Handles errors in the chain
  });
```

## Promise Example: Fetching Data

```javascript
const fetchData = () => {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      const success = true;
      if (success) {
        resolve("Data fetched successfully!");
      } else {
        reject("Failed to fetch data.");
      }
    }, 2000);
  });
};

fetchData()
  .then((message) => {
    console.log(message); // Logs: "Data fetched successfully!"
  })
  .catch((error) => {
    console.error(error); // Logs error if rejected
  });
```

## Error Handling with Promises

Promises allow you to handle errors using the `.catch()` method, ensuring that any failures are properly handled.

```javascript
const riskyOperation = () => {
  return new Promise((resolve, reject) => {
    let success = false; // Simulating a failure
    if (success) {
      resolve("Operation succeeded!");
    } else {
      reject("Operation failed.");
    }
  });
};

riskyOperation()
  .then((message) => {
    console.log(message); // Won't execute
  })
  .catch((error) => {
    console.error("Error:", error); // Handles the rejection
  });
```

## `Promise.all()`

- Used to wait for multiple promises to resolve.
- It runs the promises in parallel and waits for all of them to finish.
- If any promise is rejected, the entire chain is rejected.

```javascript
const promise1 = Promise.resolve("Promise 1 resolved");
const promise2 = Promise.resolve("Promise 2 resolved");

Promise.all([promise1, promise2])
  .then((results) => {
    console.log(results); // Logs: ["Promise 1 resolved", "Promise 2 resolved"]
  })
  .catch((error) => {
    console.error(error); // If any promise fails
  });
```

## Summary of Key Points

- A **Promise** is used to handle asynchronous operations in JavaScript.
- Promises have three states: **Pending**, **Resolved**, and **Rejected**.
- Use `.then()` to handle resolved promises and `.catch()` to handle errors.
- **Chaining** allows you to sequence asynchronous operations.
- `Promise.all()` helps in executing multiple promises in parallel.
