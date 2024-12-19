function solution(n, times) {
  // 최소 시간: 1분
  let left = 1;
  // 최대 시간: n명 모두가 가장 느린 심사관에게 심사를 받을 경우
  let right = Math.max(...times) * n;
  let answer = right;

  while (left <= right) {
    // 중간 시간
    const mid = Math.floor((left + right) / 2);

    // mid 시간 동안 처리할 수 있는 총 인원 계산
    const totalPeople = times.reduce(
      (acc, time) => acc + Math.floor(mid / time),
      0
    );

    if (totalPeople >= n) {
      // n명 이상 처리 가능 -> 시간을 줄여본다
      answer = mid;
      right = mid - 1;
    } else {
      // n명 처리 불가능 -> 시간을 늘린다
      left = mid + 1;
    }
  }

  return answer;
}
