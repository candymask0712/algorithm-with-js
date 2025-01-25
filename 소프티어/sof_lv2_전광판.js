const fs = require('fs');
const input = fs.readFileSync('/dev/stdin').toString().trim().split('\n');

const n = Number(input[0]);
const testCases = input.slice(1).map((line) => line.split(' ').map(Number));

const digitList = {
  // ! 비어 있는 것과 0을 동일하다 생각해 풀이 지연
  '*': [0, 0, 0, 0, 0, 0, 0],
  0: [1, 1, 1, 1, 1, 1, 0],
  1: [0, 0, 1, 1, 0, 0, 0],
  2: [0, 1, 1, 0, 1, 1, 1],
  3: [0, 1, 1, 1, 1, 0, 1],
  4: [1, 0, 1, 1, 0, 0, 1],
  5: [1, 1, 0, 1, 1, 0, 1],
  6: [1, 1, 0, 1, 1, 1, 1],
  7: [1, 1, 1, 1, 0, 0, 0],
  8: [1, 1, 1, 1, 1, 1, 1],
  9: [1, 1, 1, 1, 1, 0, 1],
};

function getDigits(num) {
  const digits = [];
  const fullNum = String(num).padStart(5, '*');
  for (const char of fullNum) {
    const digit = digitList[char];
    digits.push(digit);
  }

  return digits;
}

function getDiffInDigits(digit1, digit2) {
  if (digit1.length !== digit2.length) throw Error('Digit length is not same!');

  let count = 0;
  for (let i = 0; i < 7; i++) {
    if (digit1[i] !== digit2[i]) count++;
  }
  return count;
}

testCases.forEach((testCase) => {
  let totalCount = 0;
  const [prevNum, curNum] = testCase;
  const prevDigits = getDigits(prevNum);
  const curDigits = getDigits(curNum);

  for (let i = 0; i < 5; i++) {
    totalCount += getDiffInDigits(prevDigits[i], curDigits[i]);
  }
  console.log(totalCount);
});

// console.log(solution(cases))
