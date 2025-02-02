// * 문제

// * 모범 답안
function solution(s) {
  let answer;
  let stack = [];
  for (let x of s) {
    if (!isNaN(x)) stack.push(Number(x));
    else {
      let rt = stack.pop();
      let lt = stack.pop();
      if (x === '+') stack.push(lt + rt);
      else if (x === '-') stack.push(lt - rt);
      else if (x === '*') stack.push(lt * rt);
      else if (x === '/') stack.push(lt / rt);
    }
  }
  answer = stack[0];
  return answer;
}

let str = '352+*9-';
console.log(solution(str));
// * 모범 답안 분석
function solution(s) {
  let answer;
  let stack = [];
  for (let x of s) {
    if (!isNaN(x)) stack.push(Number(x));
    // ! 숫자판별을 정확하고 간단하게 진행
    else {
      let rt = stack.pop();
      let lt = stack.pop();
      if (x === '+') stack.push(lt + rt);
      else if (x === '-') stack.push(lt - rt);
      else if (x === '*') stack.push(lt * rt);
      else if (x === '/') stack.push(lt / rt);
    }
  }
  answer = stack[0];
  return answer;
}

let str = '352+*9-';
console.log(solution(str));
// * 3차 답안 - 실패
// 답안 보면서 학습

// * 2차 답안
const solution = (str) => {
  let symbol = ['+', '-', '*', '/'];
  let stack = [];
  for (let x of str) {
    console.log('stack', stack);
    if (symbol.includes(x)) {
      let rt = Number(stack.pop());
      let lt = Number(stack.pop());
      let v;
      if (x === '+') v = lt + rt;
      else if (x === '-') v = lt - rt;
      else if (x === '*') v = lt * rt;
      else if (x === '/') v = lt / rt;
      console.log('stack', stack, 'lt', lt, 'rt', rt, 'v', v);
      stack.push(v);
    } else {
      stack.push(x);
    }
  }
  return stack[0];
};

let str = '352+*9-';
console.log(solution(str)); // 12

// * 1차 풀이 (풀이 실패로 모범 답안과 동일)
let postfix = function (s) {
  let answer;
  let stack = [];
  for (x of s) {
    if (!isNaN(x)) stack.push(Number(x));
    // isNaN(x) x가 숫자가 아니면 T, 숫자면 F
    // isNAN(x) 는 문자형태로 되어 있는 숫자도 판별 가능
    else {
      let rt = stack.pop();
      let lt = stack.pop();
      if (x === '+') stack.push(lt + rt);
      else if (x === '-') stack.push(lt - rt);
      else if (x === '*') stack.push(lt * rt);
      else if (x === '/') stack.push(lt / rt);
    }
  }
  return stack[0];
  // 해설에서는 answer = stack[0] 으로 할당 후 answer을 리턴함
};

let ex = '352+*9-';
console.log(postfix(ex));
