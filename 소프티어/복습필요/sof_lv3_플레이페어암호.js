const fs = require('fs');
const input = fs.readFileSync('/dev/stdin').toString().trim().split('\n');
const msg = input[0];
const key = input[1];

function solution(msg, key) {
  let answer = '';

  // ! set 객체 다루는 메서드 복습 필요
  const table = Array.from({ length: 5 }, () => Array(5).fill(''));
  const unique = new Set([...key.split('')]);
  const uniqueKey = Array.from(unique);

  let keyIndex = 0;

  for (const char of uniqueKey) {
    const col = parseInt(keyIndex / 5);
    const row = keyIndex % 5;

    table[col][row] = char;
    keyIndex++;
  }

  // ! 알파벳 다루기 및 아스키코드 관련 메서드 공부 필요
  const ALPABHET = 'ABCDEFGHIKLMNOPQRSTUVWXYZ';

  for (const char of ALPABHET) {
    if (uniqueKey.includes(char)) continue;

    const col = parseInt(keyIndex / 5);
    const row = keyIndex % 5;

    table[col][row] = char;
    keyIndex++;
  }

  const pairs = getPairsFromStr(msg);

  // ! 아래 코드 리팩토링 필요
  pairs.forEach((pair) => {
    const [leftChar, rightChar] = pair;
    const [leftRow, leftCol] = findIndexInTable(leftChar, table);
    const [rightRow, rightCol] = findIndexInTable(rightChar, table);

    if (leftRow === rightRow) {
      const cipheredLeftChar = table[leftRow][(leftCol + 1) % 5];
      const cipheredRightChar = table[rightRow][(rightCol + 1) % 5];
      answer += cipheredLeftChar + cipheredRightChar;
    } else if (leftCol === rightCol) {
      const cipheredLeftChar = table[(leftRow + 1) % 5][leftCol];
      const cipheredRightChar = table[(rightRow + 1) % 5][rightCol];
      answer += cipheredLeftChar + cipheredRightChar;
    } else {
      const cipheredLeftChar = table[leftRow][rightCol];
      const cipheredRightChar = table[rightRow][leftCol];
      answer += cipheredLeftChar + cipheredRightChar;
    }
  });

  return answer;
}

function findIndexInTable(str, table) {
  const n = table.length;
  const m = table[0].length;
  for (let i = 0; i < n; i++) {
    for (let j = 0; j < m; j++) {
      if (table[i][j] === str) return [i, j];
    }
  }
}

function getPairsFromStr(str) {
  let result = [];
  let arr = str.split('');

  for (let i = 0; i < arr.length; i += 2) {
    if (arr[i] === arr[i + 1]) {
      // ! 중간에 추가하는 방법 복습 필요
      // ! 중간 단어를 바꾸는 방식으로 리팩토링 필요
      if (arr[i] === 'X')
        arr = [...arr.slice(0, i + 1), 'Q', ...arr.slice(i + 1)];
      else arr = [...arr.slice(0, i + 1), 'X', ...arr.slice(i + 1)];
    }
  }

  if (arr.length % 2 === 1) arr.push('X');

  for (let i = 0; i < arr.length; i += 2) {
    result.push(arr[i] + arr[i + 1]);
  }

  return result;
}

console.log(solution(msg, key));
