// 풀이
function solution(n, k) {
  const answer = [];
  const arr = Array.from({ length: n }, (_, i) => i + 1);

  let nth = k - 1;

  while (arr.length) {
    if (nth === 0) {
      answer.push(...arr);
      break;
    }

    const fact = factorial(arr.length - 1);
    const index = Math.floor(nth / fact);
    nth = nth % fact;

    answer.push(arr[index]);
    arr.splice(index, 1);
  }

  return answer;
}

const factorial = (n) => {
  if (n === 1) return 1;
  return n * factorial(n - 1);
};
