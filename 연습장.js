// function solution(sequence, k){
//   let lp = 0
//   let rp = 0
//   let sum = sequence[0]
//   let length=Number.MAX_SAFE_INTEGER;
//   let answer = []

//   const n = sequence.length
//   let cnt = 0
//   while(lp < n && rp < n) {
//     cnt++
//     // console.info(lp, rp, sum, length, answer)
//     // console.info(sum)
//     if(sum === k) {
//       if(rp-lp < length) {
//         answer = [lp, rp]
//         length = rp - lp

//       }
//       sum -= sequence[lp]
//       lp++
//     }
//     else if (sum > k) {
//       // if(sequence[lp] < sequence[lp+1]) {
//       //   rp = lp
//       //   sum = sequence[lp]
//       // } else {
//       //   sum -= sequence[lp]
//       //   lp += 1
//       // }
//       sum -= sequence[lp]
//       lp++
//     }
//     else  {
//       rp++
//       sum += sequence[rp]

//     }
//   }
//  return answer
// }

// console.info(solution([1, 2, 3, 4, 5], 7)) // [2,3]
// console.info(solution([1, 1, 1, 2, 3, 4, 5], 5)) // [6,6]
// console.info(solution([2, 2, 2, 2, 2], 6)) // [0,2]


function solution(k, dungeons) {
  // const n = dungeons.length
  // let isVisited = Array.from({length:n+1}, ()=>0)
  // let minHealth = Math.min(...dungeons.map(([min, use])=> min))
  let answer = 0

  function DFS(health, dungeons, clearedNum){
    // console.info(health,clearedNum)
    // console.info('arr',JSON.parse(JSON.stringify(dungeons)))
    if(dungeons.length===0){
      answer = Math.max(answer, clearedNum)
      return
    }

    dungeons.forEach(([minHealth, useHealth], index)=>{
      if(minHealth <= health) {
        const afterHealth = health - useHealth
        // console.warn('')
        // console.table(dungeons)
        const copiedDungeon = JSON.parse(JSON.stringify(dungeons))
        // console.table(copiedDungeon)
        copiedDungeon.splice(index, 1)
        // console.warn('')

        const filteredDungeons = copiedDungeon.filter(([minHealth, useHealth])=>{
          if(afterHealth - minHealth >= 0) return true
          else return false
        })
        DFS(afterHealth, filteredDungeons, clearedNum + 1)
      }
    })

    }
  DFS(k, dungeons, 0)

  return answer
}

console.info(solution(80, [[80,20],[50,40],[30,10]])) // 3