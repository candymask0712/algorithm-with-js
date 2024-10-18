function solution(n, soldiers) {
  let answer = 0
  for(let i=0; i<n; i++){
   if(soldiers[i]<= soldiers[i+1]) answer++
  }
  return answer
}

console.info(solution(7, [15, 11, 4, 8, 5, 2, 4]))
console.info(solution(7, [4, 2, 5]))