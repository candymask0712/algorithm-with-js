// function solution(arr, k) {
//   const n = arr.length;
//   // 문제에 따라 답의 형식 수정
//   const answer = [];
//   // 최초의 합계는 0번째 인덱스의 요소로 한다
//   let sum = arr[0];
//   let lp = 0,
//     rp = 0;

//   // 오른쪽 포인터가 배열의 길이를 초과하면 끝난다
//   let cnt = 0;
//   while ((rp < n || lp < n) && cnt < 1000) {
//     console.info(lp, rp, sum);
//     cnt++;
//     // 경우1. sum < k
//     if (sum <= k) {
//       // 오른쪽 포인터를 움직여 새로운 요소를 더해줌
//       if (rp < n) {
//         answer.push(sum);
//         sum += arr[rp + 1];
//       }
//       rp++;
//       // 경우2. sum > k
//     } else {
//       // 왼쪽 포인터를 움직여 기존 요소를 빼줌
//       lp++;
//       rp = lp;
//       sum = arr[lp];
//       // 경우3. sum === k
//     }
//   }
//   console.info(answer);
//   return answer.length;
// }

// ! 나의 풀이
// function solution(arr, k) {
//   let answer = 0;
//   const n = arr.length;

//   for (let lp = 0; lp < n; lp++) {
//     let sum = arr[lp];
//     let rp = 0;
//     while (sum <= k) {
//       console.log(lp, rp, sum, answer);
//       answer++;
//       sum += arr[++rp];
//     }
//   }

//   return answer;
// }

// ! 인프런 해설
// // ! lt 부터 rt 까지의 부분수열을 구하는 코드
// function solution(arr, m) {
//   let answer = 0,
//     sum = 0,
//     lt = 0;

//   // ! 루프가 rt=0 부터 시작해서 돈다
//   for (let rt = 0; rt < arr.length; rt++) {
//     // ! 먼저 rt번째 원소를 더한다
//     sum += arr[rt];
//     // ! 만약 합계가 기준보다 크다면
//     // ! 계속해서 lt 포인터를 이동하고 lt만큼 빼준다
//     while (sum > m) {
//       sum -= arr[lt++];
//     }
//     // ! rt +1 의 숫자만큼 연속부분수열 만들수 있다
//     // ! 그러나 lt 만큼 이동했다면 빼주어야 함
//     answer += rt - lt + 1;
//   }
//   return answer;
// }

// console.info(solution([1, 3, 1, 2, 3], 5)); // 10
// console.info(solution([1, 1, 1, 1, 1], 3)); // 12
// console.info(solution([5, 5, 5, 5, 5], 5)); // 5
// console.info(solution([1, 2, 3, 4, 5], 5)); // 7
// console.info(solution([1, 2, 3, 4, 5], 15)); // 15
// console.info(solution([1], 1)); // 1
// console.info(solution([1000], 999)); // 0
// console.info(solution([1, 2, 3, 4, 5, 6, 7, 8, 9, 10], 10)); // 17
// console.info(solution([1, 1, 1, 1, 1, 1, 1, 1, 1, 1], 5)); // 40

function solution(arr1, arr2) {
  arr1.sort((a, b) => a - b);
  arr2.sort((a, b) => a - b);
  let p1 = 0;
  let p2 = 0;
  const n = arr1.length;
  const m = arr2.length;
  let answer = [];
  let tmp = 0;

  while (p1 < n && p2 < m && tmp < 100) {
    const e1 = arr1[p1];
    const e2 = arr2[p2];
    if (e1 === e2) {
      answer.push(e1);
      if (p1 < n) p1++;
      if (p2 < m) p2++;
    }

    if (e1 < e2) p1++;
    else p2++;
  }
  return answer;
}
console.info(solution([1, 3, 9, 5, 2], [3, 2, 5, 7, 8]));

function solution(arr1, arr2) {
  let p1 = 0;
  let p2 = 0;
  const n = arr1.length;
  const m = arr2.length;
  let answer = [];
  let tmp = 0;

  while (p1 < n && p2 < m && tmp < 100) {
    tmp++;
    const e1 = arr1[p1];
    const e2 = arr2[p2];
    if (e1 === e2) {
      answer.push(e1);
      if (p1 < n) p1++;
      if (p2 < m) p2++;
    }

    if (e1 < e2) p1++;
    else p2++;
  }

  return answer;
}
console.info(solution([1, 3, 9, 5, 2], [3, 2, 5, 7, 8]));
