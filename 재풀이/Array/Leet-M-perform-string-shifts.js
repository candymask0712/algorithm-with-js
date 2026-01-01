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
//? 시간복잡도: O(m + n) (m = shift.length, n = s.length)
//? 공간복잡도: O(1)
var stringShift = function (s, shift) {
  const n = s.length;
  let total = 0;

  for (const [direction, steps] of shift) {
    if (direction === 0) total -= steps;
    if (direction === 1) total += steps;
  }

  total = ((total % n) + n) % n;

  if (total === 0) return s;

  return s.slice(n - total) + s.slice(0, n - total);
};
