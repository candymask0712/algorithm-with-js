// * 첫번째 풀이

function solution(arr1, arr2) {
  var answer = [];

  const n = arr1.length;
  const m = arr1[0].length;

  for (let i = 0; i < n; i++) {
    answer.push([]);
    for (let j = 0; j < m; j++) {
      let sum = 0;
      for (let k = 0; k < arr2[0].length; k++) {
        const num1 = arr1[i][k];
        const num2 = arr2[k][j];
        const product = num1 * num2;
        sum += product;
      }

      answer[i].push(sum);
    }
  }

  return answer;
}

// * 참고 풀이

function solution(arr1, arr2) {
  var answer = [];

  const n = arr1.length; // arr1의 행 개수
  const m = arr1[0].length; // arr1의 열 개수
  const p = arr2[0].length; // arr2의 열 개수

  for (let i = 0; i < n; i++) {
    answer.push([]);
    for (let j = 0; j < p; j++) {
      // j의 범위를 arr2의 열 개수로 변경
      let sum = 0;
      for (let k = 0; k < m; k++) {
        // k의 범위를 m으로 변경
        const num1 = arr1[i][k];
        const num2 = arr2[k][j];
        sum += num1 * num2;
      }
      answer[i].push(sum);
    }
  }

  return answer;
}

// * 모범 풀이

function solution(arr1, arr2) {
  return arr1.map((row) =>
    arr2[0].map((_, i) => row.reduce((a, c, j) => a + c * arr2[j][i], 0))
  );
}
