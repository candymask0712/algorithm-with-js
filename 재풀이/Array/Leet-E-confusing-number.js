// * 문제 링크
// https://leetcode.com/problems/confusing-number

// * 3차 풀이
//? 시간복잡도: O()
//? 공간복잡도: O()

// * 2차 풀이
//? 시간복잡도: O()
//? 공간복잡도: O()

// * 1차 풀이
//? 시간복잡도: O(n)
//? 공간복잡도: O(n)

var confusingNumber = function (n) {
  const str = String(n);
  const filtered = str.replace(/[23457]/g, '');

  if (str !== filtered) {
    return false;
  }

  // ! 처음에는 중간 변환 없이 해서 오답
  const replaced = filtered
    .replace(/6/g, '#')
    .replace(/9/g, '6')
    .replace(/#/g, '9');
  // ! split(' ') 으로 계산해서 해맴
  const reversed = replaced.split('').reverse().join('');

  return Number(filtered) !== Number(reversed);
};

// * 참고 풀이
//? 시간복잡도: O()
//? 공간복잡도: O()
