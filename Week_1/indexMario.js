let rows = 5;

function mario(rows) {
  let str = '';

  for (let i = 1; i <= rows; i++) {
    for (let j = 1; j <= rows - i; j++) {
      str += ' ';
    }

    for (let x = 1; x <= i; x++) {
      str += '*';
    }
    str += '\n';
  }
  console.log(str);
}
console.log(mario(50));
