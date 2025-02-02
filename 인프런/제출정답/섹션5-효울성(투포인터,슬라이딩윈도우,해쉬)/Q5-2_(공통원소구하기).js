// * 문제

// * 모범 답안
function solution(arr1, arr2) {
  let answer = [];
  arr1.sort();
  arr2.sort();
  let p1 = (p2 = 0);
  while (p1 < arr1.length && p2 < arr2.length) {
    if (arr1[p1] == arr2[p2]) {
      answer.push(arr1[p1++]);
      // ! 정답에 원소를 넣으면서 동시에 p1을 1씩 증가시키는 테크닉
      p2++;
    } else if (arr1[p1] < arr2[p2]) p1++;
    else p2++;
  }
  return answer;
}

// 7차 - 정답

const solution = (arr1, arr2) => {
  const answer = [];
  const n = arr1.length;
  const m = arr2.length;

  let p1 = 0;
  let p2 = 0;

  arr1 = arr1.sort();
  arr2 = arr2.sort();

  while (p1 < n && p2 < m) {
    if (arr1[p1] > arr2[p2]) p2++;
    else if (arr1[p1] < arr2[p2]) p1++;
    else {
      answer.push(arr1[p1]);
      p1++;
      p2++;
    }
  }
  return answer;
};

// * 6차 답안 - 성공
const solution = (arr1, arr2) => {
  let answer = [];
  let p1 = (p2 = 0);
  arr1.sort((a, b) => a - b);
  arr2.sort((a, b) => a - b);

  while (p1 < arr1.length && p2 < arr2.length) {
    if (arr1[p1] === arr2[p2]) {
      answer.push(arr1[p1]);
      p1++;
      p2++;
    } else if (arr1[p1] > arr2[p2]) {
      p2++;
    } else {
      p1++;
    }
  }
  return answer;
};

// * 5차 답안 - 성공 (엣지케이스 대응 실패)
// ! 정답케이스는 통과했으나 풀이 오류
const solution = (arr1, arr2) => {
  arr1.sort((a, b) => a - b);
  arr2.sort((a, b) => a - b);

  let p1 = 0;
  let p2 = 0;

  let answer = [];

  while (p1 < arr1.length && p2 < arr1.length) {
    if (arr1[p1] === arr2[p2]) {
      answer.push(arr1[p1]);
      p1++;
      p2++;
    } else if (arr1[p1] > arr2[p2]) {
      // ! p2는 증가시키면 안됨  (같은 경우를 제외하고 작은 쪽 포인터만 증가시켜야 함)
      p1++;
      p2++;
    } else {
      p1++;
    }
  }

  return answer;
};

// * 4차 답안 - 정답 (복잡도 해결 실패)
// ! 먼저 정렬하고 검색하는 시도는 좋았으나 투포인터 적용 실패
const solution = (arr1, arr2) => {
  arr1.sort((a, b) => a - b);
  arr2.sort((a, b) => a - b);

  let answer = [];

  for (let i = 0; i < arr1.length; i++) {
    for (let j = 0; j < arr2.length; j++) {
      if (arr1[i] === arr2[j]) {
        answer.push(arr1[i]);
        break;
      } else if (arr1[j] > arr2[i]) {
        break;
      }
    }
  }
  return answer;
};

// * 3차 답안 - 투 포인터 사용으로 복잡도 감소
const solution = (arr1, arr2) => {
  let answer = [];
  arr1.sort((a, b) => a - b);
  arr2.sort((a, b) => a - b);

  let n = arr1.length;
  let m = arr2.length;
  let p1 = 0;
  let p2 = 0;

  while (p1 < n && p2 < m) {
    console.log('p1', p1, 'p2', p2, 'arr1[p1]', arr1[p1], 'arr2[p2]', arr2[p2]);
    if (arr1[p1] === arr2[p2]) {
      answer.push(arr1[p1]);
      p1++;
      p2++;
    } else if (arr1[p1] < arr2[p2]) {
      p1++;
    } else p2++;
  }

  answer.sort((a, b) => a - b);
  return answer;
};

let arr1 = [1, 3, 9, 5, 2];
let arr2 = [3, 2, 5, 7, 8];

console.log(solution(arr1, arr2)); // [2,3,5]

// * 2차 답안 - 일반적 for문 이용 풀이
const solution = (arr1, arr2) => {
  let answer = [];
  let p1 = 0;
  let p2 = 0;

  for (let i = 0; i < arr1.length; i++) {
    if (arr2.includes(arr1[i])) answer.push(arr1[i]);
  }
  answer.sort((a, b) => a - b);
  return answer;
};

let arr1 = [1, 3, 9, 5, 2];
let arr2 = [3, 2, 5, 7, 8];

console.log(solution(arr1, arr2)); // [2,3,5]

// * 1차 답안
// ! 이중 for문을 통한 풀이법 = 복잡도가 높음 -> 투 포인트 방법으로 풀이 필요

let printer = function (a, b) {
  arr1.sort();
  arr2.sort();
  let answer = [];
  let p1 = (p2 = 0);
  for (i = 0; i < arr1.length; i++) {
    for (j = 0; j < arr2.length; j++) {
      if (arr1[i] === arr2[j]) answer.push(arr1[i]);
    }
  }
  return answer.sort();
};
arr1 = [1, 3, 9, 5, 2];
arr2 = [3, 2, 5, 7, 8];
console.log(printer(arr1, arr2));
