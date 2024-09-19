// * 접근 방법
// bridge_length 배열의 길이가 최대 10,000 => 10초 기준 O(n^2)까지 사용가능


// * 최근 나의 풀이 (24.09.17)
function solution(bridge_length, weight, truck_weights) {
  var answer = 0;
  const bridge = Array.from({length: bridge_length}, () => null)

  while(getTotalCarOnBridge(bridge) || truck_weights.length) {
      const nextCar = truck_weights[0]
      bridge.shift()

      if(nextCar && weight -  getTotalWeightOnBridge(bridge) >= nextCar && getTotalCarOnBridge(bridge) < bridge_length) {
          truck_weights.shift()
          bridge.push(nextCar)
      } else {
         bridge.push(null)
      }
      answer++

  }

  return answer;
}

function getTotalCarOnBridge(bridge) {
  const totalCount = bridge.filter(car => car !== null).length
  return totalCount
}

function getTotalWeightOnBridge(bridge) {
  const totalWeight = bridge.reduce((sum, car) => {
      if(car !== null) return sum + car
      else return sum
  }, 0)
  return totalWeight
}