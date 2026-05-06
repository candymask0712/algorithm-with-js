/**
 * 차이점은 단 두 가지:
 *   - 순서 구분(순열) vs 무관(조합) → 시작 인덱스 사용 여부
 *   - 중복 허용 여부 → visited 또는 다음 재귀 인덱스(i / i+1)
 */

// 1. 순열 nPk: 순서 O, 중복 X  → visited로 사용된 원소 차단
function permutations(arr, k) {
  const n = arr.length;
  const path = [];
  const visited = Array(n).fill(false);
  const result = [];

  function dfs() {
    if (path.length === k) {
      result.push([...path]);
      return;
    }
    for (let i = 0; i < n; i++) {
      if (visited[i]) continue;
      visited[i] = true;
      path.push(arr[i]);
      dfs();
      path.pop();
      visited[i] = false; // 백트래킹 시 반드시 복원
    }
  }

  dfs();
  return result;
}

// 2. 중복순열 nΠk (n^k): 순서 O, 중복 O  → visited 자체가 없음
function permutationsWithRep(arr, k) {
  const n = arr.length;
  const path = [];
  const result = [];

  function dfs() {
    if (path.length === k) {
      result.push([...path]);
      return;
    }
    for (let i = 0; i < n; i++) {
      path.push(arr[i]);
      dfs();
      path.pop();
    }
  }

  dfs();
  return result;
}

// 3. 조합 nCk: 순서 X, 중복 X  → start 인덱스 + 다음 깊이는 i+1
function combinations(arr, k) {
  const n = arr.length;
  const path = [];
  const result = [];

  function dfs(start) {
    if (path.length === k) {
      result.push([...path]);
      return;
    }
    for (let i = start; i < n; i++) {
      path.push(arr[i]);
      dfs(i + 1); // 자기 다음부터 → 중복 X
      path.pop();
    }
  }

  dfs(0);
  return result;
}

// 4. 중복조합 nHk: 순서 X, 중복 O  → start 인덱스 + 다음 깊이는 i (자기 포함)
function combinationsWithRep(arr, k) {
  const n = arr.length;
  const path = [];
  const result = [];

  function dfs(start) {
    if (path.length === k) {
      result.push([...path]);
      return;
    }
    for (let i = start; i < n; i++) {
      path.push(arr[i]);
      dfs(i); // 자기 자신부터 → 중복 O
      path.pop();
    }
  }

  dfs(0);
  return result;
}
