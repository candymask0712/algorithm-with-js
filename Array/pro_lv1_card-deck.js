// 나의 풀이

function solution(cards1, cards2, goal) {
  const n = goal.length;
  for (let i = 0; i < n; i++) {
    const curWord = goal[i];
    if (cards1[0] === curWord) cards1.shift();
    else if (cards2[0] === curWord) cards2.shift();
    else return 'No';
  }
  return 'Yes';
}
