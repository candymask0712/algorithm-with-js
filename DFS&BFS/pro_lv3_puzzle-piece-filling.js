function solution(game_board, table) {
  var answer = 0;
  const n = game_board.length;
  const m = game_board[0].length;
  function DFS(x, y, puzzle, start) {
    for (let i = 0; i < 4; i++) {
      let dx = [0, 0, 1, -1];
      let dy = [-1, 1, 0, 0];
      const nx = x + dx[i];
      const ny = y + dy[i];
      const isValid = (x, y) => x >= 0 && x < n && y >= 0 && y < m;
      if (isValid(nx, ny) && game_board[nx][ny] === 0) {
        game_board[nx][ny] = 1;
        const [startX, startY] = start;
        // console.info(nx, ny, startX, startY);
        // console.table(JSON.parse(JSON.stringify(puzzle)));
        // console.info(nx - startX + 1);
        // console.info(ny - startY + 6);
        puzzle[nx - startX + 1][ny - startY + 6] = 1;
        DFS(nx, ny, puzzle, start);
      }
    }
  }

  let boardList = [];
  let puzzleList = [];

  for (let i = 0; i < n; i++) {
    for (let j = 0; j < n; j++) {
      if (game_board[i][j] === 1) {
        const puzzleTemplate = Array.from({ length: 12 }, () =>
          Array(12).fill(0)
        );
        DFS(i, j, puzzleTemplate, [i, j]);
        boardList.push(puzzleTemplate);
      }
    }
  }
  boardList = boardList.map((puzzle) => {
    const trimmedPuzzle = trimPuzzle(puzzle);
    // console.table(trimmedPuzzle);
    return trimmedPuzzle;
  });

  function DFS2(x, y, puzzle, start) {
    for (let i = 0; i < 4; i++) {
      let dx = [0, 0, 1, -1];
      let dy = [-1, 1, 0, 0];
      const nx = x + dx[i];
      const ny = y + dy[i];
      const isValid = (x, y) => x >= 0 && x < n && y >= 0 && y < m;
      if (isValid(nx, ny) && table[nx][ny] === 1) {
        table[nx][ny] = 0;
        const [startX, startY] = start;
        // console.info(nx, ny, startX, startY);
        puzzle[nx - startX][ny - startY + 6] = 1;
        DFS2(nx, ny, puzzle, start);
      }
    }
  }

  for (let i = 0; i < n; i++) {
    for (let j = 0; j < n; j++) {
      if (table[i][j] === 1) {
        const puzzleTemplate = Array.from({ length: 12 }, () =>
          Array(12).fill(0)
        );
        DFS2(i, j, puzzleTemplate, [i, j]);
        puzzleList.push(puzzleTemplate);
      }
    }
  }
  puzzleList = puzzleList.map((puzzle) => {
    // console.table(puzzle);
    const trimmedPuzzle = trimPuzzle(puzzle);
    // console.table('trimmedPuzzle', trimmedPuzzle);
    return trimmedPuzzle;
  });
  // console.info('boardList', JSON.parse(JSON.stringify(boardList)));
  // console.info('puzzleList', JSON.parse(JSON.stringify(puzzleList)));

  for (let boardIndex = 0; boardIndex < boardList.length; boardIndex++) {
    let board = boardList[boardIndex];
    for (let puzzleIndex = 0; puzzleIndex < puzzleList.length; puzzleIndex++) {
      let puzzle = puzzleList[puzzleIndex];
      // console.info('board', board, 'puzzle', puzzle);
      // console.info(boardIndex, puzzleIndex, answer);
      // console.table(board);
      // console.table(puzzle);
      // console.warn(boardList);
      // console.warn(puzzleList);
      for (const degree of [0, 90, 180, 360]) {
        const rotatedPuzzle = rotateMatrix(puzzle, degree);
        if (isSameArr(board, rotatedPuzzle) !== 0) {
          // console.error('boardList', JSON.parse(JSON.stringify(boardList)));
          answer = answer + isSameArr(board, rotatedPuzzle);
          // console.warn('');
          // console.table(board);
          // console.table(puzzle);
          // console.error(answer);
          // console.warn('');
          // console.error('boardIndex', boardIndex);
          // console.error('puzzleIndex', puzzleIndex);
          // console.error(isSameArr(board, rotatedPuzzle));
          // console.error('@@answer-2@@', answer);
          board = [];
          puzzle = [];
          boardList[boardIndex] = [];
          puzzleList[puzzleIndex] = [];
          // console.warn('');
          break;
        }
      }
    }
  }

  return answer;
}

function isSameArr(arr1, arr2) {
  // debugger
  const n1 = arr1?.length;
  const m1 = arr1[0]?.length;
  const n2 = arr2?.length;
  const m2 = arr2[0]?.length;
  let answer = 0;

  if (n1 !== n2) return 0;
  if (m1 !== m2) return 0;

  for (let i = 0; i < n1; i++) {
    for (let j = 0; j < m1; j++) {
      if (arr1[i][j] !== arr2[i][j]) return 0;
      else if (arr1[i][j] === 1) answer++;
      // if (arr1[i][j] === arr2[i][j]) answer++;
    }
  }
  return answer;
}

function rotateMatrix(matrix, degree) {
  if (matrix.length === 0 || matrix[0].length === 0) return matrix;

  const m = matrix.length; // 행의 수
  const n = matrix[0].length; // 열의 수
  let result;

  switch (degree) {
    case 90:
      result = new Array(n).fill(0).map(() => new Array(m).fill(0));
      for (let i = 0; i < m; i++) {
        for (let j = 0; j < n; j++) {
          result[j][m - 1 - i] = matrix[i][j];
        }
      }
      break;
    case 180:
      result = new Array(m).fill(0).map(() => new Array(n).fill(0));
      for (let i = 0; i < m; i++) {
        for (let j = 0; j < n; j++) {
          result[m - 1 - i][n - 1 - j] = matrix[i][j];
        }
      }
      break;
    case 270:
      result = new Array(n).fill(0).map(() => new Array(m).fill(0));
      for (let i = 0; i < m; i++) {
        for (let j = 0; j < n; j++) {
          result[n - 1 - j][i] = matrix[i][j];
        }
      }
      break;
    default:
      return matrix; // 다른 각도의 경우 원래 행렬 반환
  }

  return result;
}

function trimPuzzle(arr) {
  let rowStart = Number.MAX_SAFE_INTEGER;
  let rowEnd = 0;
  let colStart = Number.MAX_SAFE_INTEGER;
  let colEnd = 0;
  const n = arr.length;
  const m = arr[0].length;

  for (let i = 0; i < n; i++) {
    for (let j = 0; j < m; j++) {
      if (arr[i][j] === 1) {
        rowStart = Math.min(rowStart, i);
        rowEnd = Math.max(rowEnd, i);
        colStart = Math.min(colStart, j);
        colEnd = Math.max(colEnd, j);
      }
    }
  }
  // ! row와 col을 반대로 하는 실수
  const slicedArr = JSON.parse(JSON.stringify(arr)).slice(rowStart, rowEnd + 1);
  const trimmedArr = slicedArr.map((subArr) => {
    return subArr.slice(colStart, colEnd + 1);
  });
  return trimmedArr;
}

// console.info(
//   solution(
//     [
//       [1, 1, 0, 0, 1, 0],
//       [0, 0, 1, 0, 1, 0],
//       [0, 1, 1, 0, 0, 1],
//       [1, 1, 0, 1, 1, 1],
//       [1, 0, 0, 0, 1, 0],
//       [0, 1, 1, 1, 0, 0]
//     ],
//     [
//       [1, 0, 0, 1, 1, 0],
//       [1, 0, 1, 0, 1, 0],
//       [0, 1, 1, 0, 1, 1],
//       [0, 0, 1, 0, 0, 0],
//       [1, 1, 0, 1, 1, 0],
//       [0, 1, 0, 0, 0, 0]
//     ]
//   )
// ); // 14
// console.info(
//   solution(
//     [
//       [0, 0, 0],
//       [1, 1, 0],
//       [1, 1, 1]
//     ],
//     [
//       [1, 1, 1],
//       [1, 0, 0],
//       [0, 0, 0]
//     ]
//   )
// ); // 0
