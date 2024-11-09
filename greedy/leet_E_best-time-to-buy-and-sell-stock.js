// * 나의 풀이

var maxProfit = function (prices) {
  let min = prices[0];
  let answer = 0;
  prices.forEach((price) => {
    answer = Math.max(answer, price - min);
    min = Math.min(min, price);
  });
  return answer;
};

// * for 루프 사용시 속도 개선
const maxProfit = function (prices) {
  let min = prices[0];
  let profit = 0;

  for (let i = 1; i < prices.length; i++) {
    profit = Math.max(profit, prices[i] - min);
    min = Math.min(min, prices[i]);
  }

  return profit;
};
