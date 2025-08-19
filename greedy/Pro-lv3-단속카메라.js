// * 문제..
// *

//

// * 모범 답안

// * 3차 풀이

// * 2차 풀이

// * 1차 풀이 (25.08.19) - 성공
function solution(routes) {
  var answer = 0;

  routes.sort((a, b) => {
    if (a[1] === b[1]) return a[0] - b[0];
    return a[1] - b[1];
  });

  let lastCam = -Infinity;

  for (const route of routes) {
    const [start, end] = route;
    if (lastCam < start) {
      answer++;
      lastCam = end;
    }
  }

  return answer;
}
