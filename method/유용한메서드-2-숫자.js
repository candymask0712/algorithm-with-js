// ! ✨✨✨✨✨✨✨✨✨✨
// ! ✨✨✨✨숫자✨✨✨✨
// ! ✨✨✨✨✨✨✨✨✨✨
// ! 숫자 => 문자
// 숫자 + "" 하면 문자화 됨
// num.toString()ㅇㅇㅇ
// String(num)

// ! 숫자 판별
// isNaN(x)
// isNaN(x) x가 숫자가 아니면 T, 숫자면 F.
// isNAN(x) 는 문자형태로 되어 있는 숫자도 판별 가능

// ! 숫자의 내림/올림
// const A = Math.floor(n / 2); // 내림
// const A1 = ~~n // 내림 (소수점 제거)
// 비트 단위 NOT 연산자(~)를 두 번 수행하면서 정수 부분만 남음
// 32비트 정수(21억, 2,147,483,647) 초과의 큰 값에서는 사용하면 안 됨

// const B = Math.ceil(n / 2); // 올림
// const C = Math.round(n / 2); // 반올림

// ! 숫자 거꾸로 하기
// Number(String(el).split('').reverse().join(''));

// ! 10진법 => n진법화
// (num).toString(n)

// ! n진법(문자) => 10진법화
// parseInt('(n진법으로 표현 된 문자)', n)
// 이 과정에서 '0021'처럼 0으로 시작하는 부분은 자연히 제거 됨

// ! 제곱 표현
// Math.pow(대상숫자, 제곱수)
// 대상숫자**제곱수
// 위 두 방법은 동일하나 **는 BigInt를 추가로 다룰 수 있음


function solution(A) {
  let answer = 1
  const n = A.length
  const ch = Array(n+2).fill(false)

  for(let i =0; i<A.length; i++) {
      const num = A[i]
      if(num > 0) {
          ch[num] = true 
      }
  }

  for(let i =1; i<ch.length; i++) {
      if(ch[i] === false) {
          answer = i
          return answer
      }
  }
  return answer
}

function solution(A) {
  A.sort((a,b)=> a-b)
  let answer = 1
  for(let i =0; i<A.length; i++) {
  if(A[i] === answer) {
  answer++
  }
  }
  return answer
  }

  function solution(A) {
    for(let i=0; i<A.length; i++){
        const current = A[i]
        if(A.indexOf(current) === A.lastIndexOf(current)){
            return current
        }
    }
    return -1
}