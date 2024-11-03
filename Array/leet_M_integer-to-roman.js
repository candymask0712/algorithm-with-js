// * 나의 풀이
var intToRoman = function (num) {
  let answer = '';
  // ! 4,9 등의 예외를 고려하지 않아 실패
  const table = [
    ['M', 1000],
    ['D', 500],
    ['C', 100],
    ['L', 50],
    ['X', 10],
    ['V', 5],
    ['I', 1]
  ];

  for (const [roman, value] of table) {
    const count = Math.floor(num / value);
    answer += roman.repeat(count);
    num %= value;
  }
  console.log(answer);
};

// * 모범 풀이
const intToRoman = function (num) {
  // 로마 숫자와 값을 매핑한 배열
  // ! 최대값이 3999 제약사양을 이용해 4,9 관련 예외 모두 하드코딩
  const values = [1000, 900, 500, 400, 100, 90, 50, 40, 10, 9, 5, 4, 1];
  const symbols = [
    'M',
    'CM',
    'D',
    'CD',
    'C',
    'XC',
    'L',
    'XL',
    'X',
    'IX',
    'V',
    'IV',
    'I'
  ];

  let result = '';

  // 각 값에 대해 반복
  for (let i = 0; i < values.length; i++) {
    // 현재 값으로 나눌 수 있는 만큼 나누고 해당하는 로마 숫자를 더함
    while (num >= values[i]) {
      result += symbols[i];
      num -= values[i];
    }
  }

  return result;
};
