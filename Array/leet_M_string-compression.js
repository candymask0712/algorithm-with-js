//  * 나의 풀이
var compress = function (chars) {
  const n = chars.length;
  let cnt = 1;
  let answer = chars[0];
  for (let i = 1; i < n; i++) {
    if (i === n - 1 || chars[i - 1] !== chars[i]) {
      answer += chars[i] + (cnt === 1 ? '' : cnt);
    } else {
      cnt++;
    }
  }

  chars = answer.split('');

  return answer.length;
};
var compress = function (chars) {
  const n = chars.length;
  let cnt = 1;
  let answer = chars[0];
  for (let i = 1; i < n; i++) {
    if (i === n - 1 || chars[i - 1] !== chars[i]) {
      answer += chars[i] + (cnt === 1 ? '' : cnt);
    } else {
      cnt++;
    }
  }
  // ! 압축 후 재할당해서 정답처리 되지 않음
  chars = answer.split('');

  return answer.length;
};

// 모범 답안
var compress = function (chars) {
  const n = chars.length;
  let cnt = 1; // 문자 개수 세기
  let write = 0; // chars 배열에 값을 쓰는 위치

  for (let i = 1; i <= n; i++) {
    // 마지막 문자까지 처리하기 위해 i <= n
    if (i < n && chars[i] === chars[i - 1]) {
      cnt++;
    } else {
      // 현재 문자 기록
      chars[write] = chars[i - 1];
      write++;

      // 개수가 1보다 큰 경우 숫자도 기록
      if (cnt > 1) {
        const countStr = String(cnt);
        for (const digit of countStr) {
          chars[write] = digit;
          write++;
        }
      }

      cnt = 1; // 개수 초기화
    }
  }

  return write; // 압축된 배열의 길이 반환
};
