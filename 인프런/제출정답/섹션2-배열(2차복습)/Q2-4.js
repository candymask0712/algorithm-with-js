// 모범 답안
function solution(arr) {
  let answer = 0,
    cnt = 0;
  for (let x of arr) {
    if (x === 1) {
      cnt++;
      answer += cnt;
    } else cnt = 0;
  }
  return answer;
}

let arr = [1, 0, 1, 1, 1, 0, 0, 1, 1, 0];
console.log(solution(arr));

// 4차 - 정답
function solution(arr) {
  let additionalPoints = 0;
  return arr.reduce((totalPoints, questionResult) => {
    if (questionResult) {
      return totalPoints + questionResult + additionalPoints++;
    } else {
      additionalPoints = 0;
      return totalPoints;
    }
  });
}

// 3차 답안 - 정답이나 약간 헤맴
function solution(arr) {
  let answer = 0;
  let bonus = 0;
  for (let x of arr) {
    if (x === 1) {
      answer += 1 + bonus++;
    } else {
      bonus = 0;
    }
  }
  return answer;
}

// 2차 답안 - 점수를 정답 시 주는 1점과 연속 정답 시 주는 가산점으로 나눠 생각
// 굳이 개념적으로 쪼갤 수도 있지만 이 경우에는 n번째 정답일 시 n점을 준다고 봐도 됨
// 문제를 받으면 너무 개념적으로 생각하지 말고 일단 예제를 시행해 보고 규칙을 찾아
// 이 것을 심플하게 반환할 수 있는 수식을 짠다고 생각하자
let calculateScore = function (t) {
  let score = 0;
  let plus = 0;
  for (let i = 0; i < t.length; i++) {
    if (t[i] === 1) {
      score++;
      if (t[i - 1] === 1) {
        plus++;
        score += plus;
      } else plus = 0;
    }
  }
  return score;
};

// 1차 답안
const a = [1, 0, 1, 1, 1, 0, 0, 1, 1, 0];
let judge = function (t) {
  let ext = 0,
    score = 0; //연속으로 변수 선언 시 한 줄로 표시
  for (let i = 0; i < t.length; i++) {
    if (t[i] === 1) {
      ext++; // ; 누락함
      score += ext; // a = a + b 형태는 += 기호 쓰기
    } else {
      ext = 0;
    } // 경우의 수가 두 가지 이므로 ()조건설정 불필요
  }
  return score;
};
console.log(judge(a));

//<원래 작성한 답안>
// const a = [1, 0, 1, 1, 1, 0, 0, 1, 1, 0];
// let judge = function (t) {
//   let ext = 0;
//   let score = 0;
//   for (let i = 0; i < t.length; i++) {
//     if (t[i] === 1) {
//       ext++;
//     } else if (t[i] === 0) {
//       ext = 0;
//     }
//     score = score + ext;
//     console.log(i, t[i], ext, score);
//   }
//   return score;
// };
// console.log(judge(a));
