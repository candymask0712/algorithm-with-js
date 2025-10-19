// (0,0)(0,1)
// (1,0)(1,1)

// 00 01 10 11

// (0,0)(0,1)(0,2)
// (1,0)(1,1)(1,2)
// (2,0)(2,1)(2,2)

// 00 01 02 12 22 21 20 10 11

// (0,0)(0,1)(0,2)(0,3)
// (1,0)(1,1)(1,2)(1,3)
// (2,0)(2,1)(2,2)(2,3)
// (3,0)(3,1)(3,2)(3,3)
// 00 01 02 03 13 23 33 32 31 30 20 10 11 12 22 21

// ! 깊은복사 콘솔
// console.log('q',JSON.parse(JSON.stringify(q)))

for (let i = 0; i < n; i++) {}
// ! 소수판별
function isPrime(num) {
  if (num < 2) return false;
  if (num === 2) return true;
  for (let i = 2; i <= Math.sqrt(num); i++) {
    if (num % i === 0) return false;
  }
  return true;
}

// ! 최대 공약수-GCD (유클리드 호제법: Euclidean algorithm)
// a와 b의 최대공약수는, b와 (a를 b로 나눈 나머지)의 최대공약수와 같다.
function gcd(m, n) {
  if (m % n === 0) return n;
  return gcd(n, m % n);
}

// ! 최소 공배수-LCM (유클리드 호제법: Euclidean algorithm)
function lcm(a, b) {
  return (a * b) / gcd(a, b);
}

// ! 특정요소가 n개 이상인 숫자/문자열 거르기
for (let i = 0; i < stuffArr.length; i++) {
  const element = String(stuffArr[i])
    .split('')
    .filter((e) => e === '0');
  if (element.length <= 2) {
    freshArr.push(stuffArr[i]);
  }
}

// ! 숫자 배열화 (숫자라서 문자화 후 배열로 전환)
const splitNum = (num) => {
  const digits = num.toString().split('');
  return digits.map((d) => Number(d));
};
