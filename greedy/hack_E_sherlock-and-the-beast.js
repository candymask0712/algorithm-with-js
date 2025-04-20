// ! 나의 풀이 - 일부 케이스 시간초과 발생
function decentNumber(n) {
  const numbers = [];
  function DFS(str) {
    if (str.length === n) {
      numbers.push(Number(str));
      return;
    }
    DFS(str + 5);
    DFS(str + 3);
  }

  DFS('');

  const answer = [-1];
  numbers.forEach((number) => {
    if (isValid(number)) {
      answer.push(number);
    }
  });
  answer.sort((a, b) => b - a);
  console.log(answer[0]);
}

// ! 모범풀이
function decentNumber(n) {
  for (let fiveCount = n; fiveCount >= 0; fiveCount--) {
    const threeCount = n - fiveCount;
    if (fiveCount % 3 === 0 && threeCount % 5 === 0) {
      console.log('5'.repeat(fiveCount) + '3'.repeat(threeCount));
      return;
    }
  }
  console.log('-1');
}
