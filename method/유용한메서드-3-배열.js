// ! ✨✨✨✨✨✨✨✨✨✨
// ! ✨✨✨✨배열✨✨✨✨.
// ! ✨✨✨✨✨✨✨✨✨✨

// ! 배열 생성
// * 원시값으로 배열 생성
// * 객체를 넣을 경우 같은 주소를 참조하게 되므로 주의
// 1차원 배열 - 값을 넣지않으면 undefined 할당
Array(n).fill(원하는값);

// 2차원 배열
Array.from({ length: n }, () => Array(n).fill(0));

// * 참조값으로 배열 생성
// 0 ~ n으로 채워진 빈배열 (길이 n+1)
Array.from({ length: n + 1 }, (v, i) => i + 1);
[...Array(n + 1).keys()];

// ! 배열 합치기
// arr1 = arr1.concat(arr2)

// ! 원소 추가/추출
// Push, pop - 마지막에서 넣기, 꺼내기
// unshift, shift - 처음에서 넣기, 꺼내기

// ! 배열 정렬
// * arr.sort()
// sort()는 기본적으로 오름차순 정렬 (1-9, a-z, A-Z, 문자는 대문자 -> 소문자 순서 (A-Z가 a-z 보다 앞에 위치))
// 유니코드 코드 포인트 순서에 따라 정렬

// * 비교함수
// arr.sort([compareFunction])
// 현재 a는 앞에 있는 숫자, b는 뒤에 있는 숫자
// 반환값이 0보다 작다면 a를 b보다 낮은 색인에 배치 (a가 b보다 먼저 나옴)
// 반환값이 0이라면 a와 b의 순서를 변경하지 않음
// 반환값이 0보다 크다면 b를 a보다 낮은 색인에 배치 (b가 a보다 먼저 나옴)

// 뺄셈 정렬이 안되 비교 정렬로 바꿔서 풀이
// sort((a,b)=>{
//   if (a > b) return -1;
//   else if (b > a) return 1;
//   else return 0;
// }

// * 다중조건
// 2차원 배열
// arr.sort((a, b) => {
//   if (a[0] === b[0]) return a[1] - b[1];
//   else return a[0] - b[0];
// });

// * 문자 정렬
//  a.localeCompare(b) : a, b의 사전순에 따라 값 배출
//  a가 앞서는 단어면 -1 또는 -2
//  b가 앞서는 단어면  1 또는 2
//  동일하면 0

// ! 배열 => 문자
// let 변수 = 배열.join() // 배열 원소를 , 구분자로 치환
// let 변수 = 배열.join('') // 배열 원소를 구분자 없이 치환

// ! slice
//  let A = arr.slice(st, end); // st 이상 end '미만' 자름 / 원배열 수정 X (할당 필요)
//  let B = arr.slice(n); // n번째 요소부터(n포함) 마지막 요소까지 잘라냄

// ! 중복 제거
// 중복이 없는 Set 객체에 넣고 다시 배열화하여 중복제거
// arr = Array.from(new Set(arr));

// ! 깊은복사/얕은복사
// 얕은 복사 : 같은 주소 참조
// 깊은 복사 : 별도의 주소 공간 존재
// 복사 방법 1 - arr2 = [...arr] : 1레벨까지는 값을, 2레벨 이상 부터는 같은 주소 참조) (slice, concat, spread, Array.from)
// 복사 방법 2 - arr2 = JSON.parse(JSON.stringify(arr))) : 모든 레벨에서 값을 복사 (재귀, JSON, lodash패키지)
// https://developer-talk.tistory.com/86

// ! break/continue
// break - 중간에 반복문을 중단하고 빠져나옴
// continue - 중간에 해당 요소만 건너뛰고 반복문 진행
// https://mainia.tistory.com/934

// ! 배열 평탄화
// arr.flat([depth]). [depth]는 옵션(기본값은 1)

// ! 요소 찾기
// includes - 배열이 특정요소를 포함하고 있는지 확인, boolean을 반환
const fruits = ['apple', 'banana', 'mango', 'orange'];
const includesBanana = fruits.includes('banana');
console.log(includesBanana); // true

// some - 배열의 하나 이상의 요소가 주어진 함수에 의해 구현된 테스트를 통과하는지 확인, boolean을 반환
const numbers = [1, 3, 5, 7, 9];
const hasOddNumber = numbers.some((number) => number % 2 !== 0);
console.log(hasOddNumber); // true

// some - 배열의 모든 요소가 주어진 함수에 의해 구현된 테스트를 통과하는지 확인, boolean을 반환
const ages = [18, 20, 22, 25, 30];
const allAdults = ages.every((age) => age >= 18);
console.log(allAdults); // true

// find - 주어진 테스트 함수를 만족하는 배열의 첫번째 요소를 반환, 만족하는 요소가 없으면 undefined를 반환
s;
s;
