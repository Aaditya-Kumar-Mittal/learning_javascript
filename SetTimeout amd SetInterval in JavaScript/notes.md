# SetTimeout and SetInterval in JavaScript

* `setTimeout()` → runs **once after a delay**
* `setInterval()` → runs **repeatedly**
* `clearInterval()` → stops an interval

You can think of **`setTimeout` as a single scheduled interval that automatically stops after its first execution**.

```js
setTimeout(() => {
  console.log("Hello");
}, 1000);
```

Runs once after 1 second.

Whereas:

```js
const id = setInterval(() => {
  console.log("Hello");
}, 1000);

clearInterval(id);
```

Runs every second **until you manually stop it**.

## But one important distinction

`setTimeout` is not literally:

```js
setInterval() + clearInterval()
```

because `setTimeout` schedules a **one-time callback**, while `setInterval` schedules recurring callbacks.

A useful way to remember:

```text
setTimeout  →  "Do this later, once."
setInterval →  "Keep doing this every X milliseconds."
clearInterval → "Stop doing that repeatedly."
```