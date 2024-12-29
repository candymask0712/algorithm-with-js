// * 첫번째 풀이
function solution(want, number, discount) {
  var answer = 0;

  for (let i = 0; i < 10; i++) {
    const product = discount[i];
    const index = want.indexOf(product);
    if (index >= 0) number[index]--;
  }
  if (number.every((num) => num === 0)) answer++;

  for (let i = 10; i < discount.length; i++) {
    const curProduct = discount[i];
    const prevProduct = discount[i - 10];
    const curIndex = want.indexOf(curProduct);
    const prevIndex = want.indexOf(prevProduct);
    if (curIndex >= 0) number[curIndex]--;
    if (prevIndex >= 0) number[prevIndex]++;

    if (number.every((num) => num === 0)) answer++;
  }

  return answer;
}
