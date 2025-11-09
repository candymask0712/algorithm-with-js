// * 문제
// *

//
//

// * 모범 답안

// * 3차 풀이

// * 2차 풀이

// * 1차 풀이
/**
 * @param {string} s
 * @return {string}
 */
var longestPalindrome = function (s) {
  const n = s.length;
  if (n < 2) return s; // 길이가 0 또는 1이면 자기 자신이 답

  let start = 0; // 최장 팰린드롬의 시작 인덱스
  let end = 0; // 최장 팰린드롬의 끝 인덱스

  // left, right을 중심으로 확장했을 때 얻을 수 있는 팰린드롬 길이를 반환
  const expandAroundCenter = (left, right) => {
    while (left >= 0 && right < n && s[left] === s[right]) {
      left--;
      right++;
    }
    // while 루프를 빠져나오면 left, right가 팰린드롬 범위를 벗어났으므로
    // 실제 길이는 (right-1) - (left+1) + 1 = right - left - 1
    return right - left - 1;
  };

  for (let i = 0; i < n; i++) {
    // 홀수 길이 팰린드롬 (i 중심)
    const len1 = expandAroundCenter(i, i);
    // 짝수 길이 팰린드롬 (i, i+1 중심)
    const len2 = expandAroundCenter(i, i + 1);
    const len = Math.max(len1, len2);

    // 현재까지 찾은 최장 팰린드롬보다 길다면 start, end 갱신
    if (len > end - start + 1) {
      start = i - Math.floor((len - 1) / 2);
      end = i + Math.floor(len / 2);
    }
  }

  // substring의 두 번째 인자는 exclusive이므로 end+1
  return s.substring(start, end + 1);
};
