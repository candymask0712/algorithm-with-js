// * 문제
// *

//
//

// * 모범 답안

// * 3차 풀이

// * 2차 풀이 - (25.08.24) - 메모리를 더 많이쓰면 간단한 풀이도 가능
var canPlaceFlowers = function (flowerbed, n) {
  // 양 끝에 가상의 0을 추가
  flowerbed = [0, ...flowerbed, 0];
  let count = 0;

  for (let i = 1; i < flowerbed.length - 1; i++) {
    if (
      flowerbed[i - 1] === 0 &&
      flowerbed[i] === 0 &&
      flowerbed[i + 1] === 0
    ) {
      flowerbed[i] = 1; // 꽃 심기
      count++;
      if (count >= n) return true;
    }
  }
  return count >= n;
};

// * 1차 풀이 - (25.08.24) - 실패 (정답 참고)
var canPlaceFlowers = function (flowerbed, n) {
  const len = flowerbed.length;

  for (let i = 0; i < len; i++) {
    if (flowerbed[i] === 0) {
      const left = i === 0 ? 0 : flowerbed[i - 1];
      const right = i === len - 1 ? 0 : flowerbed[i + 1];

      if (left === 0 && right === 0) {
        flowerbed[i] = 1;
        n--;
        if (n <= 0) return true;
      }
    }
  }

  return n <= 0;
};
