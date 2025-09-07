
function solution(stones, k) {
  var answer = 0
  
  let lp = 0
  let rp = 200000000
  
  while(lp<=rp) {
      const mid = parseInt((lp + rp)/2)
      if(isPossible(mid, stones, k)) {
          lp = mid+1
          answer = Math.max(answer, mid)
      }
      else rp = mid-1
  }
  
  return answer
}

function isPossible(friends, stones, k) {
  let forbidden = 0
  const n = stones.length
  for(let i=0; i<n; i++){
      if(stones[i] < friends) forbidden++
      else forbidden = 0
      
      if(forbidden >= k) return false
  }
  return true
}