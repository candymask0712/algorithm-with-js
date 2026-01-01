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
//? 시간복잡도: O()
//? 공간복잡도: O()
var reverseWords = function (s) {
  s.reverse();

  const n = s.length;
  let last = 0;
  for (let i = 0; i <= n; i++) {
    const cur = s[i];
    if (cur === ' ' || i === n) {
      reverse(s, last, i - 1);
      last = i + 1;
    }
  }
};

function reverse(arr, lp, rp) {
  while (lp < rp) {
    [arr[lp], arr[rp]] = [arr[rp], arr[lp]];
    lp++;
    rp--;
  }
}
