// Hackerrank
// https://www.hackerrank.com/challenges/js10-bitwise/problem
const getMaxLessThanK = (n, k) => {
    let max = 0;
    for (let i = 1; i <= n; i++) {
      for (let j = i + 1; j <= n; j++) {
        let bitwise = (i & j);
        (bitwise < k && bitwise > max) && (max = bitwise);
      }
    }
    return max;
  };
  
  