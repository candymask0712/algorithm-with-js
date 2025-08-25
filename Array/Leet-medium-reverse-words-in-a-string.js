// * 문제
// *

//
//

// * 모범 답안
var reverseWords = function (s) {
  // 1. trim() : 앞뒤 공백 제거
  // 2. split(/\s+/) : 공백(하나 이상) 기준으로 분리
  // 3. reverse() : 단어 순서 뒤집기
  // 4. join(" ") : 단어들을 한 칸짜리 공백으로 합치기
  return s.trim().split(/\s+/).reverse().join(' '); // ! split(/\s+/) 정규식 사용 좋음
};

// * 3차 풀이

// * 2차 풀이

// * 1차 풀이
var reverseWords = function (s) {
  s = s.trim();
  s = s.replace(/\s{2,}/g, ' '); // ! 이 부분만 검색해서 사용
  return s.split(' ').reverse().join(' ');
};
