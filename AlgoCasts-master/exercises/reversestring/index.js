// --- Directions
// Given a string, return a new string with the reversed
// order of characters
// --- Examples
//   reverse('apple') === 'leppa'
//   reverse('hello') === 'olleh'
//   reverse('Greetings!') === '!sgniteerG'

// method 1

// function reverse(str) {
//   let rev = "";
//   for (let char of str) {
//     rev = char + rev;
//   }
//   return rev;
// }

// method 2

function reverse(str) {
  return str.split("").reduce((rev, char) => char + rev, "");
}

module.exports = reverse;
    