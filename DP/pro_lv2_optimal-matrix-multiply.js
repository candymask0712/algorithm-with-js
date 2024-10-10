//

function solution(matrix_sizes) {
    const n = matrix_sizes.length;
    const dp = Array.from({ length: n }, () => new Array(n).fill(Infinity));
    
    // 초기화: 자기 자신과의 곱셈은 0
    for (let i = 0; i < n; i++) {
        dp[i][i] = 0;
    }
    
    // 행렬 곱셈의 최소 연산 횟수 계산
    for (let len = 2; len <= n; len++) {
        for (let i = 0; i < n - len + 1; i++) {
            const j = i + len - 1;
            for (let k = i; k < j; k++) {
                const cost = dp[i][k] + dp[k+1][j] + matrix_sizes[i][0] * matrix_sizes[k][1] * matrix_sizes[j][1];
                dp[i][j] = Math.min(dp[i][j], cost);
            }
        }
    }
    
    // 전체 행렬 곱셈의 최소 연산 횟수 반환
    return dp[0][n-1];
}
