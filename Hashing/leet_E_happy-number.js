var isHappy = function (n) {
  // 숫자의 각 자릿수의 제곱의 합을 계산하는 헬퍼 함수
  function getNext(num) {
    let total = 0;
    while (num > 0) {
      const digit = num % 10;
      total += digit * digit;
      num = Math.floor(num / 10);
    }
    return total;
  }

  const seen = new Set();
  while (n !== 1 && !seen.has(n)) {
    seen.add(n);
    n = getNext(n);
  }

  return n === 1;
};
