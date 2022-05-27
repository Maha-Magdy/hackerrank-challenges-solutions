// The link of the challenge: https://leetcode.com/problems/fibonacci-number/

var fib = function (n) {
  let fibonacciNumbers = [0, 1];
  if (n < 2) {
    return fibonacciNumbers[n];
  } else {
    for (let i = 2; i <= n; i++) {
      fibonacciNumbers.push(fibonacciNumbers[i - 1] + fibonacciNumbers[i - 2]);
    }
    return fibonacciNumbers[n];
  }
};
