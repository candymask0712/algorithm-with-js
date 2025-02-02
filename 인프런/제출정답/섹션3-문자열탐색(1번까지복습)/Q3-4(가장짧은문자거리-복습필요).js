// 모범 답안
function solution(s, t) {
  let answer = [];
  let p = 1000;
  for (let x of s) {
    if (x === t) {
      p = 0;
      answer.push(p);
    } else {
      p++;
      answer.push(p);
    }
  }
  p = 1000;
  for (let i = s.length - 1; i >= 0; i--) {
    if (s[i] === t) p = 0;
    else {
      p++;
      answer[i] = Math.min(answer[i], p);
    }
  }
  return answer;
}

// 5차 - 재풀이
function solution(str, s) {
  const n = str.length;
  const answer = Array.from({ length: n }, () => Number.MAX_SAFE_INTEGER);
  let p = 1000;
  for (let i = 0; i < n; i++) {
    if (str[i] === s) p = 0;
    answer[i] = Math.min(p, answer[i]);
    p++;
  }
  p = 1000;
  for (let i = n - 1; i >= 0; i--) {
    if (str[i] === s) p = 0;
    answer[i] = Math.min(answer[i], p);
    p++;
  }
  return answer;
}

// 5차 - 성공
// ! 시간  복잡도 높이 재풀이 진행
function solution(str, s) {
  const n = str.length;
  const answer = Array.from({ length: n }, () => Number.MAX_SAFE_INTEGER);
  for (let i = 0; i < n; i++) {
    let lp = i;
    let rp = i;
    for (let j = 0; j < n; j++) {
      if ((lp >= 0 && str[lp] === s) || (rp < n && str[rp] === s)) {
        answer[i] = Math.min(answer[i], j);
      }
      lp--;
      rp++;
    }
  }
}

// 4차 풀이 - 성공 (모범답안 보고 리팩토링)

function solution(str, s) {
  let answer = [];
  let p = 1000;
  let n = str.length;
  for (let x of str) {
    x === s ? (p = 0) : p++;
    answer.push(p);
  }
  p = 1000;
  for (let i = n - 1; i >= 0; i--) {
    str[i] === s ? (p = 0) : p++;
    answer[i] = Math.min(p, answer[i]);
  }
  return answer;
}

// 3차 풀이 - 성공 (강의에서 개념 듣고 풀이)
// ! 포문을 두번 사용하나 이중포문 보다는 시간 복잡도 낮음
function solution(str, s) {
  // ! 모범답안은 배열화 없이 for of 이용해 탐색
  let arr = str.split('');
  let n = arr.length;
  let answer = [];
  // ! 모범 답안은 별로 ch 선언 없이 answer 활용
  let ch = Array.from({ length: n }, () => null);
  let p = 1000;
  for (let i = 0; i < n; i++) {
    arr[i] === s ? (p = 0) : p++;
    ch[i] = p;
  }
  p = 1000;
  for (let i = n - 1; i >= 0; i--) {
    arr[i] === s ? (p = 0) : p++;
    ch[i] = Math.min(p, ch[i]);
  }
  return answer;
}

// console.log(solution('teachermode', 'e')); // [1, 0, 1, 2, 1, 0, 1, 2, 2, 1, 0]
console.log(solution('abcde', 'a')); // [0, 1, 2, 3, 4]

// 2차 풀이 - 성공
// ! 시간복잡도가(O(n^2)이기 때문에 아쉬운 답안)
function solution(str, s) {
  let arr = str.split('');
  let answer = [];
  for (let i = 0; i < arr.length; i++) {
    if (arr[i] === s) answer.push(0);
    else {
      for (let j = 1; j < arr.length; j++) {
        if (arr[i - j] === s || arr[i + j] === s) {
          answer.push(j);
          break;
        }
      }
    }
  }

  return answer;
}

console.log(solution('teachermode', 'e')); // [1, 0, 1, 2, 1, 0, 1, 2, 2, 1, 0]
console.log(solution('abcde', 'a')); // [0, 1, 2, 3, 4]

// 1차풀이 - 실패
