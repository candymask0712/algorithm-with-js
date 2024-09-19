// * 접근 방법
// A와 B의 길이는 1 이상 100,000 이하 => 10초 기준 O(n^2)까지 사용가능




// 나의 최근 풀이 (24.09.18)


// 풀이 과정
// 1차 풀이
function solution(sticker) {
    const answer = [];
    let sum = 0

    function DFS(sticker){
        if(sticker.length <= 3) {
            const max = Math.max(...sticker)
            sum += max
            answer.push(sum)
            sum = 0
            return
        } else {
            const n = sticker.length
            for(let i=0; i<n; i++) {
                const copiedSticker = sticker.slice()
                sum += copiedSticker[i]

                if(i === 0) {
                    copiedSticker.splice(n - 1, 1)
                    copiedSticker.splice(i, 2)
                } else if (i === n - 1) {
                    copiedSticker.splice(i - 1, 2)
                    copiedSticker.splice(0, 1)
                } else {
                    copiedSticker.splice(i - 1, 3)
                }

                DFS(copiedSticker)
            }
        }
    }

    DFS(sticker)

    return Math.max(...answer)
}
