// * 문제
// *

//
//

// * 모범 답안

// * 3차 풀이

// * 2차 풀이

// * 1차 풀이
// ? 업데이트 개수를 U, 배열 길이를 N이라고 할 때
// ? 시간복잡도: O(U + N)
// ? 공간복잡도: O(N)
var corpFlightBookings = function (bookings, n) {
  const diff = Array(n + 1).fill(0);
  for (const booking of bookings) {
    const [st, ed, val] = booking;
    diff[st - 1] += val;
    diff[ed] -= val;
  }

  let cum = 0;
  const answer = Array(n).fill(0);
  for (let i = 0; i < n; i++) {
    cum += diff[i];
    answer[i] += cum;
  }
  return answer;
};
