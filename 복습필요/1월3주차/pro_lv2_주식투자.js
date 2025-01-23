function solution(prices) {
  var answer = [];

  const stack = [];
  const n = prices.length;

  for (let i = 0; i < n; i++) {
    while (prices[i] < prices[stack.at(-1)]) {
      const poped = stack.pop();
      answer[poped] = i - poped;
    }

    stack.push(i);
  }

  while (stack.length > 0) {
    const top = stack.pop();
    answer[top] = prices.length - 1 - top; // 끝까지 유지된 시간을 계산
  }

  return answer;
}
