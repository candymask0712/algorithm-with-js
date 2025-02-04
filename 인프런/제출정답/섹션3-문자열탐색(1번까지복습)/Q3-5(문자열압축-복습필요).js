// 모범 답안
function solution(s) {
  let answer = '';
  let cnt = 1;
  // ! 공백을 하나 추가 => 마지막 문자 요소까지 탐색
  s = s + ' ';
  for (let i = 0; i < s.length - 1; i++) {
    // ! 지금 요소와 다음 요소를 비교 => 이전 요소 기억하기 위한 코드 감소
    if (s[i] === s[i + 1]) cnt++;
    else {
      answer += s[i];
      if (cnt > 1) answer += String(cnt);
      cnt = 1;
    }
  }
  return answer;
}

// 4차

function solution(str) {
  let answer = '';
  let priviousStr = str[0];
  let repCnt = 0;
  const n = str.length;
  for (let i = 0; i <= n; i++) {
    if (i < n && str[i] === priviousStr) repCnt++;
    else {
      answer += repCnt > 1 ? priviousStr + repCnt : priviousStr;
      priviousStr = str[i];
      repCnt = 1;
    }
  }
  return answer;
}

// 3차 풀이 - 모범답안 스타일로 수정 및 복습
function solution(str) {
  let answer = '';
  let cnt = 1;
  str = str + ' ';
  for (let i = 0; i < str.length; i++) {
    if (str[i] === str[i + 1]) cnt++;
    else {
      answer += str[i] + (cnt > 1 ? cnt : '');
      cnt = 1;
    }
  }
  return answer;
}

// 2차 풀이
function solution(str) {
  let answer = '';
  let tmp = str[0];
  let cnt = 0;
  // ! i < str.length로 설정하여 마지막 요소 탐색 지연
  // ! 이전요소와 비교하여 그 다음 턴에서 처리가 완료되는 경우
  // ! 마지막 요소도 탐색하기 위한 처리 필수!!
  for (let i = 0; i <= str.length; i++) {
    if (str[i] === tmp) cnt++;
    else {
      answer += tmp + (cnt === 1 ? '' : cnt);
      tmp = str[i];
      // ! cnt를 0으로 초기화 하여 풀이 지연
      cnt = 1;
    }
  }
  return answer;
}

console.log(solution('KKHSSSSSSSE')); // K2HS7E

// 1차 풀이 - 실패
