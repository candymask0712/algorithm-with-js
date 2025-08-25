// * 모범 답안 - 정규식
var reverseVowels = function (s) {
  const vow = s.match(/[aeiou]/gi);
  return s.replace(/[aeiou]/gi, () => vow.pop()); // ! String.prototype.replace는 두 번째 인자로 “문자열” 또는 **“함수”**를 받을 수 있어요.
};

// * 3차 풀이

// * 2차 풀이 - (25.08.24) - 정답
const VOWEL_LIST = ['a', 'e', 'i', 'o', 'u'];
var reverseVowels = function (s) {
  let answer = '';
  const vowels = [];
  for (const char of s) {
    if (VOWEL_LIST.includes(char.toLowerCase())) {
      vowels.push(char);
    }
  }
  vowels.reverse();
  let i = 0;
  for (const char of s) {
    if (VOWEL_LIST.includes(char.toLowerCase())) {
      answer += vowels[i];
      i++;
    } else {
      answer += char;
    }
  }
  return answer;
};

// * 1차 풀이
var reverseVowels = function (s) {
  const vowels = ['a', 'e', 'i', 'o', 'u', 'A', 'E', 'I', 'O', 'U'];
  const list = [];
  const word = s.split('');
  const n = s.length;
  for (let i = 0; i < n; i++) {
    if (vowels.includes(word[i])) {
      list.push(word[i]);
    }
  }
  list.reverse();

  let cnt = 0;
  for (let i = 0; i < n; i++) {
    if (vowels.includes(word[i])) {
      word[i] = list[cnt];
      cnt++;
    }
  }
  return word.join('');
};
