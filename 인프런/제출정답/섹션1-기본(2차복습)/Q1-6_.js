//모범 답안
function solution(arr) {
  let answer = [];
  let sum = 0,
    min = 1000; // 이미 문제에서 최대, 최소가 정해져 있어 깔끔하게 정수로 정의
  for (let x of arr) {
    // 이미 원소의 개수가 정해진 배열이므로 for of문을 사용
    if (x % 2 === 1) {
      sum += x; //하나의 for문 안에서 합계 계산과 최소값 판별을 동시에 진행
      if (x < min) min = x;
    }
  }
  answer.push(sum); // 두 개의 담을 배열에 삽입해서 깔끔하게 return answer 하나로 출력
  answer.push(min);
  return answer;
}

// * 4차 답안 - 정답

const solution = (arr) => {
  const oddNums = arr.filter((el) => el % 2 === 1);
  const minNum = oddNums.sort((a, b) => a - b)[0];
  const oddNumSum = oddNums.reduce((sum, el) => sum + el, 0);
  return [oddNumSum, minNum];
};

// * 3차 답안 - 정답 (효과적으로 작성)

let solution = (arr) => {
  let answer = 100;
  let sum = 0;
  for (let x of arr) {
    if (x % 2 === 1) {
      sum += x;
      if (x < answer) answer = x;
    }
  }
  return [sum, answer];
};

// 2차 답안 - 동일한 내용의 for문을 추가하여 오히려 식이 더 복잡해짐

function solution(arr) {
  let minOddnum = Number.MAX_SAFE_INTEGER,
    sumOddnum;
  for (let i = 0; i < arr.length; i++) {
    if (arr[i] % 2 === 1) {
      sumOddnum += arr[i];
    }
    for (let i = 0; i < arr.length; i++) {
      if (arr[i] < minOddnum) sumOddnum = arr[i];
    }
    return sumOddnum, minOddnum;
  }
}

arr = [12, 77, 38, 41, 53, 92, 85];

// 1차 답안
// var arrOddnum = [];
// var sumOddnum = 0;
// function solution(arr) {
//   for (i = 0; i < arr.length; i++) {
//     if (arr[i] % 2 === 1) {
//       arrOddnum.push(arr[i]);
//       sumOddnum = sumOddnum + arr[i];
//     }
//   }
// }
// arr = [12, 77, 38, 41, 53, 92, 85];
