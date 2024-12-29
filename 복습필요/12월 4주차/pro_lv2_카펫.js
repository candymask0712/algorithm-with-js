// 첫번째 풀이
function solution(brown, yellow) {
  // ! i값의 제한점을 임의로 1000으로 설정
  for (let i = 3; i < 3000; i++) {
    for (let j = 3; j <= i; j++) {
      if ((i - 2) * (j - 2) === yellow && i * j - yellow === brown)
        return [i, j];
    }
  }
}

function solution(brown, yellow) {
  const total = brown + yellow;
  // ! i값의 제한을 동적으로 설정
  for (let i = 3; i <= total / i; i++) {
    // ! j에 대한 탐색을 최소화
    const j = total / i;
    // ! 로직상 i가 더 작은 값이 되서 아래와 같이 리턴
    if ((i - 2) * (j - 2) === yellow) return [j, i];
  }
}
