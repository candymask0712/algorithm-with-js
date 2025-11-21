// * 문제

// * 모범 답안
function solution(arr1, arr2) {
  let answer = [];
  let n = arr1.length;
  let m = arr2.length;
  let p1 = (p2 = 0);
  while (p1 < n && p2 < m) {
    if (arr1[p1] <= arr2[p2]) answer.push(arr1[p1++]);
    else answer.push(arr2[p2++]);
  }
  while (p1 < n) answer.push(arr1[p1++]);
  while (p2 < m) answer.push(arr2[p2++]);
  return answer;
}

// * 모범 답안 분석

function solution(arr1, arr2) {
  let answer = [];
  let n = arr1.length;
  let m = arr2.length;
  let p1 = (p2 = 0);

  // ! 먼저 배열1과 배열2를 비교해 하나씩 정답에 넣음
  // ! 이 때 한 배열이라도 남은 원소가 없으면 종료
  while (p1 < n && p2 < m) {
    if (arr1[p1] <= arr2[p2]) answer.push(arr1[p1++]);
    else answer.push(arr2[p2++]);
  }
  // ! 남은 배열의 요소는 순차적으로 넣어줌
  // ! ++ 연산을 통해 간결하게 작성!
  while (p1 < n) answer.push(arr1[p1++]);
  while (p2 < m) answer.push(arr2[p2++]);

  return answer;
}

// * 6차 - 실패
const solution = (arr1, arr2) => {
  let p1 = 0;
  let p2 = 0;
  let answer = [];

  // ! 둘다 유효한 범위여야 하므로 && 조건이 맞음
  while (p1 < arr1.length || p2 < arr.length) {
    const num1 = arr1[p1];
    const num2 = arr2[p2];
    if (num1 >= num2) {
      answer.push(num1);
      p1++;
    } else {
      answer.push(num2);
      p2++;
    }
  }
  while (p1 < arr1.length) answer.push(++p1);
  while (p2 < arr2.length) answer.push(++p2);

  return answer;
};

// * 5차 - 성공
const solution = (arr1, arr2) => {
  const newArr = arr1.concat(...arr2).sort();
  console.info(newArr);
};

// * 4차 답안 - 정답
function solution(arr1, arr2) {
  let answer = [];
  let p1 = 0;
  let p2 = 0;

  while (p1 < arr1.length && p2 < arr2.length) {
    if (arr1[p1] >= arr2[p2]) {
      answer.push(arr2[p2]);
      p2++;
    } else {
      answer.push(arr1[p1]);
      p1++;
    }
  }

  if (p1 < arr1.length) {
    // ! concat한 값을 다시 할당하지 않아 풀이 지연 됨
    // ! answer.concat(arr1.slice(p1)) <= 왼쪽처험 씀
    answer = answer.concat(arr1.slice(p1));
  } else {
    answer = answer.concat(arr2.slice(p2));
  }

  return answer;
}

// * 3차 답안 - 성공 (그러나 예시 외 대응 어려움)
const solution = (arr1, arr2) => {
  let answer = [];
  let p1 = 0;
  let p2 = 0;
  while (p1 < arr1.length && p2 < arr2.length) {
    if (arr1[p1] < arr2[p2]) {
      answer.push(arr1[p1]);
      p1++;
    } else {
      answer.push(arr2[p2]);
      p2++;
    }
  }
  // ! 입력에 따라 arr1이 남을수도 있어 모범답안처럼 처리 필요
  return answer.concat(arr2.slice(p2));
};

// * 2차 답안 - 성공

const solution = (arr1, arr2) => {
  let answer = [];
  let p1 = 0;
  let p2 = 0;
  let n = arr1.length + arr2.length;

  // ! 아래 코드로 진행 시 포인터가 이동하며 undefined와 비교하게 됨
  // ! 모범 답안 처럼 포인터가 배열의 길이만큼 이동하게 하는 것이 바람직
  for (let i = 0; i < n; i++) {
    if (arr1[p1] <= arr2[p2]) {
      answer.push(arr1[p1]);
      p1++;
    } else {
      answer.push(arr2[p2]);
      p2++;
    }
    console.log('p1', p1, 'p2', p2, 'arr1[p1]', arr1[p1], 'arr2[p2]', arr2[p2]);
  }
  return answer;
};

let arr1 = [1, 3, 5];
let arr2 = [2, 3, 6, 7, 9];

console.log(solution(arr1, arr2)); // [1, 2, 3, 3, 5, 6, 7, 9]

// * 1차 답안 - 실패
