// * 나의 풀이 - 1
// needle을 사용해 문자열을 분리하고 경우의 수를 나누어 index를 계산
var strStr = function (haystack, needle) {
  const splittedHaystack = haystack.split(needle);
  if (splittedHaystack.length === 1) return -1;

  // split의 매커니즘을 헷갈려서 for문을 사용함
  // 이미 split의 결과의 길이가 2이상이라는 것은 특정 단어가 출현했다는 것
  for (let i = 0; i < splittedHaystack.length; i++) {
    const chunk = splittedHaystack[i];
    if (chunk === '' || i === 1) return answer;
    else answer += chunk.length;
  }
};

// * 나의 풀이 - 2
var strStr = function (haystack, needle) {
  const splittedHaystack = haystack.split(needle);
  if (splittedHaystack.length === 1) return -1;
  // 삼항연산자로 변경
  return splittedHaystack[0] === '' ? 0 : splittedHaystack[0].length;
};
