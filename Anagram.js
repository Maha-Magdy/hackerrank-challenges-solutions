// The link of the challenge: https://www.hackerrank.com/challenges/anagram/problem

function anagram(s) {
  let result = 0;
  if (s.length % 2 !== 0) {
    return -1;
  } else {
    let stringToArray = s.split("");
    let first_string_arr = stringToArray.slice(0, stringToArray.length / 2);
    let second_string_arr = stringToArray.slice(stringToArray.length / 2);

    for (let element of first_string_arr) {
      if (second_string_arr.indexOf(element) === -1) {
        result++;
      } else {
        second_string_arr.splice(second_string_arr.indexOf(element), 1);
      }
    }
    return result;
  }
}
