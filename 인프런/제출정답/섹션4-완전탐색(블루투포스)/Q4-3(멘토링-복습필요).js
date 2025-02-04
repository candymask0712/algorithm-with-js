// 모범 답안
function solution(test) {
  let answer = 0;
  m = test.length;
  n = test[0].length;
  for (let i = 1; i <= n; i++) {
    for (let j = 1; j <= n; j++) {
      let cnt = 0;
      for (let k = 0; k < m; k++) {
        let pi = (pj = 0);
        for (let s = 0; s < n; s++) {
          if (test[k][s] === i) pi = s;
          if (test[k][s] === j) pj = s;
        }
        if (pi < pj) cnt++;
      }
      if (cnt === m) answer++;
    }
  }
  return answer;
}

// 1차 - 성공
function solution(arr) {
  let answer = 0;
  const n = arr.length;
  for (let i = 1; i <= n + 1; i++) {
    for (let j = 1; j <= n + 1; j++) {
      let cnt = 0;
      for (const result of arr) {
        if (result.indexOf(i) < result.indexOf(j)) cnt++;
      }
      if (cnt === 3) answer++;
    }
  }
  return answer;
}
