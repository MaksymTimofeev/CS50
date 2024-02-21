function cash(summa) {
  let coint25cent = 0;
  let coint10cent = 0;
  let coint5cent = 0;
  let coint1cent = 0;
  console.log(summa);
  while (summa > 0) {
    if (summa >= 0.25) {
      coint25cent++;
      summa -= 0.25;
      summa = summa.toFixed(2);
      continue;
    }
    if (summa >= 0.1) {
      coint10cent++;
      summa -= 0.1;
      summa = summa.toFixed(2);
      continue;
    }
    if (summa >= 0.05) {
      coint5cent++;
      summa -= 0.05;
      summa = summa.toFixed(2);
      continue;
    }
    if (summa >= 0.01) {
      coint1cent++;
      summa -= 0.01;
      summa = summa.toFixed(2);
      continue;
    }
    if (summa < 0.01 && summa > 0) {
      coint1cent++;
    }
    break;
  }
  let coinSumma = coint25cent + coint10cent + coint5cent + coint1cent;
  console.log(coinSumma);
  console.log(coint25cent);
  console.log(coint10cent);
  console.log(coint5cent);
  console.log(coint1cent);
  console.log(summa);
}
cash(3.18);
