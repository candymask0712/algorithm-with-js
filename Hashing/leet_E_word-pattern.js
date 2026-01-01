// 나의 풀이 - 1
// ! 해시로 알파벳별 빈도 저장
// ! 빈도별로 알파벳 저장 후 같은 개수 알파벳 있는지 비교
// ! 순서가 바뀌는 경우 체크하지 못함
var isIsomorphic = function (s, t) {
  const h1 = new Map();
  const h2 = new Map();
  const h3 = new Map();
  const h4 = new Map();
  const n = s.length;
  for (const char of s) {
    if (h1.has(char)) h1.set(char, h1.get(char) + 1);
    else h1.set(char, 1);
  }
  for (const char of t) {
    if (h2.has(char)) h2.set(char, h2.get(char) + 1);
    else h2.set(char, 1);
  }
  const arr1 = Array.from({ length: n + 1 }, () => []);
  const arr2 = Array.from({ length: n + 1 }, () => []);
  for (let [key, val] of h1) {
    arr1[val].push(key);
  }
  for (let [key, val] of h2) {
    arr2[val].push(key);
  }
  for (let i = 1; i <= n; i++) {
    if (arr1[i].length !== arr2[i].length) return false;
  }
  return true;
};

// * 나의 풀이 - 2
// ! 첫번째 단어를 순회하면서 특정 글자와 매핑되는지 해시로 기록
// ! 다음 등장시 같은 글자와 매핑 되었는지 체크
var isIsomorphic = function (s, t) {
  // 문자열 길이가 다르면 동형이 될 수 없음
  if (s.length !== t.length) {
    return false;
  }

  // s -> t 매핑을 위한 객체
  const sToT = new Map();
  // t -> s 매핑을 위한 객체 (중복 매핑 방지)
  const tToS = new Map();

  for (let i = 0; i < s.length; i++) {
    const charS = s[i];
    const charT = t[i];

    // s의 문자가 이미 매핑되어 있는 경우
    if (sToT.has(charS)) {
      // 기존 매핑과 다른 문자로 매핑하려는 경우
      if (sToT.get(charS) !== charT) {
        return false;
      }
    }
    // s의 문자가 아직 매핑되지 않은 경우
    else {
      // t의 문자가 이미 다른 문자와 매핑되어 있는 경우
      if (tToS.has(charT)) {
        return false;
      }
      // 새로운 매핑 추가
      sToT.set(charS, charT);
      tToS.set(charT, charS);
    }
  }

  return true;
};
