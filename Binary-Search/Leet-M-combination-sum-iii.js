// * 문제
// *

//
//

// * 모범 답안
var combinationSum3 = function (k, n) {
  const res = [];
  const path = [];

  function minSumFrom(start, r) {
    // start부터 r개의 연속된 수 합: r * (2*start + (r-1)) / 2
    return (r * (2 * start + (r - 1))) / 2;
  }
  function maxSumUpTo9(r) {
    // 9에서 r개 내림차순 합: r * (19 - r) / 2
    return (r * (19 - r)) / 2;
  }

  function dfs(start, remainCount, remainSum) {
    if (remainCount === 0) {
      if (remainSum === 0) res.push(path.slice());
      return;
    }
    if (remainSum < 0) return;

    // 강한 가지치기: 남은 합이 이 범위를 벗어나면 중단
    const minPossible = minSumFrom(start, remainCount);
    const maxPossible = maxSumUpTo9(remainCount);
    if (remainSum < minPossible || remainSum > maxPossible) return;

    for (let i = start; i <= 9; i++) {
      if (i > remainSum) break;
      path.push(i);
      dfs(i + 1, remainCount - 1, remainSum - i);
      path.pop();
    }
  }

  dfs(1, k, n);
  return res;
};
// * 3차 풀이

// * 2차 풀이

// * 1차 풀이 - (25.09.08) - 정답 (시간복잡도 높음)
var combinationSum3 = function (k, n) {
  const ch = Array(9).fill(0);
  const answer = [];
  function dfs(nums, count, total) {
    if (count < 0 || total < 0) return;

    if (total === 0 && count === 0) {
      answer.push(nums.split('-').map(Number));
      return;
    }

    for (let i = 1; i <= 9; i++) {
      if (total >= i && !ch[i] && count > 0) {
        ch[i] = 1;
        dfs(nums ? nums + '-' + i : nums + i, count - 1, total - i);
        ch[i] = 0;
      }
    }
  }

  dfs('', k, n);

  const unique = new Set();
  const filtered = answer.filter((nums) => {
    const el = nums
      .sort((a, b) => a - b)
      .map(String)
      .join('');

    if (unique.has(el)) return false;
    else {
      unique.add(el);
      return true;
    }
  });

  return filtered;
};
