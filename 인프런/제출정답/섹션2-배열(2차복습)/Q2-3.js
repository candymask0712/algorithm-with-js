// 모범 답안
function solution(a, b) {
  let answer = '';
  for (let i = 0; i < a.length; i++) {
    // ! 비기는 경우 / A가 이기는 경우 / 그 외 =>  3가지로 나눔
    if (a[i] === b[i]) answer += 'D ';
    else if (a[i] === 1 && b[i] === 3) answer += 'A ';
    else if (a[i] === 2 && b[i] === 1) answer += 'A ';
    else if (a[i] === 3 && b[i] === 2) answer += 'A ';
    else answer += 'B ';
  }

  return answer;
}

// 4차 - 정답
function solution(a, b) {
  return a.map((el, i) => {
    if (el === b[i]) return 'D';
    // ! 모범 답안처럼 나누는 것이 더 쉽게 읽힘
    else if (
      (el === 1 && b[i] === 3) ||
      (el > b[i] && !(el === 3 && b[i] === 1))
    )
      return 'A';
    else return 'B';
  });
}

// 3차 답안 - 정답
function solution(a, b) {
  let answer = [];
  for (let i = 0; i < a.length; i++) {
    let c = a[i];
    let d = b[i];
    // ! 비기는 경우, 예외를 제외하고
    // ! 큰 수가 이기는 경우가 다수인 점을 이용
    if (c === d) answer.push('D');
    else if (c === 1 && d === 3) answer.push('A');
    else if (c === 3 && d === 1) answer.push('B');
    else if (c > d) answer.push('A');
    else answer.push('B');
  }

  return answer;
}

// 2차 정답

let ResultOfRPS = function (a, b) {
  let result = [];
  for (let i = 0; i < a.length; i++) {
    if (a[i] === b[i]) result.push('D');
    else if (a[i] > b[i] || (a[i] === 1 && b[i] === 2)) result.push('A');
    // (2,1), (3,2) 의 경우를 보고 a>b 규칙을 세우면 안됨
    // (1,2) 외에도 b가 이기는 경우의 수 중에서 (3,1)의 반례가 있고
    // a가 승리하거나 b가 승리하는 경우 중 하나는 먼저 나와야 해서 아예 처리가 불가능
    // 결국 가위바위보를 숫자로 개념화 했을 뿐 수리적 상관관계가 있는게 아니라 공식화가 하면 x
    // 조금 길어지더라도 일일이 경우의 수를 나누어야 한다
    else result.push('B');
  }
  return result;
};

// 1차 정답

const a = [2, 3, 3, 1, 3];
const b = [1, 1, 2, 2, 3];
let match = function (a, b) {
  let result = [];
  for (let i = 0; i < a.length; i++) {
    if (a[i] === 3 && b[i] === 1) result.push('B');
    else if (a[i] === 1 && b[i] === 3) result.push('A');
    else if (a[i] > b[i]) result.push('A');
    else if (a[i] < b[i]) result.push('B');
    else result.push('D');
  }
  return result;
};
console.log(match(a, b));
