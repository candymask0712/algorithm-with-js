// 첫번째 풀이
function solution(food) {
  var answer = '';
  const n = food.length;
  for (let i = 1; i < n; i++) {
    let foodCount = food[i];
    if (foodCount <= 1) continue;
    if (foodCount % 2 === 1) foodCount--;

    answer += String(i).repeat(foodCount / 2);
  }
  const reversed = answer.split('').reverse().join('');

  return answer + '0' + reversed;
}

// 추가풀이
function solution(food) {
  let res = '';
  for (let i = 1; i < food.length; i++) {
    // Math.floor로 1이하와 홀수 경우 한번에 처리
    res += String(i).repeat(Math.floor(food[i] / 2));
  }
  // 문자열을 ... 연산자로 배열화
  return res + '0' + [...res].reverse().join('');
}
