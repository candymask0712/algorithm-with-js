// * 3차 풀이 (25.11.08) - 성공
// ? 시간복잡도: O(n)
// ? 공간복잡도: O(1)
var maxProfit = function (prices) {
  let minPrice = prices[0];
  let maxDiff = 0;

  for (const price of prices) {
    const diff = price - minPrice;
    if (diff > maxDiff) maxDiff = diff;
    if (price < minPrice) minPrice = price;
  }

  return maxDiff;
};

// * 2차 풀이 - (25.10.03) - 정답
var maxProfit = function (prices) {
  let lowest = Infinity;
  let answer = 0;
  const n = prices.length;
  for (const price of prices) {
    const diff = price - lowest;
    if (diff > answer) answer = diff;
    if (price < lowest) lowest = price;
  }
  return answer;
};

// * 1차 풀이

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
