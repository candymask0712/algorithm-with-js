// 모범 답안
function solution(times) {
  let answer = Number.MIN_SAFE_INTEGER;
  let T_line = [];
  for (let x of times) {
    T_line.push([x[0], 's']);
    T_line.push([x[1], 'e']);
  }
  T_line.sort((a, b) => {
    if (a[0] === b[0]) return a[1].charCodeAt() - b[1].charCodeAt();
    else return a[0] - b[0];
  });
  let cnt = 0;
  for (let x of T_line) {
    if (x[1] === 's') cnt++;
    else cnt--;
    answer = Math.max(answer, cnt);
  }
  return answer;
}

let arr = [
  [14, 18],
  [12, 15],
  [15, 20],
  [20, 30],
  [5, 14]
];
console.log(solution(arr));

// 4차 - 정답
const solution = (arr) => {
  const t = Array.from({ length: 72 }, () => 0);
  arr.forEach((el, i) => {
    for (let i = el[0]; i < el[1]; i++) {
      t[i] += 1;
    }
  });
  return Math.max(...t);
};

// 3차 풀이 - 영상 보고 힌트 얻어 성공
const solution = (arr) => {
  let answer = 0;
  let max = 0;
  let list = [];
  arr.forEach((el) => {
    const [start, end] = el;
    list.push([start, 's']);
    list.push([end, 'e']);
  });
  list.sort((a, b) => {
    if (a[0] === b[0]) return a[1].localeCompare(b[1]);
    else return a[0] - b[0];
  });
  list.forEach((el) => {
    if (el[1] === 's') answer++;
    else if (el[1] === 'e') answer--;
    if (answer > max) max = answer;
  });
  return max;
};

// 2차 풀이  - 성공 but 풀이방법 다름
const solution = (arr) => {
  let max = Math.max(...arr.flat());
  let ch = Array.from({ length: max + 1 }, () => 0);
  console.log(ch);
  for (let i = 0; i < arr.length; i++) {
    for (let j = arr[i][0]; j < arr[i][1]; j++) {
      ch[j] += 1;
      // ! a += a + 1 으로 덧셈 중복 적용하는 실수 주의
      console.log('i', i, 'j', j, 'arr[i]', arr[i], 'ch', ch);
    }
  }
  return Math.max(...ch);
};

let arr = [
  [14, 18],
  [12, 15],
  [15, 20],
  [20, 30],
  [5, 14]
];
console.log(solution(arr));

// 1차 풀이
function solution(times) {
  let answer = times;
  times.sort((a, b) => {
    if (a[0] === b[0]) return a[1] - b[1];
    else return a[0] - b[0];
  });
  let count = 0;
  let max = 0;
  for (let i = 0; i < arr.length; i++) {
    count = 0;
    for (let j = 0; j < arr.length; j++) {
      if (arr[i][0] >= arr[j][0] && arr[i][0] < arr[j][1]) count++;
    }
    if (count > max) max = count;
    console.log('count', count, 'max', max);
  }
  return max;
}

let arr = [
  [14, 18],
  [12, 15],
  [15, 20],
  [20, 30],
  [5, 14]
];
console.log(solution(arr));
