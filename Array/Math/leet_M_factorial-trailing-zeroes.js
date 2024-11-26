// 나의 풀이

/**
 * @param {number} n
 * @return {number}
 */
var trailingZeroes = function (n) {
  // let result = 1
  // for(let num=1; num<=n; num++){
  //     result *= num
  // }

  // console.log(result)
  // result = String(result)
  // if(result[0]==='0') return 0
  // let answer = 0

  // for(let i=result.length-1; i>=0; i--) {
  //     if(result[i] === '0') answer++
  //     else return answer
  // }

  // return answer
  let count = 0;

  // n을 5로 나누면서 5의 거듭제곱의 개수를 세기
  let result = 0;

  // 5의 거듭제곱으로 나누면서 카운트
  for (let i = 5; i <= n; i *= 5) {
    result += Math.floor(n / i);
  }

  return result;
};

// 모범 풀이
