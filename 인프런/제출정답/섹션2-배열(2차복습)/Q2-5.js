//모범답안
function solution(arr) {
  let n = arr.length;
  // ! 모두 1등으로 설정
  let answer = Array.from({ length: n }, () => 1);
  for (let i = 0; i < n; i++) {
    for (let j = 0; j < n; j++) {
      // ! 본인 포함 검색 => 초과 값 나올 때마다 본인 등수 +1
      if (arr[j] > arr[i]) answer[i]++;
    }
  }
  return answer;
}

// 4차 - 정답
function solution(arr) {
  const sortedArr = arr.slice().sort((a, b) => b - a);
  return arr.map((el) => sortedArr.indexOf(el) + 1);
}

// 3차 답안 - 정답
// ! 정렬 후 해당 값의 가장 빠른 인덱스를 구함
// ! 같은 값 없을 시 - 자신의 등수
// ! 같은 값 있을 시 - 공동 등수 중 가장 높은 값 취함
function solution(arr) {
  let answer = [];
  let arr2 = [...arr];
  arr2.sort((a, b) => b - a);
  for (let x of arr) {
    answer.push(arr2.indexOf(x) + 1);
  }

  return answer;
}
console.log(solution([87, 89, 92, 100, 76])); // 4,3,2,1,5
console.log(solution([90, 90, 90, 100, 100])); // 3,3,3,1,1

// 2차 답안 - 못 풀어서 해설보고 작성
let sorted = function (t) {
  let result = [1, 1, 1, 1, 1];
  // let n=arr.length;
  // let answer=Array.from({length:n}, ()=>1);
  // 위와 같이 Array.from 함수를 쓰고 길이와 값을 설정해주면 배열 생성
  for (let i = 0; i < t.length; i++) {
    for (let j = 0; j < t.length; j++) {
      if (t[j] > t[i]) result[i] += 1;
      // a += 1 은 a++ 로 대체 가능
    }
  }
  return result;
};

// 1차 답안
// const arr = [87, 92, 92, 100, 76];
// let sorted = function (t) {
//   let result = [1, 1, 1, 1, 1];
//   for (i = 0; i < t.length; i++) {
//     for (j = 0; j < t.length; j++) {
//       if (t[j] > t[i]) {
//         result[i]++;
//         console.log(i, j, result[i]);
//       }
//     }
//   }
//   return result;
// };
// console.log(sorted(arr));
// var arr = [87, 89, 92, 100, 76];
// var sorted = arr.slice().sort(function (a, b) {
//   return b - a;
// });
// var ranks = arr.map(function (v) {
//   return sorted.indexOf(v) + 1;
// });
// console.log(ranks);
