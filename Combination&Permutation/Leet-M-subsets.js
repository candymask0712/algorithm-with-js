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
var subsets = function (nums) {
  const answer = [];
  for (let i = 0; i <= nums.length; i++) {
    answer.push(...getCombination(nums, i));
  }
  return answer;
};

function getCombination(arr, target) {
  const total = [];
  const path = [];

  function dfs(start) {
    if (path.length === target) {
      total.push(path.slice());
      return;
    }

    for (let i = start; i < arr.length; i++) {
      path.push(arr[i]);
      dfs(i + 1);
      path.pop();
    }
  }

  dfs(0);
  return total;
}

// * 참고 풀이
//? 시간복잡도: O(∑ nCi)
//? 공간복잡도: O(n · 2^n)

var subsets = function (nums) {
  const answer = [];
  for (let i = 0; i <= nums.length; i++) {
    answer.push(...getCombination(nums, i));
  }
  return answer;
};

function getCombination(arr, target) {
  const total = [];
  const path = [];

  function dfs(start) {
    if (path.length === target) {
      total.push(path.slice());
      return;
    }

    const need = target - path.length;
    const max = arr.length - need + 1;

    for (let i = start; i < max; i++) {
      path.push(arr[i]);
      dfs(i + 1);
      path.pop();
    }
  }

  dfs(0);
  return total;
}
