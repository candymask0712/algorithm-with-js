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
