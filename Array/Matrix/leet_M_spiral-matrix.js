/**
 * @param {number[][]} matrix
 * @return {number[]}
 */
var spiralOrder = function (matrix) {
  let direction = 'R';

  const n = matrix.length;
  const m = matrix[0].length;
  const total = n * m;

  let i = 0;
  let j = 0;

  const isValid = (x, y) =>
    x >= 0 && x >= 0 && x < n && y < m && typeof matrix[x][y] === 'number';
  const answer = [];

  let step = 0;

  while (step < total) {
    step++;
    answer.push(matrix[i][j]);
    matrix[i][j] = null;
    let [nextX, nextY] = getNext(i, j, direction);
    if (!isValid(nextX, nextY)) {
      direction = getNextDirection(direction);
      const [newX, newY] = getNext(i, j, direction);
      nextX = newX;
      nextY = newY;
    }
    i = nextX;
    j = nextY;
  }

  return answer;
};

const getNext = (x, y, direction) => {
  if (direction === 'R') y++;
  else if (direction === 'D') x++;
  else if (direction === 'L') y--;
  else if (direction === 'U') x--;
  else throw Error('else 도달');
  return [x, y];
};

const getNextDirection = (direction) => {
  const directionIndex = directions.indexOf(direction);
  const nextIndex = (directionIndex + 1) % 4;
  return directions[nextIndex];
};
