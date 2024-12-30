function solution(elements) {
  var answer = 0;
  const n = elements.length;
  elements = elements.concat(elements);
  console.log(elements);

  const uniqueSum = new Set();

  for (let i = 1; i <= n; i++) {
    for (let j = i; j <= n; j++) {
      let sum = 0;
      for (let k = 0; k < j; k++) {
        sum += elements[k];
        uniqueSum.add(sum);
        console.log(i, j, sum);
      }
    }
  }

  return uniqueSum.size;
}
