function solution(sequence, k){
  let lp = 0
  let rp = 0
  let sum = sequence[0]
  let length=Number.MAX_SAFE_INTEGER;
  let answer = []

  const n = sequence.length
  let cnt = 0
  while(lp < n && rp < n) {
    cnt++
    // console.info(lp, rp, sum, length, answer)
    // console.info(sum)
    if(sum === k) {
      if(rp-lp < length) {
        answer = [lp, rp]
        length = rp - lp

      }
      sum -= sequence[lp]
      lp++
    }
    else if (sum > k) {
      // if(sequence[lp] < sequence[lp+1]) {
      //   rp = lp
      //   sum = sequence[lp]
      // } else {
      //   sum -= sequence[lp]
      //   lp += 1
      // }
      sum -= sequence[lp]
      lp++
    }
    else  {
      rp++
      sum += sequence[rp]

    }
  }
 return answer
}

console.info(solution([1, 2, 3, 4, 5], 7)) // [2,3]
console.info(solution([1, 1, 1, 2, 3, 4, 5], 5)) // [6,6]
console.info(solution([2, 2, 2, 2, 2], 6)) // [0,2]