// * 문제
// 정수 N을 입력받아 1부터 N까지의 숫자 중에서 합이 10이 되는 조합을 배열로 반환하는 solution 함수를 작성하세요

// * 케이스
// console.info(solution(5)) // [[1,2,3,4], [1,4,5], [2,3,5]]
// console.info(solution(2)) // []
// console.info(solution(7)) // [[1,2,3,4,], [1,2,7], [1,3,6], [1,4,5], [2,3,5], [3,7], [4,6]]


// * 나의 풀이 (24.09.23)
function solution(n){
  const answer = []
  const arr = Array.from({length: n+1}, ()=>0)
  const isUsed = arr.slice()
  function DFS(nums, isUsed, sum){
    console.info(nums, isUsed, sum)
    if(sum >= n){
      console.info(1)
      if(sum===n) {
        answer.push(nums)
      }
      isUsed = arr.slice()
      return
    }else{
      for(let i=1; i<=n; i++){
       if(isUsed[i]) continue
        nums.push(i)
        const newSum = sum + i
        isUsed[i] = 1
        DFS(nums, isUsed ,newSum)
      }
    }
   }
   DFS([], isUsed, 0)
   return answer
}

// 모범 답안

function solution(n){
  const answer = []

  // ! 사용여부를 기억하는 start 변수와
  function DFS(sum, selectedNums, start){

      if(sum===10) {
        answer.push(selectedNums)
        return
    }

        // ! start 이후의 숫자만 고려하여 숫자의 사용여부 필터링
      for(let i=start; i<=n; i++){
        if(sum + i <= 10) {
          // ! 배열.concat(인자) 를 사용해 최소한의 코드로 복사배열 입력
          DFS(sum+i, selectedNums.concat(i), i+1)
        }
      }

   }
   DFS(0, [], 1)
   return answer
}

