// * 문제
// *

//
//

// * 모범 답안

// * 3차 풀이

// * 2차 풀이 - (25.09.06)
var combinationSum = function (candidates, target) {
  const answer = [];
  const path = [];

  function dfs(start, remain) {
    if (remain === 0) {
      answer.push(path.slice()); // ! 2차원 이상의 배열을 다룰 때는 복사값 사용 필요
      return;
    }

    for (let i = start; i < candidates.length; i++) {
      const cur = candidates[i];
      if (cur > remain) break; // ! 프루닝
      path.push(cur);
      dfs(i, remain - cur); // ! 중복허용이라 현재 인덱스 사용
      path.pop();
    }
  }

  dfs(0, target);
  return answer;
};

// * 1차 풀이 - (25.09.06) - 틀림

var combinationSum = function (candidates, target) {
  let answer = [];
  for (let i = 1; i < candidates.length; i++) {
    const result = getRepeatedCombinations(candidates, i).filter(
      (arr) => arr.reduce((acc, num) => acc + num, 0) === target
    );
    answer = [...answer, ...result];
  }
  return answer;
};

// ✅ 중복 조합(Repeated Combination) - 순서 X, 중복 O
function getRepeatedCombinations(arr, selectNum) {
  if (selectNum === 1) return arr.map((el) => [el]);

  const result = [];

  arr.forEach((num, index, arr) => {
    // ! 중복조합은 딱 본인까지만 자름
    const combinations = getRepeatedCombinations(
      arr.slice(index),
      selectNum - 1
    );
    combinations.forEach((subArr) => {
      result.push([...subArr, num]);
    });
  });

  return result;
}
