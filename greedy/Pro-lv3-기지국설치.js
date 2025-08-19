// * 문제..
// *

//

// * 모범 답안

// * 3차 풀이 (25.08.19) - 성공 (gpt 도움으로 엣지케이스 제거)
function solution(n, stations, w) {
  const span = 2 * w + 1; // 기지국 하나가 덮는 길이
  let answer = 0;

  // 아직 덮이지 않은 첫 위치(1-indexed)
  let prevStart = 1;

  stations.forEach((station) => {
    // 경계 보정
    const leftReach = Math.max(1, station - w);
    const rightReach = Math.min(n, station + w);

    // prevStart ~ (leftReach - 1) 구간이 비어있다면, 그 길이를 span으로 채움
    const gap = leftReach - prevStart;
    if (gap > 0) {
      answer += Math.ceil(gap / span);
    }

    // rightReach까지는 덮였으니 다음 미커버 시작점 갱신
    prevStart = rightReach + 1;
  });

  // 모든 기존 기지국 처리 후, 오른쪽에 남은 빈 구간 처리
  if (prevStart <= n) {
    const gap = n - prevStart + 1;
    answer += Math.ceil(gap / span);
  }

  return answer;
}

// * 2차 풀이 (25.08.19) - 일부케이스 실패
function solution(n, stations, w) {
  var answer = 0;
  let prevStart = 0;
  let leftReach = 0;
  let rightReach = 0;
  stations.forEach((station) => {
    leftReach = station - w;
    rightReach = station + w;

    const blindDistance = leftReach - prevStart - 1;
    answer += Math.floor(blindDistance / (w * 2 + 1)) + 1;
    prevStart = rightReach + 1;
  });

  const blindDistance = n - rightReach - 1;
  answer += Math.floor(blindDistance / (w * 2 + 1)) + 1;

  return answer;
}

// * 1차 풀이
// 전체 맵을 진짜 그려서 시간복잡도에서 실패
