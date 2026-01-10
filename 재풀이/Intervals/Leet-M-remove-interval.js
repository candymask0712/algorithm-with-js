// * 문제 링크

// * 3차 풀이
//? 시간복잡도: O()
//? 공간복잡도: O()

// * 2차 풀이
//? 시간복잡도: O()
//? 공간복잡도: O()

// * 1차 풀이
//? 시간복잡도: O()
//? 공간복잡도: O()
var removeInterval = function (intervals, toBeRemoved) {
  let answer = [];
  const [removeSt, removeEd] = toBeRemoved;
  for (const interval of intervals) {
    const [curSt, curEd] = interval;
    // ! 경우의 수를 잘 나누지 못함
    if (curSt >= removeSt && curEd <= removeEd) {
      continue;
    }

    if (curSt >= removeSt && curEd <= removeEd) {
      answer.push(interval);
    }
    if (curSt < removeSt && curEd <= removeEd) {
      answer.push([curSt, removeSt]);
    }
    if (curSt > removeSt && curEd > removeEd) {
      answer.push([removeEd, curEd]);
    }
  }

  return answer;
};

// * 참고 풀이
//? 시간복잡도: O()
//? 공간복잡도: O()
var removeInterval = function (intervals, toBeRemoved) {
  const res = [];
  const rS = toBeRemoved[0];
  const rE = toBeRemoved[1];

  for (const [s, e] of intervals) {
    // 1) 겹치지 않는 경우: 그대로 추가
    // e <= rS : interval이 제거구간 왼쪽에 완전히 있음
    // s >= rE : interval이 제거구간 오른쪽에 완전히 있음
    if (e <= rS || s >= rE) {
      res.push([s, e]);
      continue;
    }

    // ! 일부로 리턴하지 않고 잘라서 interval이 remove보다 큰 경우도 잘 처리
    // 2) 겹치는 경우: 남는 왼쪽 조각
    // interval의 시작이 제거구간 시작보다 왼쪽이면 [s, rS) 남음
    if (s < rS) {
      res.push([s, rS]);
    }

    // 3) 겹치는 경우: 남는 오른쪽 조각
    // interval의 끝이 제거구간 끝보다 오른쪽이면 [rE, e) 남음
    if (e > rE) {
      res.push([rE, e]);
    }
  }

  return res;
};
