// 4차 - 정답
// ! 아래와 같이 작성 시 더 간결하게도 가능
function solution(str) {
  const upperCaseStr = str.toUpperCase();
  const n = str.length;
  let cnt = 0;
  for (let i = 0; i < n; i++) {
    if (str[i] === upperCaseStr[i]) cnt++;
  }
  return cnt;
}

// * 3차 답안 - 정답
function solution(str) {
  let answer = 0;
  for (let x of str) {
    if (x.toUpperCase() === x) answer++;
  }
  return answer;
}

console.log(solution('KoreaTimeGood')); // 3

// 2차 답안
let findUpperCase = function (word) {
  let count = 0;
  //숫자가 변수에 들어갈 경우 단순히 선언만 하면 NaN이 나옴
  for (x of word) {
    if (x === x.toUpperCase()) count++;
  }
  return count;
};
const ex = 'WEdasfFDEFQ';
console.log(findUpperCase(ex));

// 1차 답안
// let solution = function(s) {
//     let answer = 0;
//     for (let x of s) {
//         if (x===x.toUpperCase()) answer++
//     };
// return answer;
// };
// const ex = "WEdasfFDEFQ";
// console.log(solution(ex));
