// 나의 풀이
function solution(N, stages) {
  var answer = [];
  const stageChallenge = new Map();
  const stageTotal = new Map();

  for (let i = 1; i <= N; i++) {
    stageChallenge.set(i, 0);
    stageTotal.set(i, 0);
  }

  const n = stages.length;

  stages.sort((a, b) => a - b);
  // console.log(stages)

  let stageCount = 0;
  for (let i = 0; i < n; i++) {
    const currentStage = stages[i];
    const nextStage = stages[i + 1];

    stageCount++;

    if (currentStage < nextStage || i === n - 1) {
      stageChallenge.set(currentStage, stageCount);
      for (let i = 1; i <= currentStage; i++) {
        stageTotal.set(i, stageTotal.get(i) + stageCount);
      }
      stageCount = 0;
    }
  }

  // console.log(stageChallenge)
  // console.log(stageTotal)

  for (let i = 1; i <= N; i++) {
    const currentPlayers = stageChallenge.get(i);
    const totalPlayers = stageTotal.get(i);
    const clearRate = totalPlayers ? currentPlayers / totalPlayers : 0;
    answer.push([i, clearRate]);
  }

  answer.sort((a, b) => {
    if (a[1] === b[1]) return a[0] - b[0];
    else return b[1] - a[1];
  });

  console.log(answer);

  return answer.map(([stage, rate]) => stage);
}
