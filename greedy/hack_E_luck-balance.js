function luckBalance(k, contests) {
  const importantCount = contests.reduce(
    (acc, cur) => (cur[1] === 1 ? acc + 1 : acc),
    0
  );
  // ! 처음에 중요한 문제를 풀지 않아도 되는 횟수를 잘못 계산
  const allowed = importantCount - k;
  let total = contests.reduce((acc, cur) => acc + cur[0], 0);
  contests.sort((a, b) => {
    if (a[1] === b[1]) return a[0] - b[0];
    else return b[1] - a[1];
  });

  for (let i = 0; i < allowed; i++) {
    // ! 처음에 문제를 이해하지 못해 *2를 하지 않음
    total -= contests[i][0] * 2;
  }

  return total;
}
