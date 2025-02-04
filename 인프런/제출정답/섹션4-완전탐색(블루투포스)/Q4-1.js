// 모범 답안
function solution(n, arr) {
  let answer,
    max = Number.MIN_SAFE_INTEGER;
  for (let x of arr) {
    let sum = 0,
      tmp = x;
    while (tmp) {
      sum += tmp % 10;
      tmp = Math.floor(tmp / 10);
    }
    if (sum > max) {
      max = sum;
      answer = x;
    } else if (sum === max) {
      if (x > answer) answer = x;
    }
  }
  return answer;
}

// 3차 - 성공
function solution(arr) {
  let maxNum = arr[0];
  let maxSum = 0;
  for (const el of arr) {
    let sum = 0;
    for (let i = 0; i < String(el).length; i++) {
      sum += Number(String(el)[i]);
    }
    if (sum > maxSum || (sum === maxSum && el > maxNum)) {
      maxNum = el;
      maxSum = sum;
    }
  }
  return maxNum;
}

// 2차 답안 - 성공
// ! 모범답안은 계속해서 10으로 나누는 방법 선택
// ! 내 방법이 좀 더 직관적

function solution(arr) {
  let max = 0;
  let answer = [];
  for (let i = 0; i < arr.length; i++) {
    let tmp = 0;
    let num = String(arr[i]);
    for (let j = 0; j < num.length; j++) {
      tmp += Number(num[j]);
    }
    if (tmp >= max) {
      max = Number(tmp);
      answer.push(arr[i]);
    }
  }
  return answer.sort((a, b) => b - a)[0];
}

// 1차 답안 - 실패

let numSum = function (t) {
  let room = [];
  for (let i = 0; i < t.length; i++) {
    room.push(String(t[i]));
    room[i].split('');
    console.log(room[i]);
    for (let j = 0; j < t[i].toString().length; j++) {}
  }
  return room;
};
console.log(numSum(arr));
