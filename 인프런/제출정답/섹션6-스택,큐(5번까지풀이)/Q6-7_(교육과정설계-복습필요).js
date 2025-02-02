// * 문제

// * 모범 답안
function solution(need, plan) {
  let answer = 'YES';
  let queue = need.split('');
  for (let x of plan) {
    // ! 필수에 포함 된 요소가 나올때마다 필수요소 배열에서도 하나씩 제거하며 비교
    // ! 추출과 비교를 한번에 하고 순서까지도 정확히 비교 가능
    if (queue.includes(x)) {
      if (x !== queue.shift()) return 'NO';
    }
  }
  // ! 만일 그 외에 필수과목과 이름은 같으나 부가적으로 포함되 있는게 있다면 처리
  if (queue.length > 0) return 'NO';
  return answer;
}

let a = 'CBA';
let b = 'CBDAGE';
console.log(solution(a, b));

// * 모범 답안 분석

// * 3차 답안

// * 2차 - 정답
// ! loop를 모두 돌아야 판별되어 약간 비효율적
function solution(t, s) {
  let arr = t.split('');
  for (const el of s) {
    if (el === arr[0]) arr.shift();
  }
  return arr.length > 0 ? 'NO' : 'YES';
}

// * 1차 답안 - 정답 but 약간 비효율적이고 엣지케이스 대응 부족

function solution(t, s) {
  t = t.split('');
  let tmp = '';
  for (let x of s) {
    if (t.includes(x)) tmp += x;
  }
  if (tmp === t.join('')) return 'YES';
  else return 'NO';
}

let target = 'CBA';
let str = 'CBDAGE';

console.log(solution(target, str));
