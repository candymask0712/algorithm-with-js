// * 문제

// * 모범 답안
function solution(m, arr) {
  let answer = 0,
    lt = 0,
    sum = 0;
  for (let rt = 0; rt < arr.length; rt++) {
    sum += arr[rt];
    if (sum === m) answer++;
    while (sum >= m) {
      sum -= arr[lt++];
      if (sum === m) answer++;
    }
  }
  return answer;
}

let a = [1, 2, 1, 3, 1, 1, 1, 2];
console.log(solution(6, a));

// * 4차 - 정답

const solution = (arr, k) => {
  const n = arr.length;
  let p1 = 0;
  let p2 = 1;
  let answer = 0;
  let sum = arr[0] + arr[1];

  while (p1 < n && p2 < n) {
    if (sum < k) {
      p2++;
      sum += arr[p2];
    } else if (sum > k) {
      sum -= arr[p1];
      p1++;
    } else {
      answer++;
      sum -= arr[p1];
      p1++;
      p2++;
      sum += arr[p2];
    }
  }
  return answer;
};

// * 3차 답안
const solution = (arr, num) => {
  let answer = 0;
  let lt = 0;
  let rt = 0;
  // let sum = 0
  let sum = arr[0];
  // ! 원래 식대로라면 0번째 요소를 더하지 않음
  // ! 0번째 반복은 이상 없는지 점검 필요
  while (rt < arr.length && lt < arr.length) {
    if (sum === num) {
      answer++;
      lt++;
      sum -= arr[lt];
    } else if (sum < num) {
      rt++;
      sum += arr[rt];
    } else {
      lt++;
      sum -= arr[lt];
    }
    console.log(
      'lt',
      lt,
      'rt',
      rt,
      'arr[lt]',
      arr[lt],
      'arr[rt]',
      arr[rt],
      'sum',
      sum,
      'answer',
      answer
    );
  }

  return answer;
};

// * 2차 답안 - 정답 (but 이중포문이라 비효율적)
const solution = (arr) => {
  let answer = 0;

  for (let i = 0; i < arr.length; i++) {
    let sum = arr[i];
    for (let j = i + 1; j < arr.length; j++) {
      sum += arr[j];
      console.log('i', i, 'j', j, 'arr', arr, 'sum', sum, 'answer', answer);
      if (sum === 6) {
        answer++;
        // break
      } else if (sum > 6) break;
    }
  }
  return answer;
};

// * 1차 답안
let final = function (t, m) {
  sum = 0;
  m = 0;
  count = 0;
  while (p1 < 6) {
    if (sum < 6) {
      sum += t[p1++];
    } else if (sum >= 6) count++;
    console.log(p1, sum);
  }
  return count;
};
