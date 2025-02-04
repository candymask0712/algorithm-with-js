// 모범답안
function solution(a, b, c) {
  let answer = 'YES',
    max;
  let tot = a + b + c;
  if (a > b) max = a;
  else max = b;
  if (c > max) max = c;
  if (tot - max <= max) answer = 'NO';
  return answer;
}

console.log(solution(13, 33, 17));

// 3차 풀이 - 성공 (23.01.31)
const solution = (a, b, c) => {
  const arr = [a, b, c].sort((a, b) => a - b);
  // ! 처음에 조건을 정확히 읽지 않아 참/거짓으로 반환
  return arr[2] <= arr[1] + arr[0] ? 'YES' : 'NO';
};

// 2차 풀이 - 성공(배열의 정렬 이용해 간소화)
const solution = (a, b, c) => {
  let arr = [a, b, c];
  arr.sort((a, b) => a - b);
  if (arr[2] < arr[0] + arr[1]) return true;
  else return false;
};

console.log(solution(6, 7, 11));
console.log(solution(13, 33, 17));

// 1차 답안 - 아예 삼각형의 정의(가장 긴변 < 나머지 두 변의 합)과 다른 답안
function solution(a, b, c) {
  if (a * a + b * b === c * c) {
    return '삼각형 가능';
  } else {
    return '삼각형 불가능';
  }
  // 위 해답은 c에 가장 큰 수가 들어갈 때만 유효함
  // 따라서 세 수 중에 가장 큰 변의 길이를 계산하는 식이 필요
}
console.log(solution(13, 33, 17));
