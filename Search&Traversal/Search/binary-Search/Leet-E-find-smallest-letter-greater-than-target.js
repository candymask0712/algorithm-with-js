// * 문제
// *

//
//

// * 모범 답안
var nextGreatestLetter = function (letters, target) {
  let lp = 0;
  let rp = letters.length - 1;

  while (lp <= rp) {
    const mid = Math.floor((lp + rp) / 2);

    if (letters[mid] <= target) {
      lp = mid + 1;
    } else {
      rp = mid - 1;
    }
  }

  // lp가 배열 끝을 넘어가면 순환해서 letters[0] 반환
  return lp < letters.length ? letters[lp] : letters[0];
};
// * 3차 풀이

// * 2차 풀이 - (25.09.07) - 오답
// ! 부등호를 사용했으나 여전히 같다 조건이 복잡
var nextGreatestLetter = function (letters, target) {
  const n = letters.length;
  let lp = 0;
  let rp = n - 1;
  while (lp <= rp) {
    const mid = Math.floor((rp + lp) / 2);
    if (letters[mid] === target) {
      const lastIndex = letters.lastIndexOf(target);
      return lastIndex === n - 1 ? letters[0] : letters[lastIndex + 1];
    } else if (target > letters[mid]) {
      lp = mid + 1;
    } else {
      rp = mid - 1;
    }
  }
  return lp;
};

// * 1차 풀이 - (25.09.07) - 오답
// ! 문자열 비교를 부등호가 아닌 localeCompare 메서드를 사용해서 풀이
var nextGreatestLetter = function (letters, target) {
  const n = letters.length;
  let lp = 0;
  let rp = n - 1;
  while (lp <= rp) {
    const mid = Math.floor((rp + lp) / 2);
    if (letters[mid] === target) {
      const lastIndex = letters.lastIndexOf(target);
      return lastIndex === n - 1 ? letters[0] : letters[lastIndex + 1];
    } else if (letters[mid].localeCompare(target)) {
      rp = mid - 1;
    } else {
      lp = mid + 1;
    }
  }
  return letters[lp];
};
