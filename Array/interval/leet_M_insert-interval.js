// 나의 풀이
var insert = function (intervals, newInterval) {
  // ! 입력값이 0인경우 처음에 고려하지 않음
  if (intervals.length === 0) return [newInterval];

  for (let i = 0; i < intervals.length; i++) {
    const [nextStart, nextEnd] = intervals[i];
    const [newStart, newEnd] = newInterval;
    if (nextStart >= newStart) {
      intervals.splice(i, 0, newInterval);
      break;
    }
    if (i === intervals.length - 1) {
      intervals.push(newInterval);
    }
  }

  const answer = [];
  const n = intervals.length;
  let curInterval = intervals[0];

  for (let i = 1; i < n; i++) {
    const nextInterval = intervals[i];
    const [curStart, curEnd] = curInterval;
    const [nextStart, nextEnd] = nextInterval;
    if (curEnd >= nextStart) {
      curInterval = [curStart, Math.max(curEnd, nextEnd)];
    } else {
      answer.push(curInterval);
      curInterval = nextInterval;
    }
    if (i === n - 1) answer.push(curInterval);
  }
  return answer;
};

// 모범 풀이
// ! 겹치는 간격만 따로 계산해서 최적화
function insert(intervals, newInterval) {
  const result = [];
  let i = 0;
  const n = intervals.length;

  // 1. 새 간격보다 끝점이 작은 간격들을 결과에 추가
  while (i < n && intervals[i][1] < newInterval[0]) {
    result.push(intervals[i]);
    i++;
  }

  // 2. 겹치는 간격들을 병합
  while (i < n && intervals[i][0] <= newInterval[1]) {
    newInterval[0] = Math.min(newInterval[0], intervals[i][0]);
    newInterval[1] = Math.max(newInterval[1], intervals[i][1]);
    i++;
  }
  result.push(newInterval);

  // 3. 남은 간격들을 결과에 추가
  while (i < n) {
    result.push(intervals[i]);
    i++;
  }

  return result;
}
