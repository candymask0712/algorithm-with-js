function fibonacci(n) {
  let arr = Array.from(Array(n), () => []);
  arr[0] = [1, 0];
  arr[1] = [0, 1];
  for (let i = 2; i <= n; i++) {
    const [cnt1, cnt2] = arr[i - 2];
    const [cnt3, cnt4] = arr[i - 1];
    arr[i] = [cnt1 + cnt3, cnt2 + cnt4];
  }
  return arr[n];
}
console.info(fibonacci(0));
console.info(fibonacci(1));
console.info(fibonacci(2));
console.info(fibonacci(3));
console.info(fibonacci(4));
