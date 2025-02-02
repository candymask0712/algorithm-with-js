// * 모범 답안
function solution(s) {
  let answer;
  // ! let 변수명 = new Map() => '변수명'으로 빈 해쉬맵 선언
  // ! 해쉬.has(이름) => 해쉬가 '이름'에 해당하는 키를 가지고 있는지 T/F 반환
  // ! 해쉬.set(이름, 내용) => 해쉬에서 '이름'에 해당하는 키 만들고 '내용'을 값으로 넣음
  // ! 해쉬.get(이름) => 해쉬에서 '이름'에 해당하는 키의 값을 반환
  let sH = new Map();
  // ! 배열을 돌면서 해쉬값 업데이트
  for (let x of s) {
    if (sH.has(x)) sH.set(x, sH.get(x) + 1);
    else sH.set(x, 1);
  }
  let max = Number.MIN_SAFE_INTEGER;
  // ! 해쉬의 값은 배열 형태로 조회 가능
  for (let [key, val] of sH) {
    if (val > max) {
      max = val;
      answer = key;
    }
  }
  return answer;
}

let str = 'BACBACCACCBDEDE';
console.log(solution(str));

// * 모범 답안 분석
function solution(s) {
  let answer;
  let sH = new Map();
  for (let x of s) {
    if (sH.has(x)) sH.set(x, sH.get(x) + 1);
    else sH.set(x, 1);
  }
  let max = Number.MIN_SAFE_INTEGER;
  for (let [key, val] of sH) {
    if (val > max) {
      max = val;
      answer = key;
    }
  }
  return answer;
}

// * 3차 - 정답

const solution = (str) => {
  let max = 0;
  let answer = '';
  let hash = new Map();
  for (const el of str) {
    if (hash.has(el)) hash.set(el, hash.get(el) + 1);
    else hash.set(el, 1);
  }
  for (const el of hash.keys()) {
    if (hash.get(el) > max) {
      answer = el;
      max = hash.get(el);
    }
  }
  return answer;
};

// * 2차 답안
const solution = (str) => {
  let arr = str.split('');
  let obj = {};
  for (let i = 0; i < arr.length; i++) {
    if (obj[arr[i]]) obj[arr[i]]++;
    else obj[arr[i]] = 1;
  }
  let list = Object.keys(obj);
  numlist = list.map((el) => obj[el]);

  return list[numlist.indexOf(Math.max(...numlist))];
};
let str = 'BACBACCACCBDEDE';
console.log(solution(str)); // C

// * 1차 답안 - 풀이분실
