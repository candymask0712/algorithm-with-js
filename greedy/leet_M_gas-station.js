// /**
//  * @param {number[]} gas
//  * @param {number[]} cost
//  * @return {number}
//  */
// var canCompleteCircuit = function(gas, cost) {
//     for(let i=0; i<gas.length; i++) {
//         if(gas[i]===0) continue
//         if(isPossibleStartIndex(i, gas, cost)) return i
//     }
//     return -1
// };

// function isPossibleStartIndex(startIndex, gas, cost) {
//     const n = gas.length
//     let myGas = 0
//     // console.log(startIndex, gas, cost)
//     for(let i=0; i<n; i++) {
//         const currentIndex = (startIndex + i) % n
//         const currentGas = gas[currentIndex]
//         const currentCost = cost[currentIndex]

//         myGas += currentGas
//         myGas -= currentCost
//         // console.log(currentIndex,currentGas,currentCost ,myGas)
//         if(myGas < 0) return false
//     }

//     return true
// }
/**
 * @param {number[]} gas
 * @param {number[]} cost
 * @return {number}
 */
var canCompleteCircuit = function (gas, cost) {
  const n = gas.length;
  let totalGas = 0; // 전체 gas 합과 cost 합의 차이
  let currentGas = 0; // 현재 위치까지의 누적 gas
  let startIndex = 0; // 가능한 시작점

  for (let i = 0; i < n; i++) {
    totalGas += gas[i] - cost[i];
    currentGas += gas[i] - cost[i];

    // 현재 위치에서 gas가 부족하면
    if (currentGas < 0) {
      // 다음 위치부터 다시 시작
      startIndex = i + 1;
      // 누적 gas 초기화
      currentGas = 0;
    }
  }

  // 전체 gas가 부족하면 불가능
  return totalGas >= 0 ? startIndex : -1;
};
