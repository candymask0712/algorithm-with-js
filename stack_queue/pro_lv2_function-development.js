function solution(progresses, speeds) {
  let answer = [];

  while(progresses.length) {
      progresses.forEach((progress, index) => {
          progresses[index] = progress + speeds[index]
      })

      let deployedTask = 0
      for(let i=0; i<progresses.length; i++) {
          if(progresses[i] < 100) break;

          deployedTask++
          progresses.splice(i, 1)
          speeds.splice(i, 1)
          i--
      }
      if(deployedTask !== 0) answer.push(deployedTask)
  }

  return answer;
}