// * 문제

// * 모범 답안

function solution(s) {
  let answer = 0;
  let stack = [];
  for (let i = 0; i < s.length; i++) {
    if (s[i] === '(') stack.push('(');
    else {
      stack.pop();
      if (s[i - 1] === '(') answer += stack.length;
      else answer++;
      //stack.pop(); 이 위치에 하면 레이저까지 카운팅한다.
    }
  }
  return answer;
}

let a = '()(((()())(())()))(())';
console.log(solution(a));

// * 모범 답안 분석

function solution(s) {
  let answer = 0;
  let stack = [];
  for (let i = 0; i < s.length; i++) {
    if (s[i] === '(') stack.push('(');
    else {
      stack.pop();
      if (s[i - 1] === '(') answer += stack.length;
      else answer++;
      //stack.pop(); 이 위치에 하면 레이저까지 카운팅한다.
    }
  }
  return answer;
}

let a = '()(((()())(())()))(())';
console.log(solution(a));

// * 3차 답안 - 성공
// ! 스택 사용 시 더 간단하게 처리 가능
const solution = (str) => {
  const arr = str.split('');
  let answer = 0;
  let c = 0;
  arr.forEach((el, i) => {
    if (el === '(') {
      if (arr[i + 1] === '(') {
        c += 1;
      } else {
      }
    } else {
      if (arr[i - 1] === '(') {
        answer += c;
      } else {
        c -= 1;
        answer += 1;
      }
    }
  });
  return answer;
};

let str = '()(((()())(())()))(())';
console.info(solution(str));

// * 2차 답안 - 성공

const solution = (str) => {
  let q = [];
  let answer = 0;
  let tmp = '';
  for (let x of str) {
    if (x === '(') {
      q.push(x);
      tmp = '(';
    } else {
      q.pop();
      if (tmp === ')') answer++;
      // ! 처음에는 이전에 튀어나온 값인 tmp를 설정안해 해맴
      else answer += q.length;
      tmp = ')';
    }
  }
  return answer;
};
// * 1차 답안 - 없음
