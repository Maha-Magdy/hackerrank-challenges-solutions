// The link of the challenge: https://www.hackerrank.com/challenges/repeated-string/problem

function repeatedString(s, n) {
  let total_in_string_given = 0;
  let total_in_remain = 0;
  const remaining = n % s.length;

  for (let i = s.length - 1; i >= 0; i--) {
    if (s.charAt(i) === "a") {
      total_in_string_given++;

      if (i < remaining) {
        total_in_remain++;
      }
    }
  }

  return ((n - remaining) / s.length) * total_in_string_given + total_in_remain;
}
