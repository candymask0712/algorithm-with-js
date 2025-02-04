//모범 답안
function solution(s) {
  let answer;
  let stack = [];
  for (let x of s) {
    if (x === ')') {
      while (stack.pop() !== '(');
      // stack.pop()가 빼는 기능과 동시에 빼는 대상을 의미함
      // while 과 병행하면 '(' 가 아닐 때까지 계속해서 삭제 가능
    } else stack.push(x);
  }
  answer = stack.join('');
  // arr = [a,b,c] 일 때
  // arr.join() -> 'a,b,c' 이런식으로 리턴
  // arr.join('') -> 'abc' 이런식으로 리턴
  // arr.join('-') -> 'a-b-c' 이런식으로 리턴
  return answer;
}

// 4차

const solution = (str) => {
  const n = str.length;
  let s = [];
  for (let i = 0; i < n; i++) {
    if (str[i] !== ')') {
      s.push(str[i]);
    } else {
      if (s.lastIndexOf('(') !== -1) {
        s = s.slice(0, s.lastIndexOf('('));
      } else {
        s.push(str[i]);
      }
    }
  }
  return s.join('');
};

// * 3차 답안 - 성공
const solution = (str) => {
  let q = [];
  for (let x of str) {
    if (x === ')') {
      let v;
      while (v !== '(') {
        v = q.pop();
      }
      // ! 아래처럼 작성 시 조건설정과 실행을 한번에 가능
      // ! while(stack.pop()!=='(')
    } else {
      q.push(x);
    }
  }
  q = q.join('');
  return q;
};
let str = '(A(BC)D)EF(G(H)(IJ)K)LM(N)';
console.log(solution(str)); // EFLM

// * 2차 답안 - 못 풀고 강의 듣고도 풀이 실패
let deleteLetterBetweenBracket = function (s) {
  let arr = [];
  for (let x of s) {
    if (x === ')') {
      while (arr.pop() !== '(');
      // 조건문 안에 있더라도 함수() 이면 실행된다는 점 중요
    } else arr.push(x);
  }
  console.log(arr);
};
const ex = '(A(BC)D)EF(G(H)(IJ)K)LM(N)';

console.log(deleteLetterBetweenBracket(ex));

// 1차 답안 - 틀림
let deleteLetterBetweenBracket = function (s) {
  let stack = [];
  for (let i = 0; i < s.length; i++) {
    if (s[i] !== ')') stack.push(s[i]);
    else {
      while (stack[i - 1] !== '(') stack.pop();
    }
  }
  return stack;
};
const ex = '(A(BC)D)EF(G(H)(IJ)K)LM(N)';

console.log(deleteLetterBetweenBracket(ex));
