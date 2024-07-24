// JavaScript provides several types of loops to execute a block of code repeatedly based on a condition. These include `for`, `while`, `do...while`, and `for...in`, `for...of` loops. Below are explanations and examples of each type of loop.

// ### `for` Loop

// The `for` loop is the most commonly used loop. It has three parts: initialization, condition, and increment/decrement.


for (let i = 0; i < 5; i++) {
  console.log(i); // 0 1 2 3 4
}


// ### `while` Loop

// The `while` loop continues to execute a block of code as long as the specified condition is true.


let i = 0;
while (i < 5) {
  console.log(i); // 0 1 2 3 4
  i++;
}


// ### `do...while` Loop

// The `do...while` loop is similar to the `while` loop, but it guarantees that the code block is executed at least once.


let i = 0;
do {
  console.log(i); // 0 1 2 3 4
  i++;
} while (i < 5);


// ### `for...in` Loop

// The `for...in` loop iterates over the properties of an object.


const person = {name: "Deepak", age: 30, job: "Frontend Developer"};

for (let key in person) {
  console.log(key + ": " + person[key]);
}
// Output:
// name: Deepak
// age: 30
// job: Frontend Developer


// ### `for...of` Loop

// The `for...of` loop iterates over iterable objects (arrays, strings, etc.).


const array = ["JavaScript", "React", "Next.js"];

for (let element of array) {
  console.log(element);
}
// Output:
// JavaScript
// React
// Next.js


// ### `break` and `continue` Statements

// - **`break`**: Exits the loop immediately.
// - **`continue`**: Skips the current iteration and continues with the next iteration of the loop.

// #### `break` Example


for (let i = 0; i < 10; i++) {
  if (i === 5) {
    break;
  }
  console.log(i); // 0 1 2 3 4
}


// #### `continue` Example


for (let i = 0; i < 10; i++) {
  if (i === 5) {
    continue;
  }
  console.log(i); // 0 1 2 3 4 6 7 8 9
}


// ### Nested Loops

// Loops can be nested inside other loops.


for (let i = 0; i < 3; i++) {
  for (let j = 0; j < 3; j++) {
    console.log(`i = ${i}, j = ${j}`);
  }
}
// Output:
// i = 0, j = 0
// i = 0, j = 1
// i = 0, j = 2
// i = 1, j = 0
// i = 1, j = 1
// i = 1, j = 2
// i = 2, j = 0
// i = 2, j = 1
// i = 2, j = 2


// Using these loops effectively allows you to execute code multiple times, making it easier to handle repetitive tasks.