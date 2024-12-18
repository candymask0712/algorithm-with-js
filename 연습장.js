function solution(order) {
  let answer = 0;
  const stack = [];
  const n = order.length;
  for (let i = 1; i <= n; i++) {
    const cur = order[0];
    const top = stack[stack.length - 1];
    // console.log(i, cur, top, answer, stack);
    if (i === cur) {
      order.shift();
      answer++;
    } else {
      if (cur === top) {
        stack.pop();
        order.shift();
        answer++;
        i--;
      } else {
        stack.push(i);
      }
    }
  }
  // console.log(order);
  // console.log(stack);
  let i = 0;
  while (stack.length && i < order.length) {
    const cur = order[i];
    const top = stack[stack.length - 1];
    // console.log(cur, top);
    if (cur === top) {
      stack.pop();
      answer++;
      i++;
    } else {
      break;
    }
  }

  return answer;
}

console.info(solution([4, 3, 1, 2, 5])); // 2
console.info(solution([5, 4, 3, 2, 1])); // 5
console.info(solution([1, 2, 4, 3, 5])); // 5

// 개선 풀이
function solution(order) {
  let result = 0;
  const stack = [];

  const n = order.length;
  for (let i = 1; i <= n; i++) {
    // 일단 스택에 무조건 넣는다
    const currentOrder = order[result];
    if (i === currentOrder) result++;
    else stack.push(i);

    // 스택의 상자 번호가 주어진 순서와 일치하는지 확인
    // order[result]로 order 배열 수정 없이 result를 포인터로 활용
    while (stack.length !== 0 && stack.at(-1) === currentOrder) {
      stack.pop(); // 일치하는 상자 번호는 스택에서 제거
      result++;
    }
  }

  return result;
}

function solution(order) {
  let result = 0;
  const stack = [];

  for (let i = 1; i <= order.length; i++) {
    // ! 현재 상자와 일치할 경우 스택을 거치지 않도록 수정
    if (i === order[result]) result++;
    else stack.push(i);

    while (stack.length !== 0 && stack.at(-1) === order[result]) {
      stack.pop();
      result++;
    }
  }

  return result;
}
