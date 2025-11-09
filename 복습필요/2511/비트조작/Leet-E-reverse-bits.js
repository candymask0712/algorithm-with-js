// * 문제
// *

//
//

// * 모범 답안

var reverseBits = function (n) {
  // 1. 2진 문자열로 변환 후 32자리로 맞춤
  let binary = n.toString(2).padStart(32, '0');
  // 2. 뒤집기
  let reversed = binary.split('').reverse().join('');
  // 3. 2진수를 10진수로 변환
  return parseInt(reversed, 2);
};

// * 최적화 답안
var reverseBits = function (n) {
  let res = 0;
  for (let i = 0; i < 32; i++) {
    res = (res << 1) | (n & 1); // n의 마지막 비트를 res에 추가
    n >>>= 1; // 부호 없는 오른쪽 시프트
  }
  return res >>> 0; // 부호 없는 32비트 정수로 변환
};

// * 3차 풀이

// * 2차 풀이
// ? 시간복잡도: O(n의 길이)
// ? 공간복잡도: O(n의 길이)
var reverseBits = function (n) {
  let binary = n.toString(2).padStart(32, '0');
  let reversed = binary.split('').reverse().join('');
  return parseInt(reversed, 2);
};

// * 1차 풀이
var reverseBits = function (n) {
  return Number(
    String(n)
      // ! toString은 숫자에서만 사용가능
      .toString(2)
      .split('')
      .reverse()
      .join('')
      // ! 10진수로 변환 틀림
      .toString(10)
  );
};
