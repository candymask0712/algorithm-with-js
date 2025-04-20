// * 문제

// * 모범 답안
function solution(m, arr) {
  let answer = 0,
    sum = 0,
    lt = 0;
  for (let rt = 0; rt < arr.length; rt++) {
    sum += arr[rt];
    while (sum > m) {
      sum -= arr[lt++];
    }
    answer += rt - lt + 1;
  }
  return answer;
}

let a = [1, 3, 1, 2, 3];
console.log(solution(5, a));

// * 모범 답안 분석
// ! lt 부터 rt 까지의 부분수열을 구하는 코드
function solution(m, arr) {
  let answer = 0,
    sum = 0,
    lt = 0;

  // ! 루프가 rt=0 부터 시작해서 돈다
  for (let rt = 0; rt < arr.length; rt++) {
    // ! 먼저 rt번째 원소를 더한다
    sum += arr[rt];
    // ! 만약 합계가 기준보다 크다면
    // ! 계속해서 lt 포인터를 이동하고 lt만큼 빼준다
    while (sum > m) {
      sum -= arr[lt++];
    }
    // ! rt +1 의 숫자만큼 연속부분수열 만들수 있다
    // ! 그러나 lt 만큼 이동했다면 빼주어야 함
    answer += rt - lt + 1;
  }
  return answer;
}

let a = [1, 3, 1, 2, 3];
console.log(solution(5, a));
// * 3차 답안

// * 2차 답안 - 성공 but 답안과 풀이 다름
const solution = (num, arr) => {
  let lt = 0;
  let rt = 0;
  let answer = 0;
  let n = arr.length;
  let sum = arr[0];
  while (lt < n - 1) {
    if (sum <= num) answer++;
    if (sum < num) {
      rt++;
      sum += arr[rt];
    } else {
      lt++;
      rt = lt;
      sum = arr[0];
    }
  }
  return answer;
};
let arr = [1, 3, 1, 2, 3];
console.log(solution(5, arr));

// * 1차 답안
function solution(k, t) {
  let max,
    subSum = 0;
  //let subSum, max=0; 으로 하면 subSum에 값이 할당되지 않아 진행 불가
  for (let i = 0; i < k; i++) subSum += t[i];
  max = subSum;
  for (let i = k; i < t.length; i++) {
    subSum += t[i] - t[i - 3];
    // '3' 부분을 k로 표현해야 더 범용적인 함수
    if (subSum > max) max = subSum;
    // answer=Math.max(answer, sum); 하면 더 간단
  }
  return max;
}
let a = [12, 15, 11, 20, 25, 10, 20, 19, 13, 15];
console.log(solution(3, a));
