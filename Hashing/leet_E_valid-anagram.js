// * 나의 풀이 - 1
// ! 해시를 이용해 글자 비교
// ! 하나의 해시만을 사용해서 t가 더 큰 경우에는 체크하지 못함
/**
 * @param {string} s
 * @param {string} t
 * @return {boolean}
 */
var isAnagram = function (s, t) {
  const h = new Map();
  const n = s.length;
  for (let i = 0; i < n; i++) {
    const char = s[i];
    if (h.has(char)) h.set(char, h.get(char) + 1);
    else h.set(char, 1);
  }
  for (let i = 0; i < n; i++) {
    const char = t[i];
    if (h.has(char)) h.set(char, h.get(char) - 1);
    else return false;
  }

  for (let [key, val] of h) {
    console.log(key, val);
    if (val !== 0) return false;
  }

  return true;
};

// 나의 풀이 - 2
// ! 두 개의 해시를 이용해 비교ㄴ
var isAnagram = function (s, t) {
  // 길이가 다르면 아나그램이 될 수 없음
  if (s.length !== t.length) return false;

  const sMap = new Map();
  const tMap = new Map();

  // 첫 번째 문자열의 문자 빈도수 계산
  for (let char of s) {
    sMap.set(char, (sMap.get(char) || 0) + 1);
  }

  // 두 번째 문자열의 문자 빈도수 계산
  for (let char of t) {
    tMap.set(char, (tMap.get(char) || 0) + 1);
  }

  // 두 맵의 크기가 다르면 서로 다른 문자가 있다는 의미
  if (sMap.size !== tMap.size) return false;

  // 각 문자의 빈도수 비교
  for (let [char, count] of sMap) {
    if (tMap.get(char) !== count) return false;
  }

  return true;
};
