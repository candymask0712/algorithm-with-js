function solution(str1, str2){
  let answer
  const n = str1.length
  const m = str2.length
  // ! DP의 특성상 i - 1 처럼 이전요소를 참조하는 경우가 있어서 1부터 시작
  let dp = Array.from(Array(n+1), ()=>Array(m+1).fill(0))
  
  // ! DP의 특성상 i - 1 처럼 이전요소를 참조하는 경우가 있어서 1부터 시작
  for (let i = 1; i <= n; i++) {
    for (let j = 1; j <= m; j++) {
      const char1 = str1[i-1]
      const char2 = str2[j-1]

      if (char1 === char2) {
        dp[i][j] =  dp[i-1][j-1] + 1
      } else {
        dp[i][j] = Math.max(dp[i-1][j], dp[i][j-1])
      }
    }
  }
  // ! 불필요한 식이고 dp[n][m]이 최대 길이임
  return Math.max(...dp.map(row => Math.max(...row)))
}

console.log(solution("ABCBDAB","BDCAB")) // 4
console.log(solution("AGGTAB","GXTXAYB")) // 4