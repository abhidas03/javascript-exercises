const sumAll = function(num1, num2) {
  if (!(Number.isInteger(num1) && Number.isInteger(num2))) return 'ERROR';
  if (num1 < 0 || num2 < 0) return 'ERROR';

  let sum = 0;
  if (num2 < num1) {
    let temp = num2;
    num2 = num1;
    num1 = temp;
  }
  for (let curr = num1; curr <= num2; curr++) {
    sum += curr;
  }

  return sum;
};

// Do not edit below this line
module.exports = sumAll;
