// 모범 답안
function solution(day, arr) {
  let answer = 0;
  for (let x of arr) {
    if (x % 10 == day) answer++;
  }

  return answer;
}

arr = [25, 23, 11, 47, 53, 17, 33];

// 5차 - 정답
function solution(date, arr) {
  return arr.filter((el) => String(el)[1] === String(date)).length;
}

// 4차 답안 - 고차함수 사용을 위해 작성

function solution(date, arr) {
  let answer = 0;
  // ! 일의 자리 수는 보통 10으로 나눈 나머지를 활용
  arr.forEach((x) => {
    if (String(x)[1] === String(date)) answer++;
  });
  return answer;
}

// 3차 답안 - 정답

function solution(date, arr) {
  let answer = 0;
  for (let x of arr) {
    if (String(x)[1] === String(date)) answer++;
  }
  return answer;
}

console.log(solution(3, [25, 23, 11, 47, 53, 17, 33])); // 3
console.log(solution(0, [12, 20, 54, 30, 87, 91, 30])); // 3

// 2차 답안

const arr = [25, 23, 11, 47, 53, 17, 33];

let noDriving = function (day, carNum) {
  let count = 0;
  for (x of carNum) {
    if (day === x % 10) count++;
    // 비교 시 'x % 10' 부분이 앞에 오는 것이 더 사람의 사고흐름에 자연스러울듯
  }
  return count;
};

console.log(noDriving(7, arr));

// 1차 답안
// var a = 0;
// var b = [13, 33, 14, 15];
// var d = 0;
// var e = function c (a, b) {
//     for (i = 0; i < length.b; i++) {
//     if (b[i].slice(-1) === a) {
//         } d = d + 1
//         return d
//         };
//     console.log(d);
// };
