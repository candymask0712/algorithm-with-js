// 1차 풀이 - 75점
// 일부 큰 케이스에서 스택오버플로우 발생
function solution(A) {
  const link = new Map()
  for(let i = 0; i < A.length; i++) {
      link.set(i, A[i])
  }
  let answer = 0
  
  function DFS(n, count) {
      // console.log(n, count)
      if(n === link.get(n)) return
      if(link.get(n) === -1) {
          answer = count
          return
      } else {
          DFS(link.get(n), ++count)
      }
      
  }

  DFS(0 , 1)
  return answer
}

// 2차 풀이 - 100점
// 효율성 항목이 없기 때문에 평범하게 while 루프로 풀이
function solution(A) {
  let currentIndex = 0;
  let length = 0;

  while (currentIndex !== -1 && currentIndex < A.length) {
      length++;
      currentIndex = A[currentIndex];
  }

  return length;
}