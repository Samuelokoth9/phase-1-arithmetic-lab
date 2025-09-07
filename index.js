// Write your code here

// 1. Multiply: the result should be 62
const num1 = 31;
const num2 = 2;
const multiply = num1 * num2;

// 2. Random: should generate a random integer greater than 0
const random = Math.floor(Math.random() * 100) + 1;

// 3. Mod: should be the remainder of num3 divided by num4, result is 4
const num3 = 28;
const num4 = 6;
const mod = num3 % num4;

// 4. Max: should return 20 as the highest number
const max = Math.max(1, 2, 3, 4, 20);

module.exports = { num1, num2, multiply, random, num3, num4, mod, max };
