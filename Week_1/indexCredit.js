let cardId = '1124856245443653';

let arrCard = [],
  arrCard2 = [];

let summa = 0,
  summa1 = 0;
summaCardId = 0;

function cardCheck(cardId) {
  for (i = cardId.length - 1; i >= 0; i--) {
    if (i % 2 === 0) {
      arrCard.push(cardId[i] * 2);
      summa = summa + cardId[i] * 2;
      console.log(summa);
    } else {
      arrCard2.push(cardId[i]);
      summa1 = summa1 + +cardId[i];
      console.log(summa1);
    }
    summaCardId = summa + summa1;
  }
  if (summaCardId % 10 == 0) {
    return console.log('Visa');
  }
  if (summaCardId % 7 == 0) {
    return console.log('masterCart');
  } else {
    return console.log('Невалідна карта');
  }
}

console.log(cardCheck(cardId));
console.log(arrCard);
console.log(arrCard2);
console.log(summaCardId);
