// * 문제 링크

// * 3차 풀이
//? 시간복잡도: O()
//? 공간복잡도: O()

// * 2차 풀이
//? 시간복잡도: O()
//? 공간복잡도: O()

// * 1차 풀이
//? 시간복잡도: O(n*m) (n = picture.length, m = picture[0].length)
//? 공간복잡도: O(n+m)
var findLonelyPixel = function (picture) {
  const n = picture.length;
  const m = picture[0].length;

  const row = Array(n).fill(0);
  const col = Array(m).fill(0);

  let answer = 0;

  for (let i = 0; i < n; i++) {
    for (let j = 0; j < m; j++) {
      if (picture[i][j] === 'B') {
        row[i]++;
        col[j]++;
      }
    }
  }

  for (let i = 0; i < n; i++) {
    // ! 애초에 row가 1이 아닌 경우 skip 하면 효율적
    // ! if (row[i] !== 1) continue;

    for (let j = 0; j < m; j++) {
      if (picture[i][j] === 'B' && row[i] === 1 && col[j] === 1) {
        answer++;
      }
    }
  }

  return answer;
};

// * 참고 풀이
//? 시간복잡도: O()
//? 공간복잡도: O()
