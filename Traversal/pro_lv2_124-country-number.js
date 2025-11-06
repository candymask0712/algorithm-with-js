//

function solution(n) {
    const numbers = [4, 1, 2];
    let answer = '';
    
    while (n > 0) {
        answer = numbers[n % 3] + answer;
        n = Math.floor((n - 1) / 3);
        console.log(answer, n)
    }
    
    return answer;
}
