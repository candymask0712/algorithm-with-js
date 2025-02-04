// 모범 답안
function solution(arr) {
  let answer = [];
  let sortArr = arr.slice();
  sortArr.sort((a, b) => a - b);
  for (let i = 0; i < arr.length; i++) {
    if (arr[i] !== sortArr[i]) answer.push(i + 1);
  }
  return answer;
}

let arr = [120, 125, 152, 130, 135, 135, 143, 127, 160];
console.log(solution(arr));

// 4차 - 정답
const solution = (arr) => {
  const sorted = arr.slice().sort();
  return arr.reduce(
    (answer, el, i) => {
      if (answer[0] === 0 && el !== sorted[i]) return [i + 1, 0];
      else if (el !== sorted[i]) return [answer[0], i + 1];
      else return answer;
    },
    [0, 0]
  );
};

// 3차 풀이 - 한번의 루프로 답 도출 성공
const solution = (arr) => {
  let hyun = [];
  let pair = [];

  for (let i = 0; i < arr.length; i++) {
    if (arr[i] >= arr[i + 1]) hyun.push(i + 1);
    if (arr[i] < arr[i - 1]) pair.push(i + 1);
    // ! 모범답안은 원래 정렬된 배열과 비교하는 방식으로 풀이
  }
  return [hyun[0], pair[pair.length - 1]];
};

// 2차 풀이  - 1차 풀이와 동일 ㅠ

// 1차 풀이 - 풀이 했으나 정답보다 복잡
function kidding(arr) {
  let pair;
  let heon;
  for (let i = arr.length - 1; i >= 0; i--) {
    if (arr[i] < arr[i - 1]) {
      pair = i + 1;
      break;
    }
  }
  for (let j = 0; j < arr.length; j++) {
    if (arr[j] >= arr[j + 1]) {
      heon = j + 1;
      break;
    }
  }
  return [heon, pair];
}
let arr = [120, 125, 152, 130, 135, 135, 143, 127, 160];
let arr2 = [120, 130, 150, 150, 130, 150];
console.log(kidding(arr));
console.log(kidding(arr2));
