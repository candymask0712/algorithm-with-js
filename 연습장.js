const solution = (s, t) => {
  let answer = 0;
  let window = s.slice(0, 3);

  const n = s.length;

  for (let i = 3; i <= n; i++) {
    console.info(i, s[i], window, t, isAna(window, t));
    if (isAna(window, t)) answer++;
    window = window.slice(1) + s[i];
  }
  return answer;
};

function isAna(str1, str2) {
  if (str1.length !== str2.length) return false;
  const h = new Map();
  for (const char of str1) {
    if (h.has(char)) h.set(char, h.get(char) + 1);
    else h.set(char, 1);
  }

  for (const char of str2) {
    if (!h.has(char)) return false;
    else h.set(char, h.get(char) - 1);
  }

  for (const [key, val] of h) {
    if (val !== 0) return false;
  }

  return true;
}

const str6 = 'bacaAacba';
const target = 'abc';

console.info(solution(str6, target));
