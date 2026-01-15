// * 문제 링크

// * 3차 풀이
//? 시간복잡도: O()
//? 공간복잡도: O()

// * 2차 풀이
//? 시간복잡도: O()
//? 공간복잡도: O()

// * 1차 풀이
//? 시간복잡도: O()
//? 공간복잡도: O()

// * 참고 풀이
//? 시간복잡도: O(n! * n)
//? 공간복잡도: O(n)
var permute = function (nums) {
  const n = nums.length;
  const answer = [];
  const path = [];
  const ch = Array(n).fill(false);

  function dfs() {
    if (path.length === n) {
      answer.push(path.slice());
      return;
    }
    for (let i = 0; i < n; i++) {
      if (ch[i]) continue;

      ch[i] = true;
      path.push(nums[i]);
      dfs();
      path.pop();
      ch[i] = false;
    }
  }

  dfs();
  return answer;
};
