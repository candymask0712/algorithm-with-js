// * 모범 답안
function solution(c, arr) {
  let answer = Number.MIN_SAFE_INTEGER;
  let n = arr.length;
  function DFS(L, sum) {
    if (sum > c) return;
    // return 이후에 더 근접한 값이 나올 가능성?
    // 허용값을 초과하면 리턴하는데 리턴하기 않고
    // 그대로 두면 계속 무게를 더하니 더 큰값으로 증가하겠죠.
    // return 시 전체탐색이 중단되는것이 아닌 해당 가지가 더 깊은 depth로 가는 것을 막음
    // 이 문제는 depth가 유동적일 수 있어서 가지치기가 필요
    if (L === n) {
      answer = Math.max(answer, sum);
    } else {
      DFS(L + 1, sum + arr[L]);
      DFS(L + 1, sum);
    }
  }
  DFS(0, 0);
  return answer;
}

let arr = [81, 58, 42, 33, 61];
console.log(solution(259, arr));

// * 3차 - 정답
function solution(limit, arr) {
  const n = arr.length;
  let maxWeight = 0;
  function DFS(L, s) {
    if (s > limit) return;
    if (L === n) {
      console.info('L', L, 's', s);
      if (s > maxWeight && s <= limit) maxWeight = s;
    } else {
      DFS(L + 1, s + arr[L]);
      DFS(L + 1, s);
    }
  }
  DFS(0, 0);
  return maxWeight;
}

// * 2차 풀이 - 성공(but 최적화 실패)
function solution(limit, arr) {
  let n = arr.length;
  let answer = 0;
  function DFS(L, sum) {
    // ! 모든 레벨 탐색이 아닌 무게가 기준이 됨
    // ! 무게가 초과한 경우 해당가지 탐색 중지를 위한 조건 설정 필요
    if (L === n) {
      if (sum <= limit) answer = Math.max(answer, sum);
    } else {
      DFS(L + 1, sum + arr[L]);
      DFS(L + 1, sum);
    }
  }
  DFS(0, 0);
  return answer;
}

// * 1차 풀이 - 성공(but 최적화 실패(모두탐색))
function solution(max, arr) {
  let answer = [];
  let n = arr.length;
  function DFS(L, sum) {
    if (L === n) {
      if (sum <= max) answer.push(sum);
    } else {
      DFS(L + 1, sum + arr[L]);
      DFS(L + 1, sum);
    }
  }
  DFS(0, 0);
  return Math.max.apply(null, answer);
}

const arr = [81, 58, 42, 33, 61];
console.log(solution(259, arr));
