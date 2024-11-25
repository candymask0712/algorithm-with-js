// * 나의 풀이
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

// 모범 풀이
var reverseVowels = function (s) {
  const vow = s.match(/[aeiou]/gi);
  return s.replace(/[aeiou]/gi, () => vow.pop());
};
