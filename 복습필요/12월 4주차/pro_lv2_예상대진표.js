// * 첫 번째 풀이
function solution(n, a, b) {
  let round = 1;
  // while 조건은 두 명의 번호가 같아질 때 까지 반복
  // 숫자가 같아졌다는 것은 이전 라운드에서 만났다는 의미
  // ! 아래 조건은 a!==b로 처리 가능
  while (Math.ceil(a / 2) !== Math.ceil(b / 2)) {
    a = Math.ceil(a / 2);
    b = Math.ceil(b / 2);
    round++;
  }
  return round;
}
