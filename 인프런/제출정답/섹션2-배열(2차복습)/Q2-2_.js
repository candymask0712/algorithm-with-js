// 모범답안 - i번째 사람이 앞에서부터 가장 큰 사람인 경우에만 countƒ
// <-> 2차 풀이 - 전체 인원 중 i번째 사람 기준 더 앞에 있는 사람이 있는 경우에는 -1ƒ
// 2차 풀이는 이중 for문이 필요해 모범 답안이 더 우순

function solution(arr) {
  let answer = 1,
    max = arr[0];
  for (let i = 1; i < arr.length; i++) {
    if (arr[i] > max) {
      answer++;
      max = arr[i];
    }
  }
  return answer;
}

// 4차 - 정답
function solution(arr) {
  let minHeight = 0;
  return arr.reduce((total, el) => {
    if (el > minHeight) {
      minHeight = el;
      return total + 1;
    } else {
      return total;
    }
  }, 0);
}

// 3차 풀이 - 정답
function solution(arr) {
  let answer = 0;
  let max = 0;
  for (let x of arr) {
    if (x > max) {
      answer++;
      max = x;
    }
  }

  return answer;
}

// 2차 풀이

let findNumOfStudent = function (t) {
  answer = t.length;
  for (let i = 0; i < t.length; i++) {
    for (let j = 0; j < i; j++) {
      if (arr[j] >= arr[i]) {
        // 같다 조건을 설정하지 않음 (문제에 명시)
        // 문제에 없더라도 같은 경우에 대한 처리는 항상 주의 필요
        answer -= 1;
        break;
      }
    }
  }
  return answer;
};
const arr = [130, 135, 148, 140, 145, 150, 150, 153];
console.log(findNumOfStudent(arr));

// 1차 풀이 (없음)
