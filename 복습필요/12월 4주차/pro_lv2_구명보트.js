// * 문제

// * 모범 답안
function solution(people, limit) {
  var answer = 0;
  people.sort((a, b) => a - b);
  const n = people.length;
  let lp = 0;
  let rp = n - 1;
  while (lp <= rp) {
    if (people[lp] + people[rp] <= limit) lp++;
    rp--;
    answer++;
  }

  return answer;
}

// * 3차 풀이 - (25.10.18) - 성공
// ? 시간복잡도: O(n log n)
// ? 공간복잡도: O(1)
function solution(people, limit) {
  var answer = 0;
  people.sort((a, b) => a - b);
  const n = people.length;
  let lp = 0;
  let rp = n - 1;
  while (lp <= rp) {
    // ! 굳이 별도 변수 만들지 않고 모범답안처럼 간결하게 작성 가능
    let curLimit = limit;
    curLimit -= people[rp];
    rp--;
    if (people[lp] <= curLimit) {
      lp++;
    }
    answer++;
  }

  return answer;
}

// * 2차 풀이

function solution(people, limit) {
  var answer = 0;

  people.sort((a, b) => b - a);
  const n = people.length;
  let lp = 0;
  let rp = n - 1;

  // ! 이번에드 = 를 붙이는 판단이 늦어서 풀이 지연
  while (lp <= rp) {
    // * 이전에 비해 조건 간소화
    if (people[lp] + people[rp] <= limit) {
      rp--;
    }
    lp++;
    answer++;
  }

  return answer;
}

// * 1차 풀이

function solution(people, limit) {
  var answer = 0;

  people.sort((a, b) => b - a);
  const n = people.length;
  let lp = 0;
  let rp = n - 1;

  // ! 처음에는 = 부호 사용하지 않음
  // ! rp에 변동이 없이 한 명씩만 싣는 경우 = 경우 생김
  while (lp <= rp) {
    if (people[lp] + people[rp] <= limit) {
      lp++;
      rp--;
    } else {
      lp++;
    }
    answer++;
  }

  return answer;
}
