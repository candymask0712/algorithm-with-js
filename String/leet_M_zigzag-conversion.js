// * 나의 풀이

var convert = function (s, numRows) {
  if (numRows === 1) return s;
  const arr = Array.from({ length: numRows }, () => []);

  let isAsc = true;
  let curRow = 0;
  for (const char of s) {
    arr[curRow].push(char);
    if (curRow === 0 && !isAsc) isAsc = true;
    if (curRow === numRows - 1 && isAsc) isAsc = false;
    isAsc ? curRow++ : curRow--;
  }

  return arr.flat().join('');
};

// * 좋은 풀이

function convert(s, numRows) {
  // 행이 1이거나 문자열 길이가 numRows보다 작으면 원래 문자열 반환
  if (numRows === 1 || s.length <= numRows) {
    return s;
  }

  // 각 행을 저장할 배열 초기화
  const rows = Array(numRows).fill('');

  // 현재 행과 방향을 추적
  let currentRow = 0;
  let goingDown = true;

  // 문자열의 각 문자를 적절한 행에 추가
  for (let char of s) {
    rows[currentRow] += char;

    // 방향 전환이 필요한지 확인
    if (currentRow === 0) {
      goingDown = true;
    } else if (currentRow === numRows - 1) {
      goingDown = false;
    }

    // 다음 행으로 이동
    currentRow += goingDown ? 1 : -1;
  }

  // 모든 행을 하나의 문자열로 합침
  return rows.join('');
}
