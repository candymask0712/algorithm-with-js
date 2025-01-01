function solution(citations) {
  citations.sort((a, b) => a - b);

  const n = citations.length;

  let answer = 0;

  for (let i = 0; i < n; i++) {
    // h값 계산: 현재 논문보다 많이 인용된 논문의 개수
    const h = n - i; // 남은 논문의 개수

    // 조건 검사: citations[i]가 h 이상일 때 H-Index 조건 충족
    if (citations[i] >= h) {
      return h; // 조건 충족 시 h 반환
    }
  }

  return answer;
}
