// * 모범 답안
function solution(n, f) {
  let answer,
    flag = 0;
  let dy = Array.from(Array(11), () => Array(11).fill(0));
  let ch = Array.from({ length: n + 1 }, () => 0);
  let p = Array.from({ length: n }, () => 0);
  let b = Array.from({ length: n }, () => 0);
  function combi(n, r) {
    if (dy[n][r] > 0) return dy[n][r];
    if (n === r || r === 0) return 1;
    else return (dy[n][r] = combi(n - 1, r - 1) + combi(n - 1, r));
  }
  function DFS(L, sum) {
    if (flag) return;
    if (L === n && sum === f) {
      answer = p.slice();
      flag = 1;
    } else {
      for (let i = 1; i <= n; i++) {
        if (ch[i] === 0) {
          ch[i] = 1;
          p[L] = i;
          DFS(L + 1, sum + b[L] * p[L]);
          ch[i] = 0;
        }
      }
    }
  }
  for (let i = 0; i < n; i++) {
    b[i] = combi(n - 1, i);
  }
  DFS(0, 0);
  return answer;
}

// * 3차 풀이

// * 2차 풀이 - 제시된 사례에 대해서만 성공
function solution(n, limit) {
  let answer = [];
  let ch = Array.from({ length: n + 1 }, () => 0);
  function DFS(L, s, t) {
    if (s > limit) return;
    if (L === 4) {
      let arr = t.split('');
      let sum =
        // ! 이부분을 답안처럼 동적으로 순열 조합 공식을 통해 동적으로 변하도록 해야 함
        Number(arr[0]) + 3 * (Number(arr[1]) + Number(arr[2])) + Number(arr[3]);
      if (sum === limit) answer.push(Number(t));
    } else {
      for (let i = 1; i <= n; i++) {
        if (ch[i] === 0) {
          ch[i] = 1;
          DFS(L + 1, s + i, t + i);
          ch[i] = 0;
        }
      }
    }
  }
  DFS(0, 0, '');
  return answer.sort()[0];
}
console.info(solution(4, 16)); // 3 1 2 4

// * 1차 풀이 - 실패
function solution(n, sum) {
  let answer = [];
  let list = [1, 3, 3, 1];
  let tmp = Array.from({ length: n }, () => 0);

  function DFS(L) {
    if (L === 4) {
      let result = 0;
      for (let i = 0; i < n; i++) {
        result += tmp[i] * list[i];
      }
      console.log(result, tmp);
      if (result === sum) answer.push(tmp);
    } else {
      for (let i = 0; i <= 9; i++) {
        tmp[L] = i;
        DFS(L + 1);
        tmp[L] = 0;
      }
    }
  }
  DFS(0);
  answer = answer.map((el) => el.reduce((a, b) => a + b));
  return answer;
}

console.log(solution(4, 16));
