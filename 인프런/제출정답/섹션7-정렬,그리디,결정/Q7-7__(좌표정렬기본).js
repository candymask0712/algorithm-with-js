// * 모범 답안
function solution(arr) {
  let answer = arr;
  arr.sort((a, b) => {
    if (a[0] === b[0]) return a[1] - b[1];
    else return a[0] - b[0];
  });

  return answer;
}
let arr = [
  [2, 7],
  [1, 3],
  [1, 2],
  [2, 5],
  [3, 6]
];
console.log(solution(arr));

// 4차- 정답
function solution(arr) {
  // ! 정렬에 대해서 모범답안처럼 깔끔하게 풀이 가능
  return arr.sort((a, b) => {
    if (a[0] === b[0]) {
      if (a[1] >= b[1]) return 1;
      else return -1;
    } else if (a[0] > b[0]) return 1;
    else return -1;
  });
}

// * 3차 풀이 - 실패
const solution = (arr) => {
  arr = arr.sort((a, b) => {
    if (a[0] === b[0]) a[1] - b[1];
    else a[0] - b[0];
    // ! 기본 포맷을 생각하고 return을 넣지 않음
  });
  return arr;
};

// * 2차 풀이 - 정답보고 풀이
const solution = () => {
  arr.sort((a, b) => {
    if (a[0] === b[0]) return a[1] - b[1];
    else return a[0] - b[0];
  });
};

console.log(solution());

// * 1차 풀이 - 풀이 실패로 정답 타이핑
function solution(arr) {
  let answer = arr;
  arr.sort((a, b) => {
    if (a[0] === b[0]) return a[1] - b[1];
    else return a[0] - b[0];
  });

  return answer;
}
let arr = [
  [2, 7],
  [1, 3],
  [1, 2],
  [2, 5],
  [3, 6]
];
console.log(solution(arr));
