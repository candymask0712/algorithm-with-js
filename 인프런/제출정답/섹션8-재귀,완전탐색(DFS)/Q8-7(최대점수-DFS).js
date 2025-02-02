// 모범 답안
function solution(m, ps, pt) {
  let answer = Number.MIN_SAFE_INTEGER;
  let n = ps.length;
  function DFS(L, sum, time) {
    if (time > m) return;
    if (L === n) {
      answer = Math.max(answer, sum);
    } else {
      DFS(L + 1, sum + ps[L], time + pt[L]);
      DFS(L + 1, sum, time);
    }
  }

  DFS(0, 0, 0);
  return answer;
}

let ps = [10, 25, 15, 6, 7];
// 문제의 개수가 30개 이상 많아지면 재귀 풀이는 어려움
let pt = [5, 12, 8, 3, 4];
console.log(solution(20, ps, pt));

// 4차 - 정답
function solution(score, time, limit) {
  const n = score.length;
  let maxScore = 0;
  function DFS(L, s, t) {
    if (t > limit) return;
    if (L === n) {
      if (s > maxScore) maxScore = s;
      return;
    } else {
      DFS(L + 1, s + score[L], t + time[L]);
      DFS(L + 1, s, t);
    }
  }
  DFS(0, 0, 0);
  return maxScore;
}

// 3차 풀이 - 성공
function solution(score, time, limit) {
  let n = score.length;
  let answer = 0;
  function DFS(L, s_sum, t_sum) {
    if (t_sum > limit) return;
    if (L === n) {
      answer = Math.max(answer, s_sum);
    } else {
      DFS(L + 1, s_sum + score[L], t_sum + time[L]);
      DFS(L + 1, s_sum, t_sum);
    }
  }
  DFS(0, 0, 0);
  return answer;
}

// 2차 풀이 - 풀이 성공 but 가지치기 이해못해 최적화 실패

function solution(score, time, limit) {
  let n = score.length;
  let max = 0;

  function DFS(L, s, t) {
    if (L > n + 1) {
      if (s > max && t <= limit) max = s;
    } else {
      DFS(L + 1, s + score[L], t + time[L]);
      DFS(L + 1, s, t);
    }
  }
  DFS(0, 0, 0);
  return max;
}

let arr1 = [10, 25, 15, 6, 7];
let arr2 = [5, 12, 8, 3, 4];
console.log(solution(arr1, arr2, 20));

// 1차 풀이
function solution(scores, time, limit) {
  let answer = 0;
  let flag = 0;
  function DFS(v, s, t) {
    if (flag) return;
    if (v === scores.length + 1) {
      if (s > answer && t <= limit) {
        answer = s;
      }

      // answer=Math.max(answer, sum);
      // 더 큰 값으로 구하기
    } else {
      DFS(v + 1, s + scores[v], t + time[v]);
      DFS(v + 1, s, t);
    }
  }
  DFS(0, 0, 0);
  return answer;
}
const scores = [10, 25, 15, 6, 7];
const time = [5, 12, 8, 3, 4];
const limit = 20;
console.log(solution(scores, time, limit));
