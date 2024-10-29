function solution(n, distances, prices) {
  return prices.reduce((acc, price, index) => {
    console.info(acc, price, index)
      
      if(index === prices.length -1) return acc
      else return acc + distances[index]*price
  }, 0)
}

console.info(solution(4, [2,3,1], [5,2,4,1])) // 18
console.info(solution(4, [3,3,4], [1,1,1,1])) // 10