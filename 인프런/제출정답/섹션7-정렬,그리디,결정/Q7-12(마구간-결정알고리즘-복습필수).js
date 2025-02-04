// 모범 답안
function count(stable, dist) {
  let cnt = 1,
    ep = stable[0];
  for (let i = 1; i < stable.length; i++) {
    if (stable[i] - ep >= dist) {
      cnt++;
      ep = stable[i];
    }
  }
  return cnt;
}
function solution(c, stable) {
  let answer;
  stable.sort((a, b) => a - b);
  let lt = 1;
  let rt = stable[stable.length - 1];
  while (lt <= rt) {
    let mid = parseInt((lt + rt) / 2);
    if (count(stable, mid) >= c) {
      answer = mid;
      lt = mid + 1;
    } else rt = mid - 1;
  }
  return answer;
}

let arr = [1, 2, 8, 4, 9];
console.log(solution(3, arr));

// 3차 - 답안 보고 수정한 풀이

function solution(horses, arr) {
  let sorted = arr.slice().sort();
  let lt = 1;
  let rt = Math.max(...arr);
  let mid = parseInt((rt + lt) / 2);
  let tmp = 0;
  let answer;

  // ! 일부 결정알고리즘은 포인터 두 개가 만나게 하는게 중요!
  while (lt <= rt && tmp < 100) {
    tmp++;
    mid = parseInt((rt + lt) / 2);
    console.info('!!!!!' + mid + '!!!!', rt, lt);
    if (able(mid, sorted, horses) > 0) {
      rt = mid - 1;
    } else if (able(mid, sorted, horses) <= 0) {
      answer = mid;
      lt = mid + 1;
    }
  }
  return answer;
}

function able(dis, arr, horses) {
  horses--;
  let last = arr[0];
  const n = arr.length;
  for (let i = 1; i < n; i++) {
    if (arr[i] - last >= dis) {
      horses--;
      last = arr[i];
    }
  }
  return horses;
}

// 2차 풀이 - 실패

// ! 알고리즘은 비슷하나 일부 비효율 적이고 답안 다름
function solution(horses, arr) {
  let sorted = arr.slice().sort();
  let lt = 1;
  let rt = Math.max(...arr);
  let mid = parseInt((rt + lt) / 2);
  let tmp = 0;

  while (lt <= rt && tmp < 100) {
    tmp++;
    mid = parseInt((rt + lt) / 2);
    console.info('!!!!!' + mid + '!!!!');
    if (able(mid, sorted, horses) > 0) {
      rt = mid - 1;
    } else if (able(mid, sorted, horses) <= 0) {
      lt = mid + 1;
    } else {
      return mid;
    }
  }
  return answer;
}

function able(dis, arr, horses) {
  horses--;
  let last = arr[0];
  const n = arr.length;
  for (let i = 1; i < n; i++) {
    if (arr[i] - last >= dis) {
      horses--;
      last = arr[i];
    }
  }
  return horses;
}

// 1차 풀이 - 실패
