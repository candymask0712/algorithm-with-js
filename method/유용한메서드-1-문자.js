// ! ✨✨✨✨✨✨✨✨✨✨
// ! ✨✨✨✨문자✨✨✨✨.
// ! ✨✨✨✨✨✨✨✨✨✨

// ! 문자 => 숫자
// let num = Number('1234') // 문자 => 숫자 변환(불가할 경우 NaN 반환).
// let num2 = parseInt('1234') // 문자 => 숫자 변환(숫자로 시작할 경우 가능한 부분까지 변환)
// num = parseInt('1000원'); // num에 1000이 저장
// 문자화된 숫자는 앞에 +붙이면 숫자화 됨
// 그외에도 *1 해서 숫자화도 가능

// ! 문자탐색
// for(let x of str).

for (let i = 0; i < n; i++) {
  for (let j = 0; j < n; j++) {
    for (let k = 0; k < n; k++) {}
  }
}

// ! 문자열 찾기
// 1. charAt(인수) - 인수번째의 문자 반환
// 예) "javascript".charAt(2)에는 'v' 반환

// 2. indexOf(인수) - 인수가 들어있는 위치 반환
// 예) "javascript".indexOf("s")에는 4 반환.

// 3. substring(인수, 인수) - substring은 문자열 반환
// 예) "javascript".substring(1, 3)은 "ava" 반환

// ! 문자열 자르기 (substring, substr, slice)
// *  문자열.substring(시작인덱스[, 종료인덱스-미만])
// 종료 인덱스는 생략 가능하고 생략시 마지막 인덱스로 설정

// * 문자열.substr(시작인덱스[, 길이])
// 길이는 생략 가능하고 생략 시 끝까지

// * 문자열.slice(indexStart, [indexEnd])
// 예시 'ABCDE'

// * 인자 X, 인자 0 => 문자열 복사
console.info('ABCDE'.slice()); // 'ABCDE'
console.info('ABCDE'.slice(0)); // 'ABCDE'

// * 인자 음수
// 뒤에서 2번째 (-2) 부터 끝까지
console.info('ABCDE'.slice(-2)); // 'DE'
// 뒤에서 3번째 (-3) 부터 뒤에서 1번째(-1)까지
console.info('ABCDE'.slice(-3, -1)); // 'CD'
// 앞에서 1번째 부터 뒤에서 2번째까지
console.info('ABCDE'.slice(1, -2)); // 'BC'

// * 인자 양수
// 1번째 인덱스부터 끝까지, 종료 인덱스가 생략된 형태
console.info('ABCDE'.slice(1)); // 'BCDE'

// ! 대문자화 / 소문자화 (toLowerCase, toUpperCase)
// toLowerCase() / toUpperCase()
// "문자열".toLowerCase() 처럼 괄호안이 아닌 앞에 붙음
// 메서드 명이 스네이크 케이스로 중간에 대문자 포함, 마지막에 괄호도 주의

// ! 이진법 다루기 (toString)
// | : single vertical bar (이진수로 변환 후 각 자리 버림합한 결과 리턴)
// str.tostring(n) : 숫자를 문자화 (n은 옵션 - n진법으로 변환)

// ! 문자열 반복 (repeat)
//  let A = "수박".repeat(3); // "수박수박수박"

// ! 문자열을 원하는 길이만큼 특정 문자로 채우기 (padStart, padEnd)
// * 두 메서드 모드 이미 str길이가 n인 경우 더이상 채우지 않음
// * abc'.padEnd(6, 'HA') => 'abcHAH' 이런식으로 채워야 할 문자열이 너무 긴 경우 일부라도 채움
// str.padStart(n, str) : 문자를 n길이만큼 str문자로 앞에서 부터 채움
// str.padEnd(n, str) : 문자를 n길이만큼 str문자로 뒤에서 부터 채움

// ! 문자의 배열화 (split)
// str.split('')
// [...'str']
// [...'abc'] => ['a','b','c']

// ! toString()과 String()의 차이
// * String()
// 입력값의 타입(null, undefined)이 불확실할 때

// * toString()
// 숫자의 진수 변환이 필요할 때
// 값이 항상 존재함을 보장하고 싶을 때 (null, undefined 입력 시 에러 발생)
