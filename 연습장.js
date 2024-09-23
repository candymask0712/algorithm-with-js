// ! 투포인터 문제
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

// ! 체스 문제
// function solution(n){
//   let answer = 0

//   const chessboard = Array.from({length: n}, ()=> Array(n).fill(0))
//   console.log(chessboard)

//   function DFS(queenNum, start){
//     console.table(JSON.parse(JSON.stringify(chessboard)))
//     if(queenNum === 4){
//       answer++
//     }else{
//       for(let i=start[0]; i<n; i++){
//         for(let j=start[1]; j<n; j++){
//           if(chessboard[i][j] === 0 && isValidPosition(i,j,n, chessboard)) {
//             chessboard[i][j] = 1
//             DFS(queenNum + 1, [i, j+1])
//             chessboard[i][j] = 0
//           }
//         }
//       }
//     }
//    }
//    DFS(0, [0,0])

//   return answer
// }

// function isValidPosition(i, j, n, chessboard) {
//   // for(let a=i-n; a<=i+n; a++){
//   //   for(let b=j-n; b<=j+n; b++){
//   //     if(a>=0 && a<n && b>=0&& b<n) {
//   //       if(chessboard[a][b] === 1) return false
//   //     }
//   //   }
//   // }
//   const isValid = (x,y) => x>=0 && x<n && y>=0 && y<n
//   for(let k=0; k<n; k++){
//    if(chessboard[i][k] || chessboard[k][j]) return false
//    if(isValid(i-k, j-k) && chessboard[i-k][j-k]) return false
//    if(isValid(i+k, j+k) && chessboard[i+k][j+k]) return false
//    if(isValid(i+k, j-k) && chessboard[i+k][j-k]) return false
//    if(isValid(i-k, j+k) && chessboard[i-k][j+k]) return false
//   }
//   return true
// }

// console.info(solution(4))

function combinationsWithRepetition(arr, n) {
  if (n === 1) return arr.map((v) => [v]);
  const result = [];

  arr.forEach((fixed, idx, arr) => {
    const rest = arr.slice(idx);
    const combis = combinationsWithRepetition(rest, n - 1);
    const combine = combis.map((v) => [fixed, ...v]);
    result.push(...combine);
  });

  return result;
}


function solution(n, info) {
  let maxdiff = 0;
  let maxComb = {};

  // ➊ 가능한 라이언의 과녁점수 조합의 모든 경우에 대해서 체크 
 const options = Array.from({length: 11}, (_, index) => index + 1)
 console.log(options)
 const allCases = combinationsWithRepetition(options, n)   
 
 for(let caseArr of allCases) {
  const score = calculateScores(caseArr, info)
  maxdiff = Math.max(maxdiff, score)
 }
    
  // ➋ 주어진 조합에서 각각의 점수 계산
  function calculateScores(caseArr, info) {
      let scores = 0
      const target = Array(11).fill(0)
      caseArr.forEach(score => {
        target[score] += 1
      })
      // console.table(target)
      target.forEach((score, index) => {
          const rScore = score
          const aScore = info[index]
          if(rScore === 0 && aScore ===0) {

          }
          else if(rScore > aScore) scores += 10 - index
          else scores -= 10 - index
          // console.info(rScore, aScore, score)
      })
      // console.log(scores)
      if(scores === 34) {
        console.info(target)
      }
      return scores
  }  
  // ➌ 최대 차이와 조합 저장
  // ➍ 최대 차이가 0 이상인 경우, 조합 반환


  console.log(maxdiff)
}

console.info(solution(5, [2,1,1,1,0,0,0,0,0,0,0]))