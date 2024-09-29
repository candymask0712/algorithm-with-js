function solution(str1, str2){
  let answer
  const n = str1.length
  const m = str2.length
  let dp = Array.from(Array(n+1), ()=>Array(m+1).fill(0))

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

  console.table(dp)

  return Math.max(...dp.map(row => Math.max(...row)))
}


console.log(solution("ABCBDAB","BDCAB")) // 4
console.log(solution("AGGTAB","GXTXAYB")) // 4