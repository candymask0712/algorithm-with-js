// * 다이나믹
// 점화식의 개념으로 문제를 작게 쪼개서 해결

// * 모범답안

// 6차 - 성공
function solution(n) {
  const dy = Array.from({ length: n + 1 }, () => 0);
  dy[1] = 1;
  dy[2] = 2;
  for (let i = 3; i <= n; i++) {
    dy[i] = dy[i - 2] + dy[i - 1];
  }
  return dy[n];
}

// * 5차 풀이 - 성공
const solution = (n) => {
  let ch = Array.from({ length: n + 1 }, () => 0);
  ch[1] = 1;
  ch[2] = 2;

  for (let i = 3; i <= n; i++) {
    ch[i] = ch[i - 1] + ch[i - 2];
  }
  return ch[n];
};

// * 4차 풀이 - 성공
const solution = (n) => {
  let ch = Array.from({ length: n + 1 }, () => 0);
  ch[1] = 1;
  ch[2] = 2;
  for (let i = 3; i <= n + 1; i++) {
    console.log(ch);
    ch[i] = ch[i - 2] + ch[i - 1];
  }
  return ch[n];
};
console.log(solution(7));

// * 3차 풀이

const solution = (n) => {
  let arr = Array.from({ length: n + 1 }, () => 0);
  // ! 풀이했으나 점화식 초기값 설정에서 해맴
  arr[0] = 0;
  arr[1] = 1;
  arr[2] = 2;

  for (let i = 3; i <= n; i++) {
    arr[i] = arr[i - 1] + arr[i - 2];
  }
  console.log(arr);
  return arr[n];
};
console.log(solution(7));

// * 2차 풀이

const solution = (n) => {
  let dy = Array.from({ length: n + 1 }, () => 0);
  dy[1] = 1;
  dy[2] = 2;
  for (let i = 0; i <= n; i++) {
    dy[i] = dy[i - 2] + dy[i - 1];
    // n번째 계단을 오르는 방법은 n-2번째에서 2칸 or n-1번째에서 1칸
  }
  return dy[n];
};

// * 1차 풀이

const solution = (n) => {
  let answer = 0;

  const DFS = (s) => {
    if (s > n) return;
    else if (s === n) {
      answer++;
      return;
    } else {
      DFS(s + 1);
      DFS(s + 2);
    }
  };

  DFS(0);
  return answer;
};

console.log(solution(7));
