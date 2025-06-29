// Write a function that takes in a string and returns the number of unique vowels in that string. For example, for the input "meeting", the output should be 2 ("e", "i").

function uniqueVowel(str) {
  str = "meeting";
  unique = [...new Set(st)];

  let c = 0;
  let vowel = "aeiou";
  for (let letter of unique) {
    for (let j = 0; j < vowel.length; j++) {
      if (letter === vowel[j]) {
        c++;
      }
    }
  }
  return c;
}
