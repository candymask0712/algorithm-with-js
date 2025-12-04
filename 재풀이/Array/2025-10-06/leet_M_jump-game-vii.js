// * 문제
// *

//
//

// * 모범 답안
var canReach = function (s, minJump, maxJump) {
  const n = s.length;
  if (s[n - 1] === '1') return false; // 마지막이 1이면 애초에 불가능

  const queue = [];
  queue.push(0);

  let farthest = 0; // 지금까지 "점검해 본" 가장 먼 인덱스

  while (queue.length > 0) {
    const i = queue.shift();

    // i에서 점프 가능한 [i + minJump, i + maxJump] 중
    // 아직 검사하지 않은 구간만 본다.
    let start = i + minJump;
    let end = i + maxJump;

    // 범위 보정
    if (start < farthest + 1) {
      start = farthest + 1;
    }
    if (end >= n) {
      end = n - 1;
    }

    if (start > end) continue; // 새로 볼 구간 없음

    for (let j = start; j <= end; j++) {
      if (s[j] === '0') {
        if (j === n - 1) return true; // 마지막 위치 도달
        queue.push(j);
      }
    }

    // 여기까지 보면 [farthest + 1, end] 구간은 모두 확인 끝
    farthest = end;
  }

  return false;
};
// * 3차 풀이

// * 2차 풀이

// * 1차 풀이 - (25.11.21) - 실패

var canReach = function (s, minJump, maxJump) {
  let minPrev = 0;
  let maxPrev = 0;

  for (let i = 1; i < s.length; i++) {
    const char = s[i];
    if (char === '1') continue;

    const minDiff = i - maxPrev;
    const maxDiff = i - minPrev;

    if (minDiff < minJump || maxDiff > maxJump) return false;

    minPrev = maxPrev;
    maxPrev = i;
  }

  return maxPrev === s.length - 1;
};
