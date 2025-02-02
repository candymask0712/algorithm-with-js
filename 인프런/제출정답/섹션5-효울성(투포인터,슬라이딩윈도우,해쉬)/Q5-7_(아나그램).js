// * 문제

// * 모범 답안
function solution(str1, str2) {
  let answer = 'YES';
  let sH = new Map();
  for (let x of str1) {
    if (sH.has(x)) sH.set(x, sH.get(x) + 1);
    else sH.set(x, 1);
  }
  for (let x of str2) {
    if (!sH.has(x) || sH.get(x) == 0) return 'NO';
    sH.set(x, sH.get(x) - 1);
  }
  return answer;
}

let a = 'AbaAeCe';
let b = 'baeeACA';
console.log(solution(a, b));

// * 모범 답안 분석
function solution(str1, str2) {
  // ! 기본 답안 '예'로 설정 후 탐색 시작
  let answer = 'YES';
  let sH = new Map();

  // ! 해쉬맵을 한번 선언 => str1 탐색 때는 넣고 / str2 탐색 때는 빼면서 비교
  for (let x of str1) {
    if (sH.has(x)) sH.set(x, sH.get(x) + 1);
    else sH.set(x, 1);
  }
  for (let x of str2) {
    if (!sH.has(x) || sH.get(x) == 0) return 'NO';
    sH.set(x, sH.get(x) - 1);
  }
  return answer;
}

// 3차 - 정답
const solution = (str1, str2) => {
  const h1 = new Map();
  const h2 = new Map();
  const n = str1.length;
  for (let i = 0; i < n; i++) {
    if (h1.has(str1[i])) h1.set(str1[i], h1.get(str1[i]) + 1);
    else h1.set(str1[i], 1);

    if (h2.has(str2[i])) h2.set(str2[i], h2.get(str2[i]) + 1);
    else h2.set(str2[i], 1);
  }

  for (let [key, val] of h1) {
    if (!h2.has(key)) return 'NO';
    else {
      if (val !== h2.get(key)) return 'NO';
    }
  }
  return 'YES';
};

// * 2차 답안 - 풀이 성공

const solution = (str1, str2) => {
  let h1 = new Map();
  let h2 = new Map();
  let n = str1.length;
  let answer = 'YES';

  for (let i = 0; i < n; i++) {
    if (h1.has(str1[i])) h1.set(str1[i], h1.get(str1[i]) + 1);
    else h1.set(str1[i], 1);
    if (h2.has(str2[i])) h2.set(str2[i], h2.get(str2[i]) + 1);
    else h2.set(str2[i], 1);
  }
  console.log(h1);
  console.log(h2);
  let arr = h1.keys();
  for (let x of arr) {
    if (!h2.has(x) || h2.get(x) !== h1.get(x)) return 'NO';
    // ! 처음에 조건을 && 하여 정답 도출 실패
    // ! T/F에 현혹되지 말고 둘 중 한 조건일때만 이라도 코드 실행 원하면 ||로 설정해야함
  }
  return answer;
};

// let str1 = "AbaAeCe"
// let str2 = "baeeACA"
// console.log(solution(str1,str2)) // YES

let str1 = 'abaCC';
let str2 = 'Caaab';
console.log(solution(str1, str2)); // NO

// * 1차 답안 - 답안 보고 작성

// function solution(str1, str2){
//     let answer="YES";
//     let sH = new Map();
//     for(let x of str1){
//         if(sH.has(x)) sH.set(x, sH.get(x)+1);
//         else sH.set(x, 1);
//     }
//     for(let x of str2){
//         if(!sH.has(x) || sH.get(x)==0) return "NO";
//         sH.set(x, sH.get(x)-1);
//     }
//     return answer;
// }

// let a="AbaAeCe";
// let b="baeeACA";
// console.log(solution(a, b));
