const add = function(num1, num2) {
  return num1 + num2;
	
};

const subtract = function(num1, num2) {
  return num1 - num2;
};

const sum = function(arr) {
  let total = 0;
  arr.forEach(element => total += element);
  return total;
};

const multiply = function(arr) {
  let total = 1;
  arr.forEach(element => total *= element);
  return total;
};

const power = function(base, power) {
  return Math.pow(base, power);	
};

const factorial = function(num) {
  if (num < 0) return NaN; 
  let total = 1;
  for (let i = 1; i <= num; i++) {
    total *= i;
  }
  return total;
	
};

// Do not edit below this line
module.exports = {
  add,
  subtract,
  sum,
  multiply,
  power,
  factorial
};
