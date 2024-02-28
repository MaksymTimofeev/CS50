let cesar = (symbolStr, codeKey) => {
  let symbolCipher = '';
  for (i = 0; i <= symbolStr.length - 1; i++) {
    let symbolCode = symbolStr[i];
    if (
      symbolCode.charCodeAt() >= 'A'.charCodeAt() &&
      symbolCode.charCodeAt() <= 'Z'.charCodeAt()
    ) {
      symbolCode =
        ((symbolCode.charCodeAt() - 'A'.charCodeAt() + codeKey) % 26) +
        'A'.charCodeAt();
      symbolCode = String.fromCharCode(symbolCode);
    } else if (
      symbolCode.charCodeAt() >= 'a'.charCodeAt() &&
      symbolCode.charCodeAt() <= 'z'.charCodeAt()
    ) {
      symbolCode =
        ((symbolCode.charCodeAt() - 'a'.charCodeAt() + codeKey) % 26) +
        'a'.charCodeAt();
      symbolCode = String.fromCharCode(symbolCode);
    } else {
      symbolCode = symbolCode.charCodeAt();
      symbolCode = String.fromCharCode(symbolCode);
    }
    console.log(symbolCode);
    symbolCipher += symbolCode;
  }
  symbolStr = symbolCipher;
  console.log(symbolStr);
};
console.log(
  cesar(
    'If he had anything confidential to say, he wrote it in cipher, that is, by so changing the order of the letters of the alphabet, that not a word could be made out. If he had anything confidential to say, he wrote it in cipher, that is, by so changing the order of the letters of the alphabet, that not a word could be made out!',
    500
  )
);
