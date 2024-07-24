//JavaScript provides a wide variety of operators that allow you to perform different operations on variables and values. These operators can be categorized as follows:

//### Arithmetic Operators

1. **Addition (`+`)**: Adds two numbers.
   
   let sum = 5 + 3; // 8
   

2. **Subtraction (`-`)**: Subtracts the second number from the first.
   
   let difference = 5 - 3; // 2
   

3. **Multiplication (`*`)**: Multiplies two numbers.
   
   let product = 5 * 3; // 15
   

4. **Division (`/`)**: Divides the first number by the second.
   
   let quotient = 6 / 3; // 2
   

5. **Modulus (`%`)**: Returns the remainder of the division.
   
   let remainder = 7 % 3; // 1
   

6. **Exponentiation (`**`)**: Raises the first number to the power of the second.
   
   let power = 2 ** 3; // 8
   

7. **Increment (`++`)**: Increases a variable by one.
   
   let count = 0;
   count++; // 1
   

8. **Decrement (`--`)**: Decreases a variable by one.
   
   let count = 1;
   count--; // 0
   

//### Assignment Operators

1. **Assignment (`=`)**: Assigns a value to a variable.
   
   let x = 5;
   

2. **Addition assignment (`+=`)**: Adds and assigns.
   
   let x = 5;
   x += 3; // 8
   

3. **Subtraction assignment (`-=`)**: Subtracts and assigns.
   
   let x = 5;
   x -= 3; // 2
   

4. **Multiplication assignment (`*=`)**: Multiplies and assigns.
   
   let x = 5;
   x *= 3; // 15
   

5. **Division assignment (`/=`)**: Divides and assigns.
   
   let x = 6;
   x /= 3; // 2
   

6. **Modulus assignment (`%=`)**: Takes modulus and assigns.
   
   let x = 7;
   x %= 3; // 1
   

### Comparison Operators

1. **Equal (`==`)**: Checks if values are equal.
   
   let result = 5 == "5"; // true
   

2. **Strict equal (`===`)**: Checks if values and types are equal.
   
   let result = 5 === "5"; // false
   

3. **Not equal (`!=`)**: Checks if values are not equal.
   
   let result = 5 != "5"; // false
   

4. **Strict not equal (`!==`)**: Checks if values and types are not equal.
   
   let result = 5 !== "5"; // true
   

5. **Greater than (`>`)**: Checks if the left value is greater than the right value.
   
   let result = 5 > 3; // true
   

6. **Less than (`<`)**: Checks if the left value is less than the right value.
   
   let result = 5 < 3; // false
   

7. **Greater than or equal (`>=`)**: Checks if the left value is greater than or equal to the right value.
   
   let result = 5 >= 5; // true
   

8. **Less than or equal (`<=`)**: Checks if the left value is less than or equal to the right value.
   
   let result = 5 <= 5; // true
   

### Logical Operators

1. **Logical AND (`&&`)**: Returns true if both operands are true.
   
   let result = (5 > 3) && (6 > 4); // true
   

2. **Logical OR (`||`)**: Returns true if one of the operands is true.
   
   let result = (5 > 3) || (6 < 4); // true
   

3. **Logical NOT (`!`)**: Returns the inverse of the operand.
   
   let result = !(5 > 3); // false
   

### Bitwise Operators

1. **Bitwise AND (`&`)**: Performs AND operation on each bit.
   
   let result = 5 & 1; // 1
   

2. **Bitwise OR (`|`)**: Performs OR operation on each bit.
   
   let result = 5 | 1; // 5
   

3. **Bitwise XOR (`^`)**: Performs XOR operation on each bit.
   
   let result = 5 ^ 1; // 4
   

4. **Bitwise NOT (`~`)**: Inverts all the bits.
   
   let result = ~5; // -6
   

5. **Left shift (`<<`)**: Shifts bits to the left.
   
   let result = 5 << 1; // 10
   

6. **Right shift (`>>`)**: Shifts bits to the right.
   
   let result = 5 >> 1; // 2
   

7. **Zero-fill right shift (`>>>`)**: Shifts bits to the right, filling with zeroes.
   
   let result = 5 >>> 1; // 2
   

### String Operators

1. **Concatenation (`+`)**: Concatenates two strings.
   
   let greeting = "Hello" + " " + "world"; // "Hello world"
   

2. **Concatenation assignment (`+=`)**: Concatenates and assigns.
   
   let greeting = "Hello";
   greeting += " world"; // "Hello world"
   

//### Conditional (Ternary) Operator

//The ternary operator is a shorthand for an `if-else` statement.

let age = 18;
let status = age >= 18 ? "adult" : "minor";
console.log(status); // "adult"


//### typeof Operator

The `typeof` operator returns the type of a variable or an expression.

let name = "Deepak";
console.log(typeof name); // "string"


//### instanceof Operator

//The `instanceof` operator tests whether an object is an instance of a constructor or class.

let date = new Date();
console.log(date instanceof Date); // true


//Understanding and using these operators effectively is essential for writing efficient and accurate JavaScript code.