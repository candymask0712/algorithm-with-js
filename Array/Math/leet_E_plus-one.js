var plusOne = function (digits) {
  let num = Number(digits.join(''));
  console.log(num);
  num++;
  console.log(num);
  const answer = [];
  for (const digit of String(num)) {
    answer.push(Number(digit));
  }
  return answer;
};

// 나의 풀이 - 2
// ! 큰 숫자를 고려 bigInt로 변경
var plusOne = function (digits) {
  // 배열을 문자열로 합친 후 BigInt로 변환
  let num = BigInt(digits.join(''));
  // 1을 더함
  num = num + 1n; // BigInt 리터럴은 숫자 뒤에 'n'을 붙임
  // 문자열로 변환하고 각 자릿수를 배열로 변환
  return String(num).split('').map(Number);
};
