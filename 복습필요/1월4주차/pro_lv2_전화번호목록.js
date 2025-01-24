// * 1차 풀이ㄴ
function solution(phone_book) {
  var answer = true;
  phone_book.sort((a, b) => a.length - b.length);
  const hash = new Map();

  for (const phone of phone_book) {
    let subset = '';
    for (const char of phone) {
      subset += char;
      if (hash.has(subset)) return false;
    }

    hash.set(phone, 1);
  }

  return answer;
}
