// * 모범답안

function solution(arr) {
  let answer = 0;
  let dy = Array.from({ length: arr.length }, () => 0);
  dy[0] = 1;
  for (let i = 1; i < arr.length; i++) {
    let max = 0;
    for (let j = i - 1; j >= 0; j--) {
      console.log(dy);
      if (arr[j] < arr[i] && dy[j] > max) {
        max = dy[j];
      }
    }
    dy[i] = max + 1;
    answer = Math.max(answer, dy[i]);
  }
  return answer;
}

// 5차 - 정답
const solution = (arr) => {
  const n = arr.length;
  let ch = Array.from({ length: n + 1 }, () => 1);
  let maxNum = 0;
  let max = 1;
  for (let i = 2; i < n; i++) {
    if (arr[i] > max) {
      ch[i] = ch[i - 1] + 1;
      maxNum = arr[i];
      max++;
    }
  }
  return Math.max(...ch);
};

// * 4차 풀이 - 정답
const solution = (arr) => {
  let answer = 0;
  let n = arr.length;
  console.log(n);
  let ch = Array.from({ length: n }, () => 0);
  ch[0] = 1;
  for (let i = 1; i < n; i++) {
    for (let j = 0; j < arr[i]; j++) {
      if (arr[j] < arr[i]) ch[i] = Math.max(ch[j] + 1, ch[i]);
      console.log('i', i, 'j', j, 'ch', JSON.parse(JSON.stringify(ch)));
    }
  }
  return Math.max(...ch);
};
let arr = [5, 3, 7, 8, 6, 2, 9, 4];
console.log(solution(arr));

// * 3차 풀이
const solution = (arr) => {
  let n = arr.length;
  let ch = Array.from({ length: n }, () => 0);

  ch[0] = 1;
  for (let i = 1; i < n; i++) {
    let tmp = 1;
    for (let j = 0; j < i; j++) {
      console.log('i', i, 'j', j, 'ch', ch, 'arr[j]', arr[j], 'arr[i]', arr[i]);
      console.log('tmp', tmp, 'ch[j]', ch[j]);
      if (arr[i] > arr[j]) {
        tmp = Math.max(tmp, ch[j] + 1);
      }
      ch[i] = tmp;
    }
  }
  return Math.max(...ch);
};
let arr = [5, 3, 7, 8, 6, 2, 9, 4];
console.log(solution(arr));

// * 2차 풀이 - 풀이와는 약간 다르나 핵심구조 동일
const solution = (arr) => {
  let n = arr.length;
  let ch = Array.from({ length: n }, () => 1);

  for (let i = 2; i <= arr.length; i++) {
    for (let j = 0; j < i; j++) {
      if (arr[i] >= arr[j]) ch[i] = Math.max(ch[j] + 1, ch[i]);
    }
  }
  return Math.max(...ch);
};

// * 1차 풀이 - 설명 듣고 풀이
const solution = (arr) => {
  let n = arr.length;
  let ch = Array.from({ length: n }, () => 0);
  ch[0] = 1;
  ch[1] = 1;
  for (let i = 2; i < n; i++) {
    let tmp = [];
    for (let j = 0; j < i; j++) {
      // ! 처음에 중간조건를 n으로 해서 오류
      if (arr[i] > arr[j]) tmp.push(arr[j]);
    }
    if (tmp.length > 0) ch[i] = ch[arr.indexOf(Math.max(...tmp))] + 1;
    // ! 처음에 if 조건이 없어 계속 오류
    // ! indexOf를 쓸 때는 배열이 비거나 하는등 -1 값이 나오지 않는지 고려
  }
  return Math.max(...ch);
};
let arr = [5, 3, 7, 8, 6, 2, 9, 4];
console.log(solution(arr));
