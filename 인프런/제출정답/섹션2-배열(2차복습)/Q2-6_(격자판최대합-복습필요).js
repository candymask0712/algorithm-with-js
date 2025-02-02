// 모범 답안
function solution(arr) {
  let answer = Number.MIN_SAFE_INTEGER;
  let n = arr.length;
  let sum1 = (sum2 = 0);
  for (let i = 0; i < n; i++) {
    sum1 = sum2 = 0;
    for (let j = 0; j < n; j++) {
      sum1 += arr[i][j];
      sum2 += arr[j][i];
    }
    answer = Math.max(answer, sum1, sum2);
  }
  sum1 = sum2 = 0;
  for (let i = 0; i < n; i++) {
    sum1 += arr[i][i];
    sum2 += arr[i][n - i - 1];
  }
  answer = Math.max(answer, sum1, sum2);
  return answer;
}

let arr = [
  [10, 13, 10, 12, 15],
  [12, 39, 30, 23, 11],
  [11, 25, 50, 53, 15],
  [19, 27, 29, 37, 27],
  [19, 13, 30, 13, 19]
];
console.log(solution(arr));

// 4차 - 정답
// ! 모범 답안 대비 최적화 부족
function solution(arr) {
  const n = arr.length;
  let leftDiagonalSum = 0;
  let rightDiagonalSum = 0;
  const horizontalSums = [];
  const verticalSums = [];
  for (let i = 0; i < n; i++) {
    let hSum = 0;
    let vSum = 0;
    for (let j = 0; j < n; j++) {
      hSum += arr[i][j];
      vSum += arr[j][i];
    }
    horizontalSums.push(hSum);
    verticalSums.push(vSum);
    leftDiagonalSum += arr[i][i];
    rightDiagonalSum += arr[n - i - 1][i];
  }
  return Math.max(
    leftDiagonalSum,
    rightDiagonalSum,
    ...horizontalSums,
    ...verticalSums
  );
}

// 3차 답안 - 일부 실수
function solution(arr) {
  let answer = [];
  let xSum1 = 0;
  let xSum2 = 0;
  let n = arr.length;
  let m = arr[0].length;

  for (let i = 0; i < n; i++) {
    let rSum = arr[i].reduce((a, b) => a + b, 0);
    let cSum = 0;
    for (let j = 0; j < m; j++) {
      // ! 테케가 적어 이부분 i,j 자리바꿈
      cSum += arr[j][i];
    }
    xSum1 += arr[i][i];
    xSum2 += arr[n - 1 - i][i];
    answer.push(Math.max(xSum1, xSum2, rSum, cSum));
  }

  return answer.sort((a, b) => b - a)[0];
}

// 2차 답안 - 최초 풀이 없음
let MaxSumOfArray = function (t) {
  // t.length 가 반복적으로 사용되므로 n으로 간단하게 선언
  let totalSum = [];
  let sum1 = 0;
  let sum2 = 0;
  let sum3 = 0;
  let sum4 = 0;
  //  let sum1=sum2=0; 값이 같은 경우 한 줄에 간단하게 선언
  for (let i = 0; i < t.length; i++) {
    sum1 += t[i][i];
    sum2 += t[i][4 - i];
    // 모범답안은 n-i-1 로 세련되게 표현
    for (let j = 0; j < t.length; j++) {
      sum3 += t[i][j];
      sum4 += t[j][i];
    }
    totalSum.push(sum3);
    totalSum.push(sum4);
    sum3 = 0;
    sum4 = 0;
  }
  totalSum.push(sum1);
  totalSum.push(sum2);
  return Math.max.apply(null, totalSum);
  // 모범 답안은 answer을 가장 작은 수로 하고 계속해서 비교함
};
let arr = [
  [10, 13, 10, 12, 15],
  [12, 39, 30, 23, 11],
  [11, 25, 50, 53, 15],
  [19, 27, 29, 37, 27],
  [19, 13, 30, 13, 19]
];

// [60, 115, 154, 139, 94]
// [71, 117, 149, 138, 87]
// [155, 134]

console.log(MaxSumOfArray(arr));
