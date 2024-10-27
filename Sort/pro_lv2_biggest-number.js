// 처음 접근
// 모든 경우의 수를 계산하는 것은 시간 복잡도가 너무 큼(배열길이 10만)
// 가능한 효율적으로 하기위해 큰 순서대로 정렬 후 합치기

// 자리수가 다른 문제를 해결하기 위해 자리수 조건에 따라 경우의 수 나눔 -> 실패

function solution(numbers) {
  // 두 개의 숫자를 순서를 바꿔 합치고 순서 정렬
  var answer = numbers
    .map((v) => v.toString())
    .sort((a, b) => Number(b + a) - Number(a + b));
  answer = answer[0] == '0' ? '0' : answer.join('');
  return answer;
}
