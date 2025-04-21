function gridChallenge(grid) {
  const n = grid.length;
  // ! 처음에 정방형으로 생각하고 m을 따로 선언하지 않아 풀이 지연
  const m = grid[0].length;
  const sortedGrid = grid.map((row) => row.split('').sort().join(''));
  for (let i = 0; i < n; i++) {
    for (let j = 0; j < m - 1; j++) {
      const currentCharCode = sortedGrid[j][i];
      const nextCharCode = sortedGrid[j + 1][i];
      // ! 비교연산자에서 글자 그 자체도 아스키코드로 비교됨
      if (nextCharCode < currentCharCode) {
        return 'NO';
      }
    }
  }

  return 'YES';
}
