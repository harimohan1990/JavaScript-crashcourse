// JavaScript conditionals are used to perform different actions based on different conditions. The most common types of conditionals in JavaScript are `if`, `else`, `else if`, `switch`, and ternary operators.

// ### `if` Statement

// The `if` statement executes a block of code if a specified condition is true.


let age = 18;

if (age >= 18) {
  console.log("You are an adult.");
}


// ### `else` Statement

// The `else` statement executes a block of code if the same condition is false.

// ```javascript
// let age = 16;

// if (age >= 18) {
//   console.log("You are an adult.");
// } else {
//   console.log("You are a minor.");
// }


// ### `else if` Statement

// The `else if` statement specifies a new condition if the first condition is false.


let age = 20;

if (age < 13) {
  console.log("You are a child.");
} else if (age < 20) {
  console.log("You are a teenager.");
} else {
  console.log("You are an adult.");
}


// ### `switch` Statement

// The `switch` statement is used to perform different actions based on different conditions. It is often used when you need to compare the same expression to different values.


let day = 2;
let dayName;

switch (day) {
  case 1:
    dayName = "Monday";
    break;
  case 2:
    dayName = "Tuesday";
    break;
  case 3:
    dayName = "Wednesday";
    break;
  case 4:
    dayName = "Thursday";
    break;
  case 5:
    dayName = "Friday";
    break;
  case 6:
    dayName = "Saturday";
    break;
  case 7:
    dayName = "Sunday";
    break;
  default:
    dayName = "Invalid day";
}

console.log(dayName); // "Tuesday"


// ### Ternary Operator

// The ternary operator is a shorthand for the `if-else` statement. It takes three operands: a condition, a value if the condition is true, and a value if the condition is false.

let age = 18;
let status = age >= 18 ? "adult" : "minor";
console.log(status); // "adult"


// ### Example with Multiple Conditionals

// Combining different conditional statements can create more complex logic.


let age = 22;
let membership = "gold";

if (age < 18) {
  console.log("You are a minor.");
} else if (age >= 18 && age <= 21) {
  console.log("You are a young adult.");
} else {
  if (membership === "gold") {
    console.log("You are an adult with a gold membership.");
  } else {
    console.log("You are an adult.");
  }
}


