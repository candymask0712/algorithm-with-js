
// ! 1차 풀이
const DIRECTIONS = {
  U: [0, -1],
  D: [0, 1],
  L: [-1, 0],
  R: [1, 0]
}

const CONSTRUCTION_COST = {
  STRAIGHT: 100,
  CORNER: 500
}

function solution(board){

  let answer = Infinity
  const n = board.length
  const m = board[0].length
  const isValid = (a,b) => a>=0 && b>=0 && a <n && b< m
  
  const q =[]
  q.push([0,0,0,'N'])
  
  while(q.length) {
      const [x, y, cost, prevDirection] = q.shift()
      
      // if(cost > answer) continue
      if(x === n-1 && y === m-1) {
          answer = Math.min(answer, cost)
          continue
      }
      for(const [direction, value] of Object.entries(DIRECTIONS)){
          const [dx, dy] = value
          const nx = x + dx
          const ny = y + dy
          if(isValid(nx, ny) && board[nx][ny] === 0) {
              const aditionalCost = (direction === prevDirection || prevDirection === 'N') ? CONSTRUCTION_COST.STRAIGHT : CONSTRUCTION_COST.CORNER+CONSTRUCTION_COST.STRAIGHT
              
              const totalCost = cost + aditionalCost
              q.push([nx, ny, totalCost, direction])
          }
          
      }   
       board[x][y] = 1
  }
  
  return answer;
}

// ! 2차 풀이
// 방향별 방문처리 및 비용 계산으로 계선

const DIRECTIONS = {
  U: [0, -1],
  D: [0, 1],
  L: [-1, 0],
  R: [1, 0]
}

const CONSTRUCTION_COST = {
  STRAIGHT: 100,
  CORNER: 500
}

function solution(board){

  let answer = Infinity
  const n = board.length
  const isValid = (a,b) => a>=0 && b>=0 && a <n && b< n
  
  const isVisited = Array.from({ length: n }, () => Array.from({ length: n }, () => new Map() ))                             
  
  const q =[]
  q.push([0,0,0,'N'])
  
  while(q.length) {
      q.sort((a, b) => a[2] - b[2])
      const [x, y, cost, prevDirection] = q.shift()
      
      if(x === n-1 && y === n-1) {
          answer = Math.min(answer, cost)
          continue
      }
      for(const [direction, value] of Object.entries(DIRECTIONS)){
          const [dx, dy] = value
          const nx = x + dx
          const ny = y + dy
          if(isValid(nx, ny) && board[nx][ny] === 0) {
              const aditionalCost = (direction === prevDirection || prevDirection === 'N') ? CONSTRUCTION_COST.STRAIGHT : CONSTRUCTION_COST.CORNER+CONSTRUCTION_COST.STRAIGHT
              const totalCost = cost + aditionalCost
              if (!isVisited[nx][ny].has(direction) || totalCost < isVisited[nx][ny].get(direction)) {
                  isVisited[nx][ny].set(direction, totalCost);
                  q.push([nx, ny, totalCost, direction]);
              }
          }
          
      }   

  }
  
  return answer;
}