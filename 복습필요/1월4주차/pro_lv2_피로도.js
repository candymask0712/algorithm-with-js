// * 참고 풀이

function solution(k, d) {
  const N = d.length;
  const visited = new Array(N).fill(0);
  let ans = 0;

  function dfs(k, cnt) {
    ans = Math.max(cnt, ans);

    for (let j = 0; j < N; j++) {
      if (k >= d[j][0] && !visited[j]) {
        visited[j] = 1;
        dfs(k - d[j][1], cnt + 1);
        visited[j] = 0;
      }
    }
  }

  dfs(k, 0);
  return ans;
}

// * 1차 풀이
function solution(k, dungeons) {
  var answer = -1;

  const n = dungeons.length;
  const ch = Array(n).fill(0);

  function DFS(f, count) {
    // ! answer를 갱신하는 부분에 대한 리팩토링 필요
    for (let i = 0; i < n; i++) {
      if (ch[i] === 1) {
        answer = Math.max(answer, count);
        continue;
      }
      const [min, need] = dungeons[i];
      if (f < min) {
        answer = Math.max(answer, count);
      } else {
        ch[i] = 1;
        DFS(f - need, count + 1);
        ch[i] = 0;
      }
    }
  }

  DFS(k, 0);

  return answer;
}
