export function cyptWord() {
  let ex = 'middle-Outz';
  let rotate = 2;
  return caesarCipher(ex, rotate);
  function caesarCipher(s, k) {
    // Write your code here
    let alphabet = 'abcdefghijklmnopqrstuvwxyz';
    let exWord = [...s];
    let result = [...s];

    exWord.forEach((word, index) => {
      let a = word;
      let alphabetIndex = alphabet.indexOf(a.toLowerCase());
      if (alphabetIndex >= 0) {
        let target = alphabetIndex + k;
        if (target > alphabet.length - 1) {
          target = target % alphabet.length;
        }
        if (result[index].toUpperCase() === exWord[index]) {
          result[index] = alphabet[target].toUpperCase();
        } else {
          result[index] = alphabet[target];
        }
      }
    });
    console.log(result.join(''));
  }
}
