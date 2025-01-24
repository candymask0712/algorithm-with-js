// * 첫번째 풀이
function solution(k, tangerine) {
  let list = [];
  tangerine.sort((a, b) => a - b);
  let count = 1;
  for (let i = 0; i < tangerine.length; i++) {
    if (tangerine[i] !== tangerine[i + 1] || i === tangerine.length - 1) {
      list.push(count);
      count = 1;
    } else count++;
  }

  list.sort((a, b) => b - a);

  let sum = 0;
  // ! 기존에는  i < list.lengt 조건
  // ! 모두 종류가 다른 경우에 대한 처리가 불가능
  for (let i = 0; i <= list.length; i++) {
    if (sum >= k) return i;
    else {
      sum += list[i];
    }
  }
}

// * 두번째 풀이
// * 첫번째 풀이보다 퇴보
function solution(k, tangerine) {
  var answer = 0;

  let count = new Map();
  const n = tangerine.length;

  let sum = 1;

  tangerine.sort((a, b) => a - b);

  for (let i = 0; i < n; i++) {
    const current = tangerine[i];
    const next = tangerine[i + 1];
    if (current !== next) {
      count.set(current, sum);
      sum = 1;
    } else {
      sum++;
    }
  }

  const list = [];

  for (const [key, val] of count) {
    list.push(val);
  }

  list.sort((a, b) => b - a);

  // ! 음수가 되었을 때 break 를 해서 리턴부를 하나로 통일하는 것도 좋아보임
  for (const num of list) {
    if (k <= 0) return answer;
    k -= num;
    answer++;
  }
  return answer;
}
