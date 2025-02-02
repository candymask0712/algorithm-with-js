// 모범 답안
function solution(arr) {
  let answer = 0;
  let n = arr.length;
  let dx = [-1, 0, 1, 0];
  let dy = [0, 1, 0, -1];
  for (let i = 0; i < n; i++) {
    for (let j = 0; j < n; j++) {
      let flag = 1;
      for (let k = 0; k < 4; k++) {
        let nx = i + dx[k];
        let ny = j + dy[k];
        if (
          nx >= 0 &&
          nx < n &&
          ny >= 0 &&
          ny < n &&
          arr[nx][ny] >= arr[i][j]
        ) {
          flag = 0;
          break;
        }
      }
      if (flag) answer++;
    }
  }
  return answer;
}

// 4차 - 정답
function solution(arr) {
  let answer = 0;
  const n = arr.length;
  for (let i = 1; i < n - 1; i++) {
    for (let j = 1; j < n - 1; j++) {
      const upV = arr[i - 1][j];
      const downV = arr[i + 1][j];
      const righthV = arr[i][j + 1];
      const leftV = arr[i][j - 1];
      const centerV = arr[i][j];
      if (Math.max(upV, downV, righthV, leftV, centerV) === centerV) answer++;
    }
  }
  return answer;
}

// 3차 답안 - 정답

function solution(arr) {
  let answer = 0;
  let n = arr.length - 1;
  for (let i = 1; i < n; i++) {
    for (let j = 1; j < n; j++) {
      if (
        arr[i][j] > arr[i - 1][j] &&
        arr[i][j] > arr[i][j + 1] &&
        arr[i][j] > arr[i + 1][j] &&
        arr[i][j] > arr[i][j - 1]
      )
        answer++;
    }
  }

  return answer;
}

// 2차 답안 - 모범 답안의 경우 주위에 실제로는 0으로 둘어쌓여 있지는 않다고 가정하여 다름
let mount = function (t) {
  let count = 0;
  for (let i = 1; i < t.length - 1; i++) {
    for (let j = 1; j < t.length - 1; j++) {
      let n = Math.max(t[i - 1][j], t[i][j - 1], t[i + 1][j], t[i][j + 1]);
      if (t[i][j] > n) count++;
    }
  }
  return count;
};
let arr = [
  [0, 0, 0, 0, 0, 0, 0],
  [0, 5, 3, 7, 2, 3, 0],
  [0, 3, 7, 1, 6, 1, 0],
  [0, 7, 2, 5, 3, 4, 0],
  [0, 4, 3, 6, 4, 1, 0],
  [0, 8, 7, 3, 5, 2, 0],
  [0, 0, 0, 0, 0, 0, 0]
];
console.log(mount(arr));

// 1차 답안
// let arr = [ [0,0,0,0,0,0,0],
//             [0,5,3,7,2,3,0],
//             [0,3,7,1,6,1,0],
//             [0,7,2,5,3,4,0],
//             [0,4,3,6,4,1,0],
//             [0,8,7,3,5,2,0],
//             [0,0,0,0,0,0,0]];
// let mount = function () {
//     let count = 0;
//     for (let i=1; i<arr.length-1; i++) {
//         for (let j=1; j<arr.length-1; j++) {
//             // console.log(i,j,arr[i][j]);
//             let max = Math.max(arr[i][j], arr[i+1][j], arr[i][j+1], arr[i][j-1], arr[i-1][j]);
//             if (arr[i][j] === max) {
//                 count++;
//             }
//             console.log(arr[i][j], arr[i+1][j], arr[i][j+1], arr[i][j-1], arr[i-1][j]);
//         }
//     }
//     return count;
// };
// console.log(mount(arr));
