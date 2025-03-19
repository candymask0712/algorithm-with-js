function solution(n, roads, sources, destination) {
  var answer = [];
  const h = new Map()
  
  for(let i=1; i<=n; i++) {
      h.set(i, [])
  }
  
  for(const road of roads) {
      const [start, end] = road
      h.set(start, [...h.get(start), end])
      h.set(end, [...h.get(end), start])
  }
  
  const memo = new Map()
  
  // console.log(h)
  sources.forEach(source => {
      const shortestRoute = getShortestRoute(n,h, source, destination, memo)
      if(shortestRoute!==-1) memo.set(source, shortestRoute)
      answer.push(shortestRoute)
  })
  
  return answer;
}

function getShortestRoute(n, h, source, destination, memo) {
  if(source === destination) return 0
  const q = [[source, 0]]
  const isVisited = Array(n+1).fill(0)
  isVisited[source] = 1
  while(q.length) {
      const [curPosition, len] = q.shift()
      if(memo.has(curPosition)) return memo.get(curPosition) + len
      if(curPosition === destination) return len
      
      // console.log('*', curPosition, len, isVisited)
      for(const nextPosition of h.get(curPosition)) {
          if(!isVisited[nextPosition]) {
              // console.log(curPosition,  nextPosition, len)
              q.push([nextPosition, len + 1])
              isVisited[nextPosition] = 1
          }
      }
  }

  return -1
}

















