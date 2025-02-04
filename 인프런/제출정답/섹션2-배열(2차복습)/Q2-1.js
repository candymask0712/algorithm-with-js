// 5차 - 정답

function solution(arr) {
  return arr.filter((el, i) => (i > 0 ? el > arr[i - 1] : el));
}

// * 4차 풀이 - 정답
function solution(arr) {
  let answer = [];
  answer.push(arr[0]);
  arr.forEach((el, i) => {
    if (arr[i + 1] > arr[i]) answer.push(arr[i + 1]);
  });
  return answer;
}

// 3차 풀이 (정답과 일치)
const arr = [7, 3, 9, 5, 6, 12];
const biggerThanPrevNum = function (t) {
  let answer = [];
  answer.push(t[0]);
  // 배열의 이전 원소와 비교하는 경우 arr[-1]은 undefined이고
  // 대소비교가 불가능한 상황이므로 최초의 원소는 그냥 삽입
  for (let i = 1; i < t.length; i++) {
    if (t[i] > t[i - 1]) answer.push(t[i]);
  }
  return answer;
};

// console.log(arr[-1]);
// console.log(undefined < arr[0]);

// 2차 풀이 - 틀림 (문제 잘 못 읽음)
// const arr = [7,3,9,5,6,12]
// const biggerThanPrevNum = function (t) {
//     let answer = arr[0];
//     for (x of t) {
//         if (x > answer) answer = x;
//     }
//     return answer;
// }
// console.log(biggerThanPrevNum(arr));

// 1차 풀이
const b = [7, 3, 9, 5, 6, 12];
const bigger = function (t) {
  const a = 6;
  let answer = [];
  for (i = 0; i < 6; i++) {
    if (t[i + 1] >= t[i]) answer.push(t[i + 1]);
  }
  return answer;
};
console.log(bigger(b));
