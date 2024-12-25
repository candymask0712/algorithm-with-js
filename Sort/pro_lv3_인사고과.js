// 첫번째 풀이
function solution(scores) {
  var answer = 0;
  const n = scores.length;
  const [wanhoWorkScore, wanhoPeerScore] = scores[0];
  scores.sort(([a, b], [c, d]) => {
    return a + b - (c + d);
  });

  const filteredScores = scores.filter((score) => {
    const [workScore, peerScore] = score;

    for (let i = n - 1; i >= 0; i--) {
      const [workScore2, peerScore2] = scores[i];
      if (workScore < workScore2 && peerScore < peerScore2) return false;
    }

    return true;
  });

  const wanhoIndex = filteredScores.findIndex(
    ([workScore, peerScore]) =>
      workScore === wanhoWorkScore && peerScore === wanhoPeerScore
  );

  if (wanhoIndex === -1) return -1;

  const wanhoLastIndex = findLastIndex(
    filteredScores,
    ([workScore, peerScore]) =>
      workScore === wanhoWorkScore && peerScore === wanhoPeerScore
  );

  if (wanhoIndex !== wanhoLastIndex)
    return filteredScores.length - wanhoLastIndex;

  return filteredScores.length - wanhoIndex;
}

function findLastIndex(array, predicate) {
  for (let i = array.length - 1; i >= 0; i--) {
    if (predicate(array[i], i, array)) {
      return i;
    }
  }
  return -1;
}

// 두번째 풀이
function solution(scores) {
  let answer = 0;
  const wanho = scores[0];
  scores = scores.sort((a, b) => (a[0] === b[0] ? a[1] - b[1] : b[0] - a[0]));
  let max = 0;
  for (let i = 0; i < scores.length; i++) {
    const score = scores[i];
    if (score[1] < max) {
      if (score[0] === wanho[0] && score[1] === wanho[1]) return -1;
    } else {
      max = Math.max(max, score[1]);
      if (score[0] + score[1] > wanho[0] + wanho[1]) answer++;
    }
  }
  return answer + 1;
}
