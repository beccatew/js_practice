// Write a script function that returns a passed string with letters in
// alphabetical order.
// Example string : 'webmaster'
// Expected Output : 'abeemrstw'

var str = "z a zzz bb xx"

function abc(str) {
  return str.split('').sort(' ').join(' ');
}  console.log(abc(str));

// ---------------------------------------------------
// Write a script that accepts a string as a parameter and converts
// the first letter of each word of the string in upper case.
// Example string : 'the quick brown fox'
// Expected Output : 'The Quick Brown Fox'

var str = "i am going to turn the first word to uppercase"

function capitalize(str) {
  return str.replace(/\w\S*/g,
  function(txt){
  return txt.charAt(0).toUpperCase() + txt.substr(1).toLowerCase();});
} console.log(capitalize(str));
// ---------------------------------------------------

// Write a script that accepts a string as a parameter and find the longest
// word within the string.
// Example string : 'Web Development Tutorial'
// Expected Output : 'Development'

function findLongestWord(str) {
  const stringArray = str.split(" ");
  const longestWord = stringArray.reduce((a, b) => {
    if(b.length > a.length) {
      return b;
    } else {
      return a;
    }
  });
    return longestWord;
}
  console.log(findLongestWord("this is a test to get the longest word"));
// ---------------------------------------------------

// Write a script to split a string and convert it into an array of words.

var str = "Look at me converting string to an array";
var res = str.split(" ");

console.log(res);
// ---------------------------------------------------

// Write a script to remove specified number of characters from a string.

var str = "lets remove some and characters"
var res = str.replace('and ', '');

console.log(res);
