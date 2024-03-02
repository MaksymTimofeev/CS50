let vigenere = (symbolStr, codeKey) => {
  let symbolCipher = '';
  let j = 0;
  for (i = 0; i <= symbolStr.length - 1; i++) {
    let symbolCode = symbolStr[i];
    let codeKeyItem = codeKey[j];
    j++;
    if (j > codeKey.length - 1) {
      j = 0;
    }
    if (
      codeKeyItem.charCodeAt() >= 'A'.charCodeAt() &&
      codeKeyItem.charCodeAt() <= 'Z'.charCodeAt()
    ) {
      codeKeyItem = codeKeyItem.charCodeAt() - 'A'.charCodeAt();
    } else if (
      codeKeyItem.charCodeAt() >= 'a'.charCodeAt() &&
      codeKeyItem.charCodeAt() <= 'z'.charCodeAt()
    ) {
      codeKeyItem = codeKeyItem.charCodeAt() - 'a'.charCodeAt();
    } else {
      codeKeyItem = codeKeyItem.charCodeAt();
      return console.log('keyword');
    }
    if (
      symbolCode.charCodeAt() >= 'A'.charCodeAt() &&
      symbolCode.charCodeAt() <= 'Z'.charCodeAt()
    ) {
      symbolCode =
        ((symbolCode.charCodeAt() - 'A'.charCodeAt() + codeKeyItem) % 26) +
        'A'.charCodeAt();
      symbolCode = String.fromCharCode(symbolCode);
    } else if (
      symbolCode.charCodeAt() >= 'a'.charCodeAt() &&
      symbolCode.charCodeAt() <= 'z'.charCodeAt()
    ) {
      symbolCode =
        ((symbolCode.charCodeAt() - 'a'.charCodeAt() + codeKeyItem) % 26) +
        'a'.charCodeAt();
      symbolCode = String.fromCharCode(symbolCode);
    } else {
      symbolCode = symbolCode.charCodeAt();
      symbolCode = String.fromCharCode(symbolCode);
    }
    console.log(symbolCode);
    console.log(codeKeyItem);
    symbolCipher += symbolCode;
  }
  symbolStr = symbolCipher;
  console.log(symbolStr);
};
console.log(vigenere('Stasiks', 'ABCD'));
