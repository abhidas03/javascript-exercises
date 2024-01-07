const fibonacci = function(n) {
  if (!Number.isInteger(n)) {
    n = parseInt(n);
  }
  if (n < 0) return "OOPS";
  if (n == 0) return 0;
  if (n == 1) return 1;
  let num1 = 0;
  let num2 = 1;
  let num3 = 1;
  for (let i = 2; i < n; i++) {
    num1 = num2;
    next = num2 + num3;
    num2 = num3;
    num3 = next;
  }
  return num3;
};

// Do not edit below this line
module.exports = fibonacci;
