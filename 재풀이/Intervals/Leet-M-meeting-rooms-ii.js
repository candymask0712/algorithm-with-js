// * 문제 링크

// * 3차 풀이
//? 시간복잡도: O()
//? 공간복잡도: O()

// * 2차 풀이 - (26.01.04) - 답보고 풀이
//? 시간복잡도: O(nlogn) (n = intervals.length)
//? 공간복잡도: O(n)
var minMeetingRooms = function (intervals) {
  let answer = 0;
  const starts = [];
  const ends = [];
  for (const [start, end] of intervals) {
    starts.push(start);
    ends.push(end);
  }

  starts.sort((a, b) => a - b);
  ends.sort((a, b) => a - b);

  let endP = 0;
  let count = 0;

  // ! 더 간단한게 풀이 가능
  for (let startP = 0; startP < starts.length; startP++) {
    count++;
    while (ends[endP] <= starts[startP]) {
      endP++;
      count--;
    }
    answer = Math.max(answer, count);
  }
  return answer;
};

// * 1차 풀이 - 실패
//? 시간복잡도: O()
//? 공간복잡도: O()
var minMeetingRooms = function (intervals) {
  intervals.sort((a, b) => a[1] - b[1]);
  let answer = 0;
  const endTimes = [];
  let count = 0;
  for (let i = 0; i < intervals.length; i++) {
    const [st, ed] = intervals[i];
    endTimes.push(ed);
    count++;
    for (let j = 0; j < endTimes.length; j++) {
      if (endTimes[j] <= st) count--;
    }
    answer = Math.max(answer, count);
  }

  return answer;
};

// * 참고 풀이
//? 시간복잡도: O(nlogn) (n = intervals.length)
//? 공간복잡도: O(n)

var minMeetingRooms = function (intervals) {
  let answer = 0;
  const starts = [];
  const ends = [];
  for (const [start, end] of intervals) {
    starts.push(start);
    ends.push(end);
  }

  starts.sort((a, b) => a - b);
  ends.sort((a, b) => a - b);

  let endP = 0;

  for (let i = 0; i < intervals.length; i++) {
    if (starts[i] >= ends[endP]) {
      endP++; // 방 1개 반환(재사용)
    } else {
      answer++; // 새 방 필요
    }
  }
  return answer;
};
