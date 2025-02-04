// * 문제

// * 모범 답안

function solution(n, k) {
  let answer;
  let queue = Array.from({ length: n }, (v, i) => i + 1);
  console.log('original-queue', queue);
  while (queue.length) {
    // ! k-1 만큼 큐의 요소들을 회전시킴 (뺀 요소를 다시 넣음)
    for (let i = 1; i < k; i++) queue.push(queue.shift());
    // ! 맨 앞 요소를 뺌
    queue.shift();
    console.log('queue', queue);
    // ! 요소의 길이가 1이 되면 답에 넣고 종결
    if (queue.length === 1) answer = queue.shift();
  }
  return answer;
}

console.log(solution(8, 3));

// * 모범 답안 분석

// * 3차 - 성공
const solution = (n, t) => {
  const arr = [];
  for (let i = 0; i < n; i++) {
    arr.push(i + 1);
  }

  let index = -1;
  let cnt = 0;

  while (arr.length > 1) {
    cnt++;
    index++;
    index = index % 8;
    if (cnt === 3) {
      arr.splice(index, 1);
      cnt = 1;
    }
  }
  return arr[0];
};

// * 2차 답안 - 성공

const solution = (n, t) => {
  let q = [];
  for (let i = 1; i <= n; i++) q.push(i);
  console.log(q);
  let p = 0;
  for (let i = 0; i < n - 1; i++) {
    p = (p + (t - 1)) % q.length;
    let v = q.splice(p, 1);
    console.log('p', p, 'q', q, 'v', v);
  }
  return q[0];
};

console.log(solution(8, 3));

// * 1차 답안 - 답안 분실
