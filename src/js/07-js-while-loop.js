/**
 * This quiz is to test your knowledge of while-Loop.
 *
 * 1. Create a repository by cloning: https://github.com/jorgecarmona/npm-project-template
 * 2. Follow the README for instructions
 * 3. When you finish the quiz, create a PR on you repository
 * 4. Submit to your lead
 */

/**
 * Question 1
 * Using a while loop, sum all numbers from 1 to 10 and store the result in a variable called sum.
 */

let sum = 0; 
let number = 1; 

while (number <= 10) {
  sum += number; 
  number++; 
}

console.log("[Question #1]: ", sum);

/**
 * Question 2
 * Using a while loop, create a string of numbers from 5 to 15 separated by commas, e.g., "5,6,7,...,15".
 */
let result = ""; 
let number2 = 5; 

while (number2 <= 15) {
  result += number2; 

  if (number2 < 15) {
    result += ","; 
  }

  number2++; 
}
console.log("[Question #2]: ", result );
/**
 * Question 3
 * Print all even numbers between 10 and 30 using a while loop.
 */
let number3 = 10; 

while (number3 <= 30) {
  if (number3 % 2 === 0) {
    console.log("[Question #3]: ", number3 ); 
  }
  number3++; 
}


/**
 * Question 4
 * Determine the smallest power of 2 greater than 1000 using a while loop.
 */
let powerOf2 = 1; // start with 2^0
let exponent = 0;

while (powerOf2 <= 1000) {
  powerOf2 *= 2; 
  exponent++;
}
console.log("[Question #4]: ", powerOf2);

/**
 * Question 5
 * Reverse a string "HelloWorld" using a while loop.
 */

const inputString = "HelloWorld";
let reversedString = "";
let index = inputString.length - 1;

while (index >= 0) {
  reversedString += inputString.charAt(index); 
  index--; 
}
console.log("[Question #5]: ",reversedString );


/**
 * Question 6
 * Using a while loop, count how many times the letter 'a' appears in the string "banana".
 */
let fruit = "banana";
let count = 0;
let index2 = 0;

while (index2 < fruit.length) {
  if (fruit.charAt(index2) === 'a') {
    count++; 
  }
  index2++; 
}
console.log("[Question #6]: ",  count);

/**
 * Question 7
 * Using a while loop, compute the factorial of 5.
 * */

let number4 = 5; 
let factorial = 1; 

while (number4 > 0) {
  factorial *= number; 
  number4--;
}
console.log("[Question #7]: ", factorial);
/**
 * Question 8
 * Print all numbers from 100 to 80 in descending order using a while loop.
 */
let number5 = 100;

while (number5 >= 80) {
  console.log("[Question #8]: ", number5); 
  number5--; 
}

/**
 * Question 9
 * Using a while loop, find the greatest common divisor (GCD) of two numbers, 56 and 98.
 */
// Function to calculate the GCD of two numbers using the Euclidean algorithm
function findGCD(a, b) {
  while (b !== 0) {
    let temp = b;
    b = a % b;
    a = temp;
  }
  return a;
}

// Numbers for which we want to find the GCD
let number1 = 56;
let number6 = 98;

// Calculate and print the GCD
let gcd = findGCD(number1, number6);

console.log("[Question #9]: ", gcd);

/**
 * Question 10
 * Calculate the sum of all odd numbers between 1 and 50 using a while loop.
 */
let odd = 1; // comienzo con el primer numero impar, 1
let sum1 = 0; // inicio la suma con la variable  0

while (odd <= 50) {
  sum1 += odd; 
  odd += 2; 
}

console.log("[Question #10]: ", sum1 );