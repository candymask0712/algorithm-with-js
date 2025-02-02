// * 문제

// * 모범 답안
function solution(board, moves) {
  let answer = 0;
  let stack = [];
  moves.forEach((pos) => {
    for (let i = 0; i < board.length; i++) {
      if (board[i][pos - 1] !== 0) {
        let tmp = board[i][pos - 1];
        board[i][pos - 1] = 0;
        if (tmp === stack[stack.length - 1]) {
          stack.pop();
          answer += 2;
        } else stack.push(tmp);
        break;
      }
    }
  });

  return answer;
}
// * 모범 답안 분석
function solution(board, moves) {
  let answer = 0;
  let stack = [];
  moves.forEach((pos) => {
    for (let i = 0; i < board.length; i++) {
      if (board[i][pos - 1] !== 0) {
        let tmp = board[i][pos - 1];
        board[i][pos - 1] = 0;
        if (tmp === stack[stack.length - 1]) {
          stack.pop();
          answer += 2;
        } else stack.push(tmp);
        break;
      }
    }
  });

  return answer;
}
// * 3차 - 성공
const solution = (board, moves) => {
  const s = [];
  const m = board.length;
  let answer = 0;
  moves.forEach((el) => {
    for (let j = 0; j < m; j++) {
      if (board[j][el - 1] > 0) {
        if (s[s.length - 1] === board[j][el - 1]) {
          s.pop();
          answer += 2;
        } else {
          s.push(board[j][el - 1]);
        }
        board[j][el - 1] = 0;
        break;
      }
    }
  });
  return answer;
};

// * 2차 답안 - 성공 (but 비효율적)
// ! 모범 답안은 매 넣은 시행마다 없어지는 인형이 있는지 체크
const solution = (board, moves) => {
  console.log(moves.length);
  let q = [];
  for (let i = 0; i < moves.length; i++) {
    for (let j = 0; j < board.length; j++) {
      let v = board[j][moves[i] - 1];
      if (v > 0) {
        q.push(v);
        board[j][moves[i] - 1] = 0;
        break;
      }
    }
  }
  let answer = 0;
  let flag = 1;
  while (flag > 0) {
    flag = 0;
    for (let i = 0; i < q.length; i++) {
      if (q[i] === q[i + 1]) {
        q.splice(i, 2);
        answer += 2;
        flag = 1;
        break;
      }
    }
  }
  return answer;
};

let board = [
  [0, 0, 0, 0, 0],
  [0, 0, 1, 0, 3],
  [0, 2, 5, 0, 1],
  [4, 2, 4, 4, 2],
  [3, 5, 1, 3, 1]
];

let moves = [1, 5, 3, 5, 1, 2, 1, 4];
console.log(solution(board, moves)); // 4

// * 1차 답안 - 실패

let moves = [1, 5, 3, 5, 1, 2, 1, 4];
let board = [
  [0, 0, 0, 0, 0],
  [0, 0, 1, 0, 3],
  [0, 2, 5, 0, 1],
  [4, 2, 4, 4, 2],
  [3, 5, 1, 3, 1]
];

let pickingDollFromMachine = function (a, b) {
  let pick = [];
  let stack = [];
  // for (let x of a) {
  let x = 0;
  for (let i = 0; i < b.length; i++) {
    pick.push(b[i][x]);
    // console.log(i,x,pick);
    pick = pick.filter(function (v, i, a) {
      return v > 0;
    });
    // break;
    // console.log(pick);
    // }
    console.log(pick);
  }
};
console.log(pickingDollFromMachine(moves, board));
