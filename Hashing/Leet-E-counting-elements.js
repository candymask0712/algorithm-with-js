// * 문제 링크

// * 3차 풀이
//? 시간복잡도: O()
//? 공간복잡도: O()

// * 2차 풀이
//? 시간복잡도: O()
//? 공간복잡도: O()

// * 1차 풀이
//? 시간복잡도: O(n) (n = arr.length)
//? 공간복잡도: O(n)
var countElements = function (arr) {
  const h = new Map();
  let answer = 0;

  for (const num of arr) {
    h.set(num, (h.get(num) || 0) + 1);
  }

  for (const [num, count] of h) {
    if (h.has(num + 1)) {
      answer += count || 0;
    }
  }

  return answer;
};

// * 참고 풀이
//? 시간복잡도: O(n) (n = arr.length)
//? 공간복잡도: O(n)
var countElements = function (arr) {
  const set = new Set(arr);
  let count = 0;

  for (const x of arr) {
    if (set.has(x + 1)) {
      count++;
    }
  }

  return count;
};
