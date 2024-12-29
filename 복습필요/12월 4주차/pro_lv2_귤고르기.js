function solution(k, tangerine) {
  let list = [];
  tangerine.sort((a, b) => a - b);
  let count = 1;
  for (let i = 0; i < tangerine.length; i++) {
    if (tangerine[i] !== tangerine[i + 1] || i === tangerine.length - 1) {
      list.push(count);
      count = 1;
    } else count++;
  }

  list.sort((a, b) => b - a);

  let sum = 0;
  // ! 기존에는  i < list.lengt 조건
  // ! 모두 종류가 다른 경우에 대한 처리가 불가능
  for (let i = 0; i <= list.length; i++) {
    if (sum >= k) return i;
    else {
      sum += list[i];
    }
  }
}
