var findMinArrowShots = function (points) {
  let answer = 1;
  if (points.length === 0) return answer;

  const n = points.length;
  points.sort((a, b) => a[0] - b[0]);

  let arrow = points[0];

  for (let i = 1; i < n; i++) {
    const curPoint = points[i];
    const arrowEnd = arrow[1];
    const curStart = curPoint[0];

    if (arrowEnd >= curStart) {
      arrow = [
        Math.max(arrow[0], curPoint[0]),
        Math.min(arrow[1], curPoint[1]),
      ];
    } else {
      answer++;
      arrow = curPoint;
    }
  }
  return answer;
};

// 참고 풀이
function findMinArrowShots(points) {
  // 빈 배열이나 길이가 1 이하인 경우 처리
  if (points.length <= 1) return points.length;

  // 끝점을 기준으로 정렬
  points.sort((a, b) => a[1] - b[1]);

  let arrows = 1; // 필요한 화살의 수
  let currentEnd = points[0][1]; // 현재 화살의 위치

  // 모든 풍선을 순회
  for (let i = 1; i < points.length; i++) {
    // 현재 풍선이 이전 화살로 터트릴 수 없는 경우
    if (points[i][0] > currentEnd) {
      arrows++; // 새로운 화살 필요
      currentEnd = points[i][1]; // 화살 위치 업데이트
    }
  }

  return arrows;
}
