// * 접근 방법
// queries의 행의 개수(회전의 개수)는 1 이상 10,000 이하 => 10초 기준 O(n^2)까지 사용가능

// 나의 최근 풀이 (24.09.19)
function solution(rows, columns, queries) {
    var answer = [];
    // 이 부분 노트 필요
    const graph = Array.from({ length: rows }, (_, rowIndex) =>
      Array.from({ length: columns }, (_, colIndex) => 
        rowIndex * columns + colIndex + 1
      )
    );
    for(let i=0; i<n; i++){
     
    }
  let answer=Number.MAX_SAFE_INTEGER;
    // console.info(graph)
    let newGraph = JSON.parse(JSON.stringify(graph))
    // console.log('queries',queries)
    queries.forEach(query=> {
      let [graph, numbers] = rotateGraph(newGraph, query)
      newGraph = graph
      answer.push(Math.min(...numbers))
    })
    return answer;
  }
  
  function rotateGraph(graph, query) {
    const copiedGraph = JSON.parse(JSON.stringify(graph))
    // console.log(query)
    const [rowStart, colStart, rowEnd, colEnd] = query
    const changedNumbers = []
  
    // [2,2,5,4]
  
    const rowSteps = rowEnd - rowStart
    const colSteps = colEnd - colStart
  
    for(let i=0; i<colSteps; i++){
      copiedGraph[rowStart-1][colStart+i] = graph[rowStart-1][colStart+i-1]
      changedNumbers.push(copiedGraph[rowStart-1][colStart+i])
    }
  
    // console.table(copiedGraph)
  
    for(let i=0; i<colSteps; i++){
      copiedGraph[rowEnd-1][colEnd-i-2] = graph[rowEnd-1][colEnd-i-1]
      changedNumbers.push(copiedGraph[rowEnd-1][colEnd-i-2])
    }
  
    // console.table(copiedGraph)
  
    for(let i=0; i<rowSteps; i++){
     copiedGraph[rowStart+i][colEnd-1] = graph[rowStart+i-1][colEnd-1]
     changedNumbers.push(copiedGraph[rowStart+i][colEnd-1])
    }
  
    // console.table(copiedGraph)
  
    for(let i=0; i<rowSteps; i++){
     copiedGraph[rowEnd-i-2][colStart-1] = graph[rowEnd-i-1][colStart-1]
     changedNumbers.push(copiedGraph[rowEnd-i-2][colStart-1] )
    }
  
    // console.table(copiedGraph)
  
    return [copiedGraph, changedNumbers]
}

// 풀이 과정
// 1차 풀이

// 배열 B의 경우 가장 최소한의 원소로 이기기 위해 오름차순 나열 후 검색
// 정확성은 모두 통과
// 효율성은 모두 실패
function solution(A, B) {
  var answer = 0
  B.sort((a,b) => a-b)
  A.forEach(aNum => {
      for(let i=0; i<B.length; i++) {
          const bNum = B[i]
          if(bNum > aNum) {
              answer++
              B.splice(i, 1)
              break
          } 
      }
  })
  return answer;
}
