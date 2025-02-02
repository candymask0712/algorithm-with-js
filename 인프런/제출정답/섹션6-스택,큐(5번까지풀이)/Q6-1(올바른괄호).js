// * 모범 답안
let stack = function (s) {
  arr = [];
  answer = true;
  for (let x of s) {
    if (x === '(') arr.push(x);
    else {
      if (arr.length === 0) return false;
      stack.pop();
    }
  }
  if (arr.length > 0) return false;
  return answer;
};

// 4차 - 정답
const solution4 = (str) => {
  const arr = str.split('');
  const s = [];
  for (const el of arr) {
    if (s[0] === '(') {
      if (el === '(') {
        s.unshift(el);
      } else {
        s.shift();
      }
      // s[0] === ')'
    } else {
      if (el === '(') {
        s.unshift(el);
      } else {
        s.unshift(el);
      }
    }
  }
  return s.length > 0 ? 'NO' : 'YES';
};

// * 3차 풀이  - 정답
const solution = (str) => {
  let q = [];
  for (let x of str) {
    if (x === '(') q.push(x);
    else {
      let v = q.pop();
      if (v !== '(') return 'NO';
    }
  }
  if (q.length !== 0) return 'NO';
  return 'YES';
};

// let str = "(()(()))(()"
// console.log(solution(str)) // NO

// let str = "(()()))"
// console.log(solution(str)) // NO

let str = '(())()';
console.log(solution(str)); // YES

// 2차 풀이  - 풀이 접근 실패로 강의 듣고 풀이
let stack = function (s) {
  arr = [];
  answer = true;
  for (let x of s) {
    if (x === '(') arr.push(x);
    else if (x === ')') arr.pop();
    if (arr.length === 0) return false;
    // 모범 답안에서는 닫는 괄호와 길이가 0이 되는 경우를 둘다 else if 안에 if문을 하나 더 만들어 풀이
    // else 안 에서도 굳이 if와 else로 복잡하게 하지 않고 stack.pop() 을 if문과 별개로 생성
  }
  return answer;
};

// // 1차 풀이
// let distinguishCorrectBracket = function (s) {
//     let answer = 'YES'
//     let stack = [];
//     for (let x of s) {
//         if (x === '(') stack.push(x);
//         else {
//             if (stack.length === 0) return 'NO';
//             stack.pop();
//         }
//     }
//     if(stack.length>0) return 'NO';
//     return answer;
// }

// const ex2 = '()()'
// const ex3 = '(())()'
// const ex4 = ')()('
// const ex5 = '(()('

// console.log(distinguishCorrectBracket(ex2), 'YES');
// console.log(distinguishCorrectBracket(ex3), 'YES');
// console.log(distinguishCorrectBracket(ex4), 'No');
// console.log(distinguishCorrectBracket(ex5), 'No');
