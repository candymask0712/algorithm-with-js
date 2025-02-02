// 모범답안 - Math.ceil(올림)을 이용해 한 번에 계산
function solution(n) {
  let answer;
  answer = Math.ceil(n / 12);
  return answer;
}

// 5차 - 성공 (23.01.31)
const solution = (n) => {
  // ! Math.ceil 이용해 간단히 표현 가능
  return n % 12 === 0 ? parseInt(n / 12) : parseInt(n / 12) + 1;
};

// 4차 답안 (성공) - Math.ceil 이용해 가장 간단하게 표현
const solution = (n) => {
  return Math.ceil(n / 12);
};

// 3차 답안 - 12로 나눈 후 몫만 계산하여, 사람 수가 12의 배수일 때만 따로 계산
function solution(n) {
  let answer = parseInt(n / 12);
  if (n % 2 !== 0) answer += 1;
  return answer;
}

// 2차 답안 - 다스 단위로 개봉해서 분배해야 하므로 사람 수가 12의 배수일 때의 경우를 고려해야 함
function solution(n) {
  let answer;
}

// 1차 답안
function solution(n) {
  var das = parseInt(n / 12) + 1;
  if (n % 12 === 0) {
    return das - 1;
  } else {
    return das;
  }
}
