// * 문제

// * 모범 답안 - 1 (시간복잡도 o(n*m))
function compareMaps(map1, map2) {
  if (map1.size !== map2.size) return false;
  for (let [key, val] of map1) {
    if (!map2.has(key) || map2.get(key) !== val) return false;
  }
  return true;
}
function solution(s, t) {
  let answer = 0;
  let tH = new Map();
  let sH = new Map();
  for (let x of t) {
    if (tH.has(x)) tH.set(x, tH.get(x) + 1);
    else tH.set(x, 1);
  }
  let len = t.length - 1;
  for (let i = 0; i < len; i++) {
    if (sH.has(s[i])) sH.set(s[i], sH.get(s[i]) + 1);
    else sH.set(s[i], 1);
  }
  let lt = 0;
  for (let rt = len; rt < s.length; rt++) {
    if (sH.has(s[rt])) sH.set(s[rt], sH.get(s[rt]) + 1);
    else sH.set(s[rt], 1);
    if (compareMaps(sH, tH)) answer++;
    sH.set(s[lt], sH.get(s[lt]) - 1);
    if (sH.get(s[lt]) === 0) sH.delete(s[lt]);
    lt++;
  }
  return answer;
}

let a = 'bacaAacba';
let b = 'abc';
console.log(solution(a, b));

// * 모범 답안 2 (시간 복잡도 o(n))
function solution(s, t) {
  let answer = 0;
  const targetMap = new Map();

  // t 문자열의 문자 빈도를 음수로 초기화
  for (const char of t) {
    targetMap.set(char, (targetMap.get(char) || 0) - 1);
  }

  const windowSize = t.length;
  const sLength = s.length;

  // 초기 윈도우 세팅 (마지막 한 문자 전까지)
  for (let i = 0; i < windowSize - 1; i++) {
    const char = s[i];
    targetMap.set(char, (targetMap.get(char) || 0) + 1);
    if (targetMap.get(char) === 0) targetMap.delete(char);
  }

  let left = 0;
  for (let right = windowSize - 1; right < sLength; right++) {
    // 오른쪽 문자 추가
    const addChar = s[right];
    targetMap.set(addChar, (targetMap.get(addChar) || 0) + 1);
    if (targetMap.get(addChar) === 0) targetMap.delete(addChar);

    // 아나그램 조건 확인
    if (targetMap.size === 0) answer++;

    // 왼쪽 문자 제거
    const removeChar = s[left];
    targetMap.set(removeChar, (targetMap.get(removeChar) || 0) - 1);
    if (targetMap.get(removeChar) === 0) targetMap.delete(removeChar);
    left++;
  }

  return answer;
}
console.log(solution('bacacbcba', 'abc'));

// * 2차 답안 - 성공 (but 이중포문이라 시간복잡도 o(n*m)

const solution = (str, t) => {
  let answer = 0;
  let n = t.length;
  let tmp = '';
  let h = new Map();

  for (let i = 0; i < n; i++) tmp += str[i];

  for (let i = 0; i < n; i++) {
    if (h.has(t[i])) h.set(t[i], h.get(t[i]) + 1);
    else h.set(t[i], 1);
  }
  console.log(h);

  for (let i = 0; i < str.length - n + 1; i++) {
    let flag = 0;
    console.log('i', i, tmp);
    tmp = tmp.substring(1, n);
    tmp += str[i + n];
    for (let i = 0; i < n; i++) {
      if (!h.has(tmp[i])) flag = 1;
    }
    if (flag === 0) answer++;
  }

  return answer;
};

// * 1차 답안 - 없음
