// 4차 - 정답 (23.01.31)

const solution = (n) => {
  return (n * (n + 1)) / 2;
};

//* 3차 답안 - 정답

const solution = (n) => {
  let answer = 0;
  for (let i = 1; i <= n; i++) {
    answer += i;
  }
  return answer;
};

// 2차 답안 - 1차 답안의 단점 수정, 모범답안과 결과 같음
function solution(n) {
  let sum;
  for (let i = 1; i <= n; i++) {
    sum += i;
  }
  return sum;
}

// 1차 답안 - 합계를 전역변수로 처리, i = 0 부터 시작해서 직관적이지 않고, 자원 낭비
var sum = 0;
//   var sum이 function안으로 들어가는 것이 깔끔함
function solution(n) {
  for (var i = 0; i < n + 1; i++) {
    sum = sum + i;
  }
  return sum;
}
console.log(solution(10));
