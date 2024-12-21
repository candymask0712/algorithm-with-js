// https://school.programmers.co.kr/learn/courses/30/lessons/87390

// 나의 풀이
function solution(n, left, right) {
  var answer = [];

  // 배열의 행과 열을 기준으로 요소의 값을 계산해서 1차원 배열로 생성
  for (let i = 1; i <= n; i++) {
    for (let j = 1; j <= n; j++) {
      const num = j <= i ? i : j;
      answer.push(num);
    }
  }

  // 그 중에 왼쪽, 오른쪽 포인터에 해당하는 길이로 잘라냄
  // n이 10의 7승이기 때문에 최적화 필요
  return answer.slice(left, right + 1);
}

// 추가 풀이
function solution(n, left, right) {
  var answer = [];

  for (let i = left; i <= right; i++) {
    const a = Math.floor(i / n) + 1; // 행의 인덱스
    const b = (i % n) + 1; // 열의 인덱스
    answer.push(Math.max(a, b)); // 그중에 큰 값으로 계산
  }

  return answer;
}
