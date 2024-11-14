// 1차 풀이 - 연속적 병합을 대응하지 못함
var merge = function (intervals) {
  const answer = [];
  if (intervals.length === 1) return intervals;
  intervals.sort((a, b) => {
    if (a[0] === b[0]) {
      return a[1] - b[1];
    } else {
      return a[0] - b[0];
    }
  });
  for (let index = 0; index < intervals.length; index++) {
    if (index === 0) continue;
    const [prevStart, prevEnd] = intervals[index - 1];
    const [curStart, curEnd] = intervals[index];
    // console.log(prevStart, prevEnd, curStart, curEnd, prevEnd >= curStart)
    if (prevEnd >= curStart) {
      answer.push([Math.min(prevStart, curStart), Math.max(prevEnd, curEnd)]);
      index++;
    } else {
      answer.push([prevStart, prevEnd]);
      if (index === intervals.length - 1) answer.push(intervals[index]);
    }
  }
  return answer;
};

// 참고 코드
var merge = function (intervals) {
  if (intervals.length <= 1) return intervals;

  // intervals를 시작 시간을 기준으로 정렬
  intervals.sort((a, b) => a[0] - b[0]);

  const merged = [];
  // ! 루프 외부에 별도 변수를 두어 관리
  let currentInterval = intervals[0];

  for (let i = 1; i < intervals.length; i++) {
    const [currentStart, currentEnd] = currentInterval;
    const [nextStart, nextEnd] = intervals[i];

    if (currentEnd >= nextStart) {
      // 겹치는 경우: 끝 시간을 업데이트
      currentInterval = [currentStart, Math.max(currentEnd, nextEnd)];
    } else {
      // 겹치지 않는 경우: 결과에 추가 후, 새 구간 시작
      merged.push(currentInterval);
      currentInterval = intervals[i];
    }
  }

  // 마지막 구간 추가
  merged.push(currentInterval);

  return merged;
};
