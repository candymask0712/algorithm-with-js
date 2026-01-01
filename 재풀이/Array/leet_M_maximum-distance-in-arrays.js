// * 2차 풀이 - (25.12.30) - 답 본 후에 성공
// ?	시간복잡도: O(n)
// ? 	공간복잡도: O(1)
var maxDistance = function (arrays) {
  let prevMin = arrays[0][0];
  let prevMax = arrays[0].at(-1);

  let answer = 0;

  // ! 처음에 i를 0으로 하여 실패 (그러면 0번째 인덱스 배열에서 두 개 뽑는 경우가 됨)
  for (let i = 1; i < arrays.length; i++) {
    const curMin = arrays[i][0];
    const curMax = arrays[i].at(-1);

    const diff1 = Math.abs(prevMax - curMin);
    const diff2 = Math.abs(curMax - prevMin);

    answer = Math.max(answer, diff1, diff2);

    prevMin = Math.min(prevMin, curMin);
    prevMax = Math.max(prevMax, curMax);
  }

  return answer;
};

// * 1차 풀이 - (25.12.30) - 실패(시간 초과)
// ?	시간복잡도: O(n²)
// ? 	공간복잡도: O(1)
var maxDistance = function (arrays) {
  let answer = 0;
  const n = arrays.length;
  for (let i = 0; i < n; i++) {
    for (let j = 0; j < n; j++) {
      if (i === j) continue;

      const arr1 = arrays[i];
      const arr2 = arrays[j];

      const diff1 = Math.abs(arr1.at(-1) - arr2[0]);
      const diff2 = Math.abs(arr2.at(-1) - arr1[0]);

      answer = Math.max(answer, diff1, diff2);
    }
  }
  return answer;
};

// * 참고 풀이
