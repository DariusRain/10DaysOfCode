function getLetter(s) {
  let letter;
  // Write your code her
  if (s[0].match(/[aeiou]/)) {
    letter = "A";
  }
  if (s[0].match(/[bcdfg]/)) {
    letter = "B";
  }
  if (s[0].match(/[hjklm]/)) {
    letter = "C";
  }
  if (s[0].match(/[npqrstuvwxyz]/)) {
    letter = "D";
  }
  return letter;
}
