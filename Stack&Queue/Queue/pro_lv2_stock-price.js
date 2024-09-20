// * 접근 방법
// prices 배열의 길이가 최대 100,000 => 10초 기준 O(n) 정도의 알고리즘 사용 가능
// 큐 사용시 실행 속도가 느려 부분적 이중 for문 사용해서 풀이

// * 최근 나의 풀이 (24.09.17)
function solution(prices) {
  var answer = [];
  prices.forEach((price, index) => {
      let seconds = 0
      for(let i=index+1; i<prices.length; i++){
          seconds++
          if(prices[i]<price) break
      }
      answer.push(seconds)
  })
  return answer;
}

// 정확성 테스트

// 테스트 1 〉	통과 (0.06ms, 33.4MB)
// 테스트 2 〉	통과 (0.14ms, 33.5MB)
// 테스트 3 〉	통과 (0.29ms, 33.5MB)
// 테스트 4 〉	통과 (0.31ms, 33.5MB)
// 테스트 5 〉	통과 (0.75ms, 35.7MB)
// 테스트 6 〉	통과 (0.14ms, 33.4MB)
// 테스트 7 〉	통과 (0.22ms, 33.5MB)
// 테스트 8 〉	통과 (0.25ms, 33.5MB)
// 테스트 9 〉	통과 (0.15ms, 33.4MB)
// 테스트 10 〉	통과 (0.75ms, 35.6MB)

// 효율성 테스트

// 테스트 1 〉	통과 (6.44ms, 43.7MB)
// 테스트 2 〉	통과 (5.98ms, 41.9MB)
// 테스트 3 〉	통과 (6.91ms, 44.1MB)
// 테스트 4 〉	통과 (5.59ms, 42.1MB)
// 테스트 5 〉	통과 (5.63ms, 42.5MB)

// * 다른 사람의 풀이 (가장 추천을 많이 받음)

function solution(prices) {
  const answer = new Array(prices.length).fill(0);
  const stack = [];
  let length = prices.length;

  for(let i = 0; i < length; i++) {
    while(stack.length && prices[i] < prices[stack[stack.length - 1]]) {
      let temp = stack.pop();
      answer[temp] = i - temp;
    }
    stack.push(i);
  }

  while(stack.length) {
    let temp = stack.pop();
    answer[temp] = length - temp - 1;
  }

  return answer;
}

// 정확성 테스트

// 테스트 1 〉	통과 (0.05ms, 33.1MB)
// 테스트 2 〉	통과 (0.16ms, 32.6MB)
// 테스트 3 〉	통과 (0.25ms, 32.7MB)
// 테스트 4 〉	통과 (0.28ms, 33.1MB)
// 테스트 5 〉	통과 (0.29ms, 33.5MB)
// 테스트 6 〉	통과 (0.14ms, 33.1MB)
// 테스트 7 〉	통과 (0.23ms, 33.4MB)
// 테스트 8 〉	통과 (0.24ms, 33.4MB)
// 테스트 9 〉	통과 (0.14ms, 33.5MB)
// 테스트 10 〉	통과 (0.31ms, 33.4MB)

// 효율성  테스트

// 테스트 1 〉	통과 (23.19ms, 43.2MB)
// 테스트 2 〉	통과 (24.63ms, 41.6MB)
// 테스트 3 〉	통과 (24.93ms, 43.9MB)
// 테스트 4 〉	통과 (4.03ms, 42.2MB)
// 테스트 5 〉	통과 (3.78ms, 42MB)

// 후기
// 다른 사람의 풀이가 특별히 효율적이지 않은 것 같아 따로 참고하지는 않았음