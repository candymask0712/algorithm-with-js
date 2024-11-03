// * 나의 풀이
// ! 여러 시도를 하다 실패
var maxProfit = function (prices) {
  const sorted = prices.slice().sort((a, b) => a - b);
  // console.log(sorted)
  let profit = 0;
  let min = prices[0];
  prices.forEach((price, index) => {
    if (index === 0) return;
    const min = sorted[0];

    if (price > min) {
      profit += price - min;
      sorted.shift();
    }
    console.log(price, min, profit);
  });
  return profit;
};

// * 참고 답안
// ! 바로바로 이득이면 무조건 판매하는 것으로 계산
function maxProfit(prices) {
  let maxProfit = 0;

  // 매일매일 주식 가격을 비교하면서 이익이 발생하는 경우를 더해나갑니다
  for (let i = 1; i < prices.length; i++) {
    // 오늘 가격이 어제 가격보다 높다면 이익이 발생하므로 더해줍니다
    // ! 하락하는 구간은 아예 무시하는 것이 핵심
    if (prices[i] > prices[i - 1]) {
      maxProfit += prices[i] - prices[i - 1];
    }
  }

  return maxProfit;
}
