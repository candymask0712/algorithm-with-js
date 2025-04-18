// ! 오답안 - 한방향 체크
// ! [1, 3, 2, 1]의 경우 [1,2,2,1] 로 계산되어 6이 답이 됨 (실제 답은 7)
function candies(n, arr) {
  let answer = Array(n).fill(1);
  for (let i = 0; i < n; i++) {
    if (arr[i] > arr[i + 1]) {
      answer[i] = Math.max(answer[i], answer[i + 1] + 1);
    } else if (arr[i] < arr[i + 1]) {
      answer[i + 1] = Math.max(answer[i + 1], answer[i] + 1);
    }
  }

  return answer.reduce((acc, num) => acc + num, 0);
}

// ! 실제 답안 - 양방향 체크
function candies(n, arr) {
  const candies = new Array(n).fill(1);

  for (let i = 1; i < n; i++) {
    if (arr[i] > arr[i - 1]) {
      candies[i] = candies[i - 1] + 1;
    }
  }

  for (let i = n - 2; i >= 0; i--) {
    if (arr[i] > arr[i + 1]) {
      candies[i] = Math.max(candies[i], candies[i + 1] + 1);
    }
  }

  return candies.reduce((sum, c) => sum + c, 0);
}
