// 나의 풀이
function solution(phone_book) {
  var answer = true;
  phone_book.sort((a, b) => a.length - b.length);
  const h = new Map();

  for (const phone of phone_book) {
    let prefix = '';

    for (let i = 0; i < phone.length; i++) {
      prefix += phone[i];
      if (h.has(prefix)) return false;
    }

    h.set(phone, true);
  }

  return answer;
}
