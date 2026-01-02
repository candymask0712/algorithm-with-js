// * 문제 링크

// * 3차 풀이
//? 시간복잡도: O()
//? 공간복잡도: O()

// * 2차 풀이
//? 시간복잡도: O()
//? 공간복잡도: O()

// * 1차 풀이
//? 시간복잡도: O(n) (n = nums.length)
//? 공간복잡도: O(n)
var largestUniqueNumber = function (nums) {
  const freq = new Map();

  for (const num of nums) {
    freq.set(num, (freq.get(num) || 0) + 1);
  }

  let answer = -1;

  for (const [num, count] of freq) {
    if (count === 1) {
      answer = Math.max(answer, num);
    }
  }

  return answer;
};

// * 참고 풀이
//? 시간복잡도: O()
//? 공간복잡도: O()
