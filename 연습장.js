function solution(n, meetings) {
  meetings.sort((a,b)=>{
    if(a[1] === b[1]) return a[0] - b[0]
    return a[1] - b[1]
  })
  let answer = 0
  let current = 0
  for(let i=0; i<n; i++){
    const [start, end] = meetings[i]
    if(start >= current) {
      current = end
      answer++
    }  
  }
  return answer
}

// 예시 입력에 대한 테스트
const testInput = [
  [1, 4],
  [3, 5],
  [0, 6],
  [5, 7],
  [3, 8],
  [5, 9],
  [6, 10],
  [8, 11],
  [8, 12],
  [2, 13],
  [12, 14]
];

console.info(solution(11, testInput)); // 4
