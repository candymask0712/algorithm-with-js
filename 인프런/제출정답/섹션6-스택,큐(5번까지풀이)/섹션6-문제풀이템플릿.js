// * 6-1

const solution = (str) => {};

let str1 = '(()(()))(()';
console.log(solution(str1)); // NO

let str2 = '(()()))';
console.log(solution(str2)); // NO

let str3 = '(())()';
console.log(solution(str3)); // YES

// * 6-2

const solution = (str) => {};
let str4 = '(A(BC)D)EF(G(H)(IJ)K)LM(N)';
console.log(solution(str4)); // EFLM

// * 6-3

const solution = (board, moves) => {};

let board = [
  [0, 0, 0, 0, 0],
  [0, 0, 1, 0, 3],
  [0, 2, 5, 0, 1],
  [4, 2, 4, 4, 2],
  [3, 5, 1, 3, 1],
];

let moves = [1, 5, 3, 5, 1, 2, 1, 4];
console.log(solution(board, moves)); // 4

// * 6-4

const solution = (str) => {};

let str = '352+*9-';
console.log(solution(str)); // 12
// * 6-5

const solution = (str) => {};

let str1 = '()(((()())(())()))(())';
console.log(solution(str1)); // 17

let str2 = '(((()(()()))(())()))(()())';
console.log(solution(str2)); // 24

// * 6-6

const solution = (n, t) => {};

console.log(solution(8, 3));

// * 6-7

function solution(t, s) {}

let target = 'CBA';
let str = 'CBDAGE';

console.log(solution(target, str));
