// * 문제 링크

// * 3차 풀이
//? 시간복잡도: O()
//? 공간복잡도: O()

// * 2차 풀이
//? 시간복잡도: O()
//? 공간복잡도: O()

// * 1차 풀이
//? 시간복잡도: O(nlogn) (n = intervals.length)
//? 공간복잡도: O(1)
var canAttendMeetings = function (intervals) {
  // ! 우연히 끝시간 기준 정렬도 맞았으나 시작 시간 정렬이 정석
  intervals.sort((a, b) => a[0] - b[0]);

  for (let i = 1; i < intervals.length; i++) {
    const prevEnd = intervals[i - 1][1];
    const curStart = intervals[i][0];
    if (curStart < prevEnd) return false;
  }

  return true;
};

// * 참고 풀이
//? 시간복잡도: O()
//? 공간복잡도: O()
