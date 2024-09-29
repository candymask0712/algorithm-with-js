// 나의 답안
function solution(n){
  let answer
  let dp = Array.from({ length: n + 1}, () => 0)

  dp[1] = 1
  dp[2] = 2

  for(let i=3; i<=n+1; i++){
   dp[i] = dp[i-1] + dp[i-2]
   console.info(i, dp[i])
  }

  answer = dp[n+1]
  console.info(dp)
  return answer
}

console.info(solution(7))