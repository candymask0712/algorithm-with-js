// * 문제

// * 모범 답안
function solution(k, arr) {
  let answer,
    sum = 0;
  for (let i = 0; i < k; i++) sum += arr[i];
  answer = sum;
  for (let i = k; i < arr.length; i++) {
    sum += arr[i] - arr[i - k];
    answer = Math.max(answer, sum);
  }
  return answer;
}

// * 모범 답안 분석
function solution(k, arr) {
  let answer,
    sum = 0;
  for (let i = 0; i < k; i++) sum += arr[i];
  answer = sum;
  for (let i = k; i < arr.length; i++) {
    sum += arr[i] - arr[i - k];
    answer = Math.max(answer, sum);
  }
  return answer;
}

// 4차 - 정답
const solution = (num, arr) => {
  let maxSum = 0;
  let sum = 0;
  const n = arr.length;
  for (let i = 0; i < num; i++) {
    maxSum += arr[i];
  }

  sum = maxSum;

  for (let i = 0; i < n - num; i++) {
    sum += arr[num + i - 1] - arr[i];
    if (sum > maxSum) maxSum = sum;
  }

  return maxSum;
};

// * 3차 답안 - 풀이 성공 (영상에 힌트 얻어 스스로 구현)

const solution = (num, arr) => {
  let answer = 0;
  for (let i = 0; i < num; i++) answer += arr[i];
  let tmp = answer;
  console.log(answer);

  for (let i = 0; i < arr.length - num; i++) {
    // ! 모범 답안에서는 매 시행마다 빼주고 더해주는 걸 한 줄로 계산
    tmp -= arr[i];
    // ! for 루프의 두 번째 조건과 아래 조건을 i+num-1 주었을 때도 정답
    // ! num=3인 경우에만 예외적으로 정답 => 항상 엣지케이스를 확인할 것
    tmp += arr[i + num];
    answer = Math.max(tmp, answer);
    console.log('i', i, 'tmp', tmp, 'answer', answer);
  }
  return answer;
};
let arr = [12, 15, 11, 20, 25, 10, 20, 19, 13, 15];
console.log(solution(3, arr));

// * 2차 답안 - 풀이 성공 (but num=3 일 때 한정된 답안)

const solution = (num, arr) => {
  let answer = 0;
  for (let i = 0; i < arr.length - 2; i++) {
    let tmp = arr[i] + arr[i + 1] + arr[i + 2];
    answer = Math.max(answer, tmp);
  }
  return answer;
};
let arr = [12, 15, 11, 20, 25, 10, 20, 19, 13, 15];
console.log(solution(3, arr));

// * 1차 답안 - 풀이 없음
