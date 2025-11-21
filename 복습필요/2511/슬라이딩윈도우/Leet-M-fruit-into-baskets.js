// * 문제
// *

//
//

// * 모범 답안
var totalFruit = function (fruits) {
  const fruitTypeMap = new Map(); // 과일 종류별 개수
  let lp = 0;
  let answer = 0;

  for (let rp = 0; rp < fruits.length; rp++) {
    const curFruitType = fruits[rp];
    const prev = fruitTypeMap.get(curFruitType) ?? 0;
    fruitTypeMap.set(curFruitType, prev + 1);

    while (fruitTypeMap.size > 2) {
      const leftFruitType = fruits[lp];
      const count = fruitTypeMap.get(leftFruitType);

      if (count > 1) {
        fruitTypeMap.set(leftFruitType, count - 1);
      } else {
        fruitTypeMap.delete(leftFruitType);
      }
      lp++;
    }

    const windowLength = rp - lp + 1;
    if (windowLength > answer) answer = windowLength;
  }

  return answer;
};
// * 3차 풀이

// * 2차 풀이

// * 1차 풀이 - (25.11.15) - 성공
// ? 시간복잡도: O(n)
// ? 공간복잡도: O(1)

var totalFruit = function (fruits) {
  // ! 처음에 종류라는 것만 보고 Set으로 하려고 함
  const fruitTypeMap = new Map();
  let lp = 0;
  let answer = 0;

  // ! total을 따로 두지 않고, const length = rp - lp + 1 가능
  let total = 0;
  for (let rp = 0; rp < fruits.length; rp++) {
    const curfruitType = fruits[rp];
    // ! fruitTypeMap.get(curfruitType) + 1 에서 +1을 안해줘서 해맴
    fruitTypeMap.set(curfruitType, fruitTypeMap.get(curfruitType) + 1 || 1);
    total++;
    while (fruitTypeMap.size > 2) {
      const leftFruitType = fruits[lp];
      if (fruitTypeMap.get(leftFruitType) > 1) {
        fruitTypeMap.set(leftFruitType, fruitTypeMap.get(leftFruitType) - 1);
      } else {
        fruitTypeMap.delete(leftFruitType);
      }
      lp++;
      total--;
    }

    if (total > answer) answer = total;
  }
  return answer;
};
