// <모범답안>
let minAmongThree = function (a, b, c) {
  let answer;
  let dummy;
  if (a < b) answer = a;
  else answer = b;
  if (c < answer) answer = c;
  return answer;
};

// * 4차 답안 - 성공 (23.01.31)
const solution4 = (a, b, c) => {
  return Math.min(a, b, c);
};

//* 3차 답안 - 성공 (이전보다 깔끔한 풀이)
const solution = (a, b, c) => {
  let big;
  if (a >= b) a = big;
  else b = big;

  if (big >= c) return big;
  else return c;
};

console.log(solution(6, 5, 11));
console.log(solution(1, 1, 1));
console.log(solution(-1, -2, 1));

// <2차 답안> 전체 경우의 수를 모두 각각의 식으로 나눠서 구성함 -> answer로 스노우불링을 하기 어려움
// let minAmongThree = function (a, b, c) {
//   let answer;
//   if (a < b) answer = a;
//     if (a < c) answer = a;
//     else answer = c;
//   else answer = b;
//     if (b < c) answer = b;
//     else answer = c;
//   return answer;
// }

// <1차 답변>
// let minAmongThree = function (a, b, c) {
//   if (a < b && b < c) {
//     return a;
//   } else if (b < a && b < c) {
//     return b;
//   } else {
//     return c;
//   }
// };
