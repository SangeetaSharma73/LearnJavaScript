// calculator.js

// Get command-line arguments
const args = process.argv.slice(2); // skips first 2 items (node and filename)
console.log(args);
const num1 = parseFloat(args[0]);
const operator = args[1];
const num2 = parseFloat(args[2]);

// Function to perform calculation
function calculate(n1, op, n2) {
  switch (op) {
    case "+":
      return n1 + n2;
    case "-":
      return n1 - n2;
    case "*":
      return n1 * n2;
    case "/":
      return n2 !== 0 ? n1 / n2 : "Cannot divide by zero!";
    default:
      return "Invalid operator. Use +, -, *, or /";
  }
}

// Check input
if (isNaN(num1) || isNaN(num2) || !operator) {
  console.log("Usage: node calculator.js <num1> <operator> <num2>");
} else {
  const result = calculate(num1, operator, num2);
  console.log(`Result: ${result}`);
}
