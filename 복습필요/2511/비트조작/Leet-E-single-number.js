// * 문제
// *

//
//

// * 모범 답안
// XOR(^) 연산의 주요 성질:
// 	1.	a ^ a = 0 (같은 값끼리 XOR → 0)
// 	2.	a ^ 0 = a
// 	3.	순서에 상관없이 결합/교환 가능 (즉, (a ^ b) ^ c === a ^ (b ^ c))

// 따라서, 배열의 모든 숫자를 XOR 하면
// 짝수 번 등장한 숫자는 모두 0으로 상쇄되고
// 한 번만 등장한 숫자만 남습니다.

var singleNumber = function (nums) {
  let result = 0;
  for (let i = 0; i < nums.length; i++) {
    result ^= nums[i];
  }
  return result;
};

// * 3차 풀이

// * 2차 풀이

// * 1차 풀이
