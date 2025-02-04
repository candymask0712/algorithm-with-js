// 모범 답안
function isPrime(num) {
  if (num === 1) return false;
  for (let i = 2; i <= parseInt(Math.sqrt(num)); i++) {
    if (num % i === 0) return false;
  }
  return true;
}
function solution(arr) {
  let answer = [];
  for (let x of arr) {
    let res = 0;
    while (x) {
      let t = x % 10;
      res = res * 10 + t;
      x = parseInt(x / 10);
    }
    if (isPrime(res)) answer.push(res);
  }
  return answer;
}

let arr = [32, 55, 62, 20, 250, 370, 200, 30, 100];
console.log(solution(arr));

// 3차 - 성공
function solution(arr) {
  const answer = [];
  arr.forEach((el) => {
    let reversedNum = Number(String(el).split('').reverse().join(''));
    if (isOddNum(reversedNum)) answer.push(reversedNum);
  });
  return answer;
}
function isOddNum(num) {
  if (num <= 1) return false;
  for (let i = 2; i < num; i++) {
    if (num % i === 0) return false;
  }
  return true;
}

// 2차 풀이 - 성공

function solution(arr) {
  answer = [];
  // ! 고차함수 사용하려다 풀이 지연 됨
  // ! map(원 배열의 길이만큼 리턴하기 때문에 안됨)
  // ! filter(기준대로 원 요소를 리턴하기 때문에 안됨)
  // ! 그냥 모범 답안처럼 for...of 문을 사용하는 것이 가장 좋음
  arr.forEach((el) => {
    let nv = Number(String(el).split('').reverse().join(''));
    // ! 소수 판별 식에도 부족한 부분 존재
    // ! 1) 숫자 1이 들어오는 엣지 케이스를 생각하지 못함
    // ! 2) n을 판별할 때 Math.sqrt(n)이 아닌 n-1까지 순회해서 비효율적 코드
    for (let i = 2; i < nv; i++) if (nv % i === 0) return;
    if (nv > 1) answer.push(nv);
  });
  return answer;
}

console.log(solution([32, 55, 62, 20, 250, 370, 200, 30, 100]));

// 1차 풀이 - 실패

let arr = [32, 55, 62, 20, 250, 370, 200, 30, 100];
let rePrime = function (t) {
  return;
};
console.log(rePrime(arr));
