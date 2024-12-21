// 처음 풀이
function solution(order) {
  var answer = 0;
  const n = order.length;
  const list = Array.from({ length: n }, (_, index) => index + 1);

  const q = [];
  while (q.length || list.length) {
    if (list.length && order.length && order[0] === list[0]) {
      order.shift();
      list.shift();
      answer++;
    } else if (q.length && order.length && order[0] === q[q.length - 1]) {
      order.shift();
      q.pop();
      answer++;
    } else {
      if (list.length) q.push(list.shift());
    }

    if (
      list.length === 0 &&
      q.length &&
      order.length &&
      q[q.length - 1] !== order[0]
    )
      return answer;
  }

  return answer;
}

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
