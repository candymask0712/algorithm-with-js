// * 문제..
// *

//

// * 모범 답안

// * 3차 풀이

// * 2차 풀이

// * 1차 풀이 (25.10.10) - 실패(답참고)

function solution(board, skill) {
  const n = board.length;
  const m = board[0].length;

  // (n+1) x (m+1) 누적용 보조배열
  const acc = Array.from({ length: n + 1 }, () => new Array(m + 1).fill(0));

  // 1) 각 스킬을 차분 배열에 O(1)로 반영
  for (let i = 0; i < skill.length; i++) {
    const [type, r1, c1, r2, c2, degree] = skill[i];
    const val = type === 1 ? -degree : degree;

    // ! 핵심 부분
    acc[r1][c1] += val;
    acc[r1][c2 + 1] -= val;
    acc[r2 + 1][c1] -= val;
    acc[r2 + 1][c2 + 1] += val;
  }

  // 2) 행 방향 누적합
  for (let r = 0; r < n; r++) {
    for (let c = 1; c < m; c++) {
      acc[r][c] += acc[r][c - 1];
    }
  }

  // 3) 열 방향 누적합
  for (let c = 0; c < m; c++) {
    for (let r = 1; r < n; r++) {
      acc[r][c] += acc[r - 1][c];
    }
  }

  // 4) 최종 보드 계산 및 양수 카운트
  let alive = 0;
  for (let r = 0; r < n; r++) {
    for (let c = 0; c < m; c++) {
      if (board[r][c] + acc[r][c] > 0) alive++;
    }
  }
  return alive;
}
