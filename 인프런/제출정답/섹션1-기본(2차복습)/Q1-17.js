// 모범 답안
function solution(s) {
  let answer;
  answer = s.filter((v, i) => {
    // s.filter(function(v,i){
    // });
    // filter 함수를 사용하면 함수안에서 v(요소), i(요소의 인덱스 번호) 반복문이 돌아감
    // function (v, i) {} 는 (v, i)=>{} 로도 표현할 수 있다
    if (s.indexOf(v) === i) return v;
  });
  return answer;
}
let str = ['good', 'time', 'good', 'time', 'student'];
console.log(solution(str));

// 4차- 정답

let solution = (arr) => {
  return arr.filter((el, i) => arr.indexOf(el) == i);
};

// * 3차 답안 - 일반적인 for문 풀이
let solution = (arr) => {
  let answer = [];
  for (let i = 0; i < arr.length; i++) {
    if (arr.indexOf(arr[i]) === i) answer.push(arr[i]);
  }
  return answer;
};

// * 2차 답안 - Set 객체 이용 가장 간단하게 풀이
let solution = (arr) => {
  return Array.from(new Set(arr));
};

console.log(solution(['good', 'time', 'good', 'time', 'student'])); // [good, time, student]

// 1차 답안 - 2차 답안 없음 (풀이 실패)
let killer = function (t) {
  answer = [];
  for (i = 0; i < 5; i++) {
    if (i != t.indexOf(t[i])) answer.push(t[i]);
    console.log(i, t[i], t.indexOf(t[i]));
  }
  return answer;
};
let s = ['good', 'time', 'good', 'time', 'student'];
console.log(killer(s));
