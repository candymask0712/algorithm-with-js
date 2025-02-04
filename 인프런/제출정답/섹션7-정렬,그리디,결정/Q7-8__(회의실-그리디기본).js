// * 모범 답안

function solution(meeting) {
  let answer = 0;
  meeting.sort((a, b) => {
    if (a[1] === b[1]) return a[0] - b[0];
    else return a[1] - b[1];
  });
  let et = 0;
  for (let x of meeting) {
    if (x[0] >= et) {
      answer++;
      et = x[1];
    }
  }
  return answer;
}

// 5차 - 정답
const solution = (arr) => {
  const sortedArr = arr.slice().sort((a, b) => {
    if (a[1] === b[1]) return a[0] - b[0];
    else return a[1] - b[1];
  });
  console.info(sortedArr);
  let lastMeetingEnd = 0;
  return sortedArr.reduce((meetingNum, el, i) => {
    if (el[0] >= lastMeetingEnd) {
      lastMeetingEnd = el[1];
      return meetingNum + 1;
    } else {
      return meetingNum;
    }
  }, 0);
};

// * 4차 풀이 - 영상보고 힌트 얻어 풀이

const solution = (arr) => {
  // ! 끝나는 시간 외에도 시작 시간에 대해서도 정렬 필요
  // ! 그래야 모수가 큰 케이스에 대해 대응 가능
  arr.sort((a, b) => a[1] - b[1]);

  // ! 실제 배열 대신에 가능한 요소가 등장할 때마다 ++ 로 처리하면 간단
  let answer = [arr[0]];
  // ! 어쩔 수 없이 0번째 요소도 탐색해야 하므로 last는 0으로 지정하는 것이 간단
  let last = arr[0];
  for (const el of arr) {
    if (el[0] >= last[1]) {
      answer.push(el);
      last = el;
    }
  }
  return answer.length;
};

// * 3차 풀이 - 영상보고 풀이
const solution = (arr) => {
  let cnt = 0;
  arr = arr.sort((a, b) => {
    if (a[1] === b[1]) return a[0] - b[0];
    else return a[1] - b[1];
  });
  let et = 0;
  for (let el of arr) {
    if (et <= el[0]) {
      cnt++;
      et = el[1];
    }
    console.log('et', et, 'el', el, 'cnt', cnt);
  }
  return cnt;
};
let arr = [
  [1, 4],
  [2, 3],
  [3, 5],
  [4, 6],
  [5, 7]
];
console.log(solution(arr));

let arr2 = [
  [3, 3],
  [1, 3],
  [2, 3]
];
console.log(solution(arr2));

// 2차 풀이  - 영상보고 실습

function solution(arr) {
  arr.sort((a, b) => {
    if (a[1] === b[1]) return a[0] - b[0];
    else return a[1] - b[1];
  });
  let edt = 0;
  let answer = 0;
  for (let x of arr) {
    if (x[0] >= edt) {
      edt = x[1];
      answer++;
    }
  }
  return answer;
}

// 1차 풀이 - 실패
// 최대 회의실 개수를 위해서는 '끝나는 시간'이 중요
// '시작시간 기준' - 회의가 길어질 경우 의미 없음
// '짧은시간 기준' - 짧은 시간이라도 다른 회의 시간에 걸쳐 있을 경우 의미 없음

function solution(arr) {
  let answer = arr;
  arr.sort((a, b) => {
    if (a[0] === b[0]) return a[1] - b[1];
    else return a[0] - b[0];
  });

  return answer;
}
