function solution(land, height) {
  let answer = Number.MAX_SAFE_INTEGER;
  const n = land.length
  const m = land[0].length
  const totalBlock = n*m
  console.error(totalBlock)
  const ladder = new Map();
  for(let i=0; i<n; i++){
    for(let j=0; j<m; j++){
      ladder.set(`${i}+${j}`, [])
    }
  }

  console.info(ladder)


  function DFS(position, count, cost, ch){

    if(count === totalBlock){
      answer = Math.min(answer, cost)
      console.error(answer, cost)
      return
    }

    const [x,y] = position
    let dx = [0,0,1,-1]
    let dy = [-1,1,0,0]

    for (let i = 0; i < 4; i++) {
     let nx = x + dx[i]
     let ny = y + dy[i]
     const isValid = (x,y) => x>=0 && x<n && y>=0 && y<m
     if (isValid(nx,ny) && ch[nx][ny] === 0) {
        ch[nx][ny] = 1
        if(Math.abs(land[x][y] - land[nx][ny] > height)) {
          cost += Math.abs(land[x][y] - land[nx][ny])
        }
        count += 1
        console.info([nx, ny], count, cost)
        console.table(JSON.parse(JSON.stringify(ch)))
        DFS([nx, ny], count, cost, ch)
        ch[nx][ny] = 0
      }
    }
   }


  for(let i=0; i<n; i++){
    for(let j=0; j<m; j++){

      let ch = Array.from(Array(n), () => Array(m).fill(0))
      ch[i][j] = 1
      console.warn(i,j)
      DFS([i,j], 1, 0, ch)
    }
  }
  return answer;
}

console.info(solution([[1, 4, 8, 10], [5, 5, 5, 5], [10, 10, 10, 10], [10, 10, 10, 20]],	3)) //15
// console.info(solution([[10, 11, 10, 11], [2, 21, 20, 10], [1, 20, 21, 11], [2, 1, 2, 1]],	1	)) // 18


