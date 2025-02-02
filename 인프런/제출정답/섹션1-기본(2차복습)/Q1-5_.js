// * 3차 답안 - 정답 (다만 sort 사용해 시간복잡도 높음)
const solution = (arr) => {
  arr = arr.sort((a, b) => a - b);
  return arr[0];
};

// 2차 답안 - 1차 답안에서 함수 밖에서 변수 선언, var, let 등 수정
const arr = [5, 7, 1, 3, 2, 9, 11];

function solution(arr) {
  let answer = Number.MAX_SAFE_INTEGER;
  for (let i = 0; i < arr.length; i++) {
    if (arr[i] < answer) answer = arr[i];
  }
  return answer;
}

// 1차답안
// let arr = [5, 7, 1, 3, 2, 9, 11];
// var answer;
// function solution(arr) {
//   for (var i = 0; i < arr.length; i++) {
//     if (arr[i] < answer) {
//       answer = arr[i];
//     }
//   }
// }
