// * 문제..
// *

//

// * 모범 답안
// ? 시간복잡도: O(n)
// ? 공간복잡도: O(n)
// ? split(새 배열), map(새 배열), join(새 문자열) 모두 O(n)
function solution(s) {
  return s
    .split(' ')
    .map((word) => {
      // ! 공백인 경우 빈 문자열 반환하여 join(' ') 시 공백 유지
      if (word.length === 0) return '';
      else return word[0].toUpperCase() + word.slice(1).toLowerCase();
    })
    .join(' ');
}

// * 3차 풀이

// * 2차 풀이
// ! '    '.split(' ') => ['', '', '', '', ''] (공백 n개 => n+1개의 빈 문자열)
function solution(s) {
  return s
    .split(' ')
    .map((word) => {
      if (word === '') return '';
      return word[0].toUpperCase() + word.slice(1).toLowerCase();
    })
    .join(' ');
}

// * 1차 풀이
// ! 여러개의 공백을 제거했지만 공백은 유지되어야 함
function solution(s) {
  return s
    .trim()
    .replace(/\s+/g, ' ')
    .split(' ')
    .map((word) => word[0].toUpperCase() + word.slice(1).toLowerCase())
    .join(' ');
}
