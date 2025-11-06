// * 나의 풀이 - 3 (25.08.23) - 정답
var isSubsequence = function (s, t) {
  let i = 0; // ! 포인터로 불필요한 배열사용 개선
  for (const char of t) {
    if (char === s[i]) {
      i++;
      if (i === s.length) return true; // ! 조기 종료
    }
  }
  // ! 원래는 조기 종료 조건이 있어 return false로 생각
  // ! 그러나 조기 종료 조건은 s='' 경우 if 문 안으로 들어가지 않음
  // ! 또한 t가 빈 문자열인 경우 무조건 false 반환
  return s.length === i;
};

// * 나의 풀이 - 2 (25.08.23) - 정답
var isSubsequence = function (s, t) {
  const arr = s.split('');
  for (const char of t) {
    if (char === arr[0]) {
      arr.shift();
    }
  }

  return arr.length === 0;
};

// * 나의 풀이 - 1
var isSubsequence = function (s, t) {
  if (s.length === 0) return true;
  if (t.length === 0) return false;

  let sp = 0;
  let tp = 0;

  while (tp < t.length) {
    const sChar = s[sp];
    const tChar = t[tp];

    if (sChar === tChar) {
      sp++;
      tp++;
      if (sp === s.length) return true;
    } else {
      tp++;
    }
  }

  return false;
};

// 참고 풀이
var isSubsequence = function (s, t) {
  // s가 빈 문자열이면 true 반환
  if (s.length === 0) return true;

  let sPointer = 0;

  // t의 각 문자를 순회
  // ! t에 대한 포인터는 반복문을 활용하는 형식
  for (let tPointer = 0; tPointer < t.length; tPointer++) {
    // 현재 문자가 일치하면 s의 포인터를 이동
    if (s[sPointer] === t[tPointer]) {
      sPointer++;
    }

    // s의 모든 문자를 찾았으면 true 반환
    if (sPointer === s.length) {
      return true;
    }
  }

  // s의 모든 문자를 찾지 못했으면 false 반환
  return false;
};
