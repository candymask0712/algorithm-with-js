// * 문제
// *

//
//

// * 모범 답안
var hIndex = function (citations) {
  // 1. 인용수가 큰 순서대로 정렬
  citations.sort((a, b) => b - a);

  // 2. 위에서부터 h조건이 깨지는 지점을 찾기
  for (let i = 0; i < citations.length; i++) {
    const citation = citations[i];
    const paperCount = i + 1; // 위에서 paperCount편을 본 상태
    // 이 논문의 인용 수가 우리가 원하는 개수보다 작아지면 거기가 h
    if (citation < paperCount) {
      return i; // 지금까지 i편은 조건 만족
    }
  }

  // 3. 끝까지 안 깨졌으면 논문 수 전체가 h
  return citations.length;
};

// * 3차 풀이

// * 2차 풀이 - 성공 (25.11.10) - 정확히 이해 X
var hIndex = function (citations) {
  citations.sort((a, b) => b - a);
  for (let i = 0; i < citations.length; i++) {
    const citation = citations[i];
    if (citation <= i) return i;
  }
  return citations.length;
};

// * 1차 풀이 - 틀림
var hIndex = function (citations) {
  citations.sort((a, b) => a - b);
  const n = citations.length;
  let hIndex = 0;

  for (let i = 0; i < n; i++) {
    const current = citations[i];
    if (current === 0) continue;

    const remain = n - i;
    if (remain >= current) hIndex = Math.max(hIndex, current);
    else hIndex = Math.max(hIndex, remain);
  }
  return hIndex;
};
