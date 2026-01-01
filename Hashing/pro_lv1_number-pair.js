function solution(X, Y) {
  var answer = '';
  const hashX = new Map();
  const hashY = new Map();
  const hash = new Map();

  for (const str of X) {
    if (hashX.has(str)) hashX.set(str, hashX.get(str) + 1);
    else hashX.set(str, 1);
  }

  for (const str of Y) {
    if (hashY.has(str)) hashY.set(str, hashY.get(str) + 1);
    else hashY.set(str, 1);
  }

  for (let i = 0; i <= 9; i++) {
    const xCount = hashX.get(String(i));
    const yCount = hashY.get(String(i));
    hash.set(String(i), Math.min(xCount, yCount));
  }

  const numList = [];

  for (const [key, val] of hash) {
    for (let i = 0; i < val; i++) {
      if (val > 0) numList.push(Number(key));
    }
  }

  if (numList.length === 0) return '-1';

  numList.sort((a, b) => b - a);

  if (numList.every((num) => num === 0)) return '0';
  const num = numList.join('');

  return num;
}
