// * 문제
// *

//
//

// * 모범 답안

// * 3차 풀이

// * 2차 풀이

// * 1차 풀이 - (25.08.26) - 실패

var predictPartyVictory = function (senate) {
  const rq = [];
  const dq = [];
  const n = senate.length;
  for (let i = 0; i < n; i++) {
    if (senate[i] === 'R') rq.push(i);
    if (senate[i] === 'D') dq.push(i);
  }

  while (rq.length && dq.length) {
    const nr = rq.shift();
    const nd = dq.shift();

    if (nr < nd) {
      rq.push(nr + n);
    } else {
      dq.push(nd + n);
    }
  }
  return rq.length ? 'Radiant' : 'Dire';
};
