// * 문제
// *

//
//

// * 모범 답안
var addBinary = function (a, b) {
  let i = a.length - 1;
  let j = b.length - 1;
  let carry = 0;
  let result = '';

  while (i >= 0 || j >= 0 || carry > 0) {
    const bitA = i >= 0 ? Number(a[i]) : 0;
    const bitB = j >= 0 ? Number(b[j]) : 0;
    const sum = bitA + bitB + carry;

    result = (sum % 2) + result;
    carry = Math.floor(sum / 2);

    i--;
    j--;
  }

  return result;
};

// * 3차 풀이

// * 2차 풀이

// * 1차 풀이
// ? 시간복잡도: O(max(n, m)) → 최대 길이만큼 한 번 돈다
// ? 공간복잡도: O(max(n, m)) → 결과 문자열 길이만큼 필요

var addBinary = function (a, b) {
  const n = Math.max(a.length, b.length);
  let answer = '';

  let flag = false;
  a = a.padStart(n, '0');
  b = b.padStart(n, '0');

  for (let i = n - 1; i >= 0; i--) {
    const aNum = Number(a[i] || '0');
    const bNum = Number(b[i] || '0');

    let nextNum = aNum + bNum + (flag ? 1 : 0);
    if (nextNum >= 2) {
      flag = true;
      nextNum -= 2;
    } else {
      flag = false;
    }

    answer = nextNum + answer;
  }

  return flag ? 1 + answer : answer;
};
