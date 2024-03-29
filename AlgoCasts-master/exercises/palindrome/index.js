// --- Directions
// Given a string, return true if the string is a palindrome
// or false if it is not.  Palindromes are strings that
// form the same word if it is reversed. *Do* include spaces
// and punctuation in determining if the string is a palindrome.
// --- Examples:
//   palindrome("abba") === true
//   palindrome("abcdefg") === false

function palindrome(str) {
  return str.split("").every((element, i) => {
    return element === str[str.length -i-1];
  });
}

// function palindrome(str) {
//   let rev = "";
//   for (char of str) {
//     rev = char + rev;
//   }
//   return rev === str;
// }

module.exports = palindrome;
