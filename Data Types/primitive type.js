// String: Represents a sequence of characters used to store and manipulate text.

let name = "Deepak Kumar";

//Number: Represents both integer and floating-point numbers.

let age = 30;
let pi = 3.14;


// Boolean: Represents a logical entity and can have two values: true or false.

let isFrontendDeveloper = true;


let jobTitle;


// Undefined: A variable that has been declared but not assigned a value.

let jobTitle;

// Null: Represents the intentional absence of any object value.

let car = null;

// Symbol (introduced in ES6): A unique and immutable data type used to create unique identifiers for objects.

let sym = Symbol("unique");

// BigInt (introduced in ES11): Represents whole numbers larger than the safe integer limit for Numbers.

let largeNumber = BigInt(1234567890123456789012345678901234567890);


// RegExp: Represents a regular expression, used for pattern matching within strings.

console.log(typeof name); // "string"
console.log(typeof age); // "number"
console.log(typeof isFrontendDeveloper); // "boolean"
console.log(typeof jobTitle); // "undefined"
console.log(typeof car); // "object" (null is considered an object)
console.log(typeof sym); // "symbol"
console.log(typeof largeNumber); // "bigint"
console.log(typeof person); // "object"
console.log(typeof skills); // "object" (arrays are objects)
console.log(typeof greet); // "function"