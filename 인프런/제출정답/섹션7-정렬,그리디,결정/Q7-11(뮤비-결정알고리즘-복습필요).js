// 모범 답안
function count(songs, capacity) {
  let cnt = 1,
    sum = 0;
  for (let x of songs) {
    if (sum + x > capacity) {
      cnt++;
      sum = x;
    } else sum += x;
  }
  return cnt;
}

function solution(m, songs) {
  let answer;
  let lt = Math.max(...songs);
  let rt = songs.reduce((a, b) => a + b, 0);
  while (lt <= rt) {
    let mid = parseInt((lt + rt) / 2);
    if (count(songs, mid) <= m) {
      answer = mid;
      rt = mid - 1;
    } else {
      lt = mid + 1;
    }
  }
  return answer;
}

// 3차 - 정답
// ! 정답은 맞았으나 결정 알고리즘 최적화 실패
function solution(target, arr) {
  const sum = arr.reduce((acc, el) => acc + el, 0);
  const avg = parseInt(sum / target);
  let limit = avg - 1;
  let tmp = 0;
  const n = arr.length;
  let a = 100000;
  while (a !== target && tmp < 100) {
    a = 1;
    tmp++;
    limit++;
    let s = 0;
    for (let i = 0; i < n; i++) {
      s += arr[i];
      if (s > limit) {
        a++;
        s = arr[i];
      }
    }
  }
  return limit;
}

// 2차 풀이  - 실패
function solution(target, arr) {
  let answer = Number.MAX_SAFE_INTEGER;
  let n = arr.length;
  let lt = 0;
  let rt = n - 1;
  let cnt = 0;

  while (lt + 1 < rt && cnt < 30) {
    cnt++;
    let head = arr.slice(0, lt + 1);
    let mid = arr.slice(lt + 1, rt);
    let tail = arr.slice(rt);
    let len = Math.max(
      head.reduce((a, b) => a + b),
      mid.reduce((a, b) => a + b),
      tail.reduce((a, b) => a + b)
    );
    answer = Math.min(answer, len);

    if (cnt % 2 === 1) lt++;
    else rt--;
    console.log('head', head, 'mid', mid, 'tail', tail, 'len', len, 'cnt', cnt);
  }
  return answer;
}

let arr = [1, 2, 3, 4, 5, 6, 7, 8, 9];
console.log(solution(3, arr));

// 1차 풀이 - 실패
function solution(num, arr) {
  let cap = parseInt(
    arr.reduce((x, y) => {
      return x + y;
    }) / num
  );
  console.log(cap);
  let sum = 0;
  for (let x of arr) {
  }
}

let arr = [1, 2, 3, 4, 5, 6, 7, 8, 9];
console.log(solution(3, arr));
