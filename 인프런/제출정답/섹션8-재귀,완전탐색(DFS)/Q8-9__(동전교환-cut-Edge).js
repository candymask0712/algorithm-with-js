// * 모범 답안
function solution(m, arr) {
  let answer = Number.MAX_SAFE_INTEGER;
  let n = arr.length;
  function DFS(L, sum) {
    if (sum > m) return;
    if (L >= answer) return;
    if (sum === m) {
      answer = Math.min(answer, L);
    } else {
      for (let i = 0; i < n; i++) {
        DFS(L + 1, sum + arr[i]);
      }
    }
  }
  DFS(0, 0);
  return answer;
}

// * 3차 - 정답
function solution(arr, limit) {
  let minNum = 10000000000;
  const n = arr.length;
  arr = arr.sort((a, b) => b - a);

  function DFS(amount, num) {
    if (amount > limit || num > minNum) return;
    if (amount === limit) {
      if (num < minNum) minNum = num;
    } else {
      for (let i = 0; i < n; i++) {
        DFS(amount + arr[i], num + 1);
      }
    }
  }
  DFS(0, 0);
  return minNum;
}

// * 2차 풀이 - 성공 (but 추가 최적화 필요)
function solution(arr, limit) {
  let answer = Number.MAX_SAFE_INTEGER;
  function DFS(m, c) {
    if (m > limit) return;
    // ! 추가적인 가지치기 필요
    // ! 총 금액이 제한 초과한 것 외에도 사용한 동전개수가 현재 답보다 크면 검색할 필요 X
    if (m === limit) {
      answer = Math.min(answer, c);
    } else {
      for (let i = 0; i < arr.length; i++) {
        DFS(m + arr[i], c + 1);
      }
    }
  }
  DFS(0, 0);
  return answer;
}
let arr = [1, 2, 5];
console.log(solution(arr, 15));

// 1차 풀이
function solution(arr, c) {
  arr = arr.sort((a, b) => b - a);
  let answer, flag;
  function DFS(L, sum) {
    if (flag === 1) return;
    if (L >= answer) return;
    // 이미 예비로 구한 정답보다 더 깊은 레벨
    // 정답일 수가 없는 경우이기에 효율성 위해 거름
    if (sum === c) {
      console.log(L, sum);
      answer = L;
      flag = 1;
    } else if (sum > c) {
      return;
    } else {
      for (let i = 0; i < arr.length; i++) {
        DFS(L + 1, sum + arr[i]);
      }
    }
  }
  DFS(0, 0);
  return answer;
}

let coin = [1, 2, 5];

console.log(solution(coin, 15));
