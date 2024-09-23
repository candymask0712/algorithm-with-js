// 나의 풀이 (24.09.23)
function solution(k, dungeons) {
  let answer = 0

  function DFS(health, dungeons, clearedNum){
    if(dungeons.length===0){
      answer = Math.max(answer, clearedNum)
      return
    }

    dungeons.forEach(([minHealth, useHealth], index)=>{
      if(minHealth <= health) {
        const afterHealth = health - useHealth
        const copiedDungeon = JSON.parse(JSON.stringify(dungeons))
        copiedDungeon.splice(index, 1)

        const filteredDungeons = copiedDungeon.filter(([minHealth, useHealth])=>{
          if(afterHealth - minHealth >= 0) return true
          else return false
        })
        DFS(afterHealth, filteredDungeons, clearedNum + 1)
      }
    })

    }
  DFS(k, dungeons, 0)

  return answer
}

// 다른 풀이
function solution(k, d) {
    const N = d.length
    // ! 배열 생성 from 없이 간단하게
    const visited = new Array(N).fill(0)
    let ans = 0

    function dfs(k, cnt){
        ans = Math.max(cnt, ans)

        for (let j = 0; j < N; j++){
            if (k >= d[j][0] && !visited[j]){
                visited[j] = 1
                dfs(k - d[j][1], cnt + 1)
                // ! 탐색이 끝나면 미방문으로 전환
                visited[j] = 0
            }
        }
    }

    dfs(k, 0)
    return ans;
}


console.info(solution(80, [[80,20],[50,40],[30,10]])) // 3