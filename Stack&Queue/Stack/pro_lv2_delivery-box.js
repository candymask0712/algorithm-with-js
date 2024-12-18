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
