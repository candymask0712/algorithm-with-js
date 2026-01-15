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
/**
 * @param {number[]} nums
 * @return {number[][]}
 */
var permuteUnique = function (nums) {
  const n = nums.length;
  const answer = new Set();
  const path = [];
  const ch = Array(n).fill(false);

  function dfs() {
    if (path.length === n) {
      answer.add(path.join(','));
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
  return Array.from(answer).map((el) => el.split(',').map(Number));
};

// * 참고 풀이
//? 시간복잡도: O()
//? 공간복잡도: O()
/**
 * @param {number[]} nums
 * @return {number[][]}
 */
var permuteUnique = function (nums) {
  nums.sort((a, b) => a - b);

  const n = nums.length;
  const used = new Array(n).fill(false);
  const path = [];
  const res = [];

  function dfs() {
    if (path.length === n) {
      res.push(path.slice());
      return;
    }

    for (let i = 0; i < n; i++) {
      if (used[i]) continue;

      // 같은 depth에서 중복 선택 방지:
      // 이전 값과 같고, 이전 값을 아직 사용하지 않았다면(= 이번 depth에서 이전 값을 먼저 안 썼다면)
      // 현재 i를 고르면 같은 모양의 순열이 중복으로 생성됨

      // ! “같은 숫자가 바로 앞에 있는데, 그 앞 숫자를 아직 이번 순열에서 안 썼다면, 지금 이 숫자를 쓰지 마라.”
      if (i > 0 && nums[i] === nums[i - 1] && !used[i - 1]) continue;

      used[i] = true;
      path.push(nums[i]);
      dfs();
      path.pop();
      used[i] = false;
    }
  }

  dfs();
  return res;
};
