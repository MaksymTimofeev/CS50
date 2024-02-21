let rows = 8;

function marioHard(rows) {
  let str = '';

  for (let i = 1; i <= rows; i++) {
    for (let j = 1; j <= rows - i; j++) {
      str += ' ';
    }
    for (let x = 1; x <= i; x++) {
      str += '*';
    }
    str += ' ';
    for (let j = 1; j <= i; j++) {
      str += '*';
    }
    str += '\n';
  }

  console.log(str);
}

console.log(marioHard(50));
