// 모범 답안
function solution(target, arr) {
  let answer;
  arr.sort((a, b) => a - b);
  let lt = 0,
    rt = arr.length - 1;
  while (lt <= rt) {
    let mid = parseInt((lt + rt) / 2);
    if (arr[mid] === target) {
      answer = mid + 1;
      break;
    } else if (arr[mid] > target) rt = mid - 1;
    else lt = mid + 1;
  }

  return answer;
}

let arr = [23, 87, 65, 12, 57, 32, 99, 81];
console.log(solution(32, arr));

// 3차 - 정답
// ! 1차는 문제 의도와 다른 것 같아 강의 수강 후 재풀이
function solution(target, arr) {
  let prevNum = 0;
  const n = arr.length;
  for (let i = 0; i < n; i++) {
    if (arr[i] < target) prevNum++;
  }

  return prevNum + 1;
}

function solution(target, arr) {
  const sorted = arr.slice().sort();
  let lt = 0;
  let rt = n - 1;
  let mid = 0;
  while (sorted[mid] !== target && tmp < 100) {
    mid = parseInt((rt + lt) / 2);
    if (sorted[mid] < target) lt = mid + 1;
    else if (sorted[mid] > target) rt = mid - 1;
    else return mid + 1;
  }
}

// * 2차 풀이 - 정답은 도출 (but 헛점 많음)
const solution = (arr, target) => {
  let n = arr.length;
  arr.sort((a, b) => a - b);

  let lt = 0;
  let rt = n - 1;

  while (lt < rt) {
    // ! lt,rt가 동일한 경우까지 포괄 필요
    let mid = Math.floor((lt + rt) / 2);
    if (target === arr[mid]) return mid;
    if (target < arr[mid]) {
      // ! 이미 mid는 검증하였으므로 mid-1로 설정 해야함
      rt = mid;
    } else {
      lt = mid;
      // ! 이미 mid는 검증하였으므로 mid+1로 설정 해야함
    }
  }
};

let arr = [23, 87, 65, 12, 57, 32, 99, 81];
console.log(solution(arr, 32));

// 1차 풀이
function solution(target, arr) {
  let answer;
  let sorted = arr.sort((a, b) => {
    return a - b;
  });
  console.log(sorted);
  for (let i = 0; i < sorted.length; i++) {
    console.log(1);
    console.log(sorted[i], sorted[i + 1], answer);
    if (target >= sorted[i] && target < sorted[i + 1]) answer = i + 1;
  }
  return answer;
}

let arr = [23, 87, 65, 12, 57, 32, 99, 81];
console.log(solution(32, arr));
