function solution(plans) {
  var answer = [];
  
  plans = plans.map(plan => {
      const [name, start, playtime] = plan
      return [name, convertTimeToMinutes(start), Number(playtime)]
  })
  plans.sort((a,b)=> a[1] - b[1])
  
  const stack = []
  const n = plans.length
  
  let index = 0

  while(index < n) {
      debugger
      const [name, start, playtime] = plans[index]
      if(index === n-1) {
          answer.push(name)
          break
      }
      const [nextName, nextStart, nextPlaytime] = plans[index+1]
      const timeDiff = nextStart - start
      if(playtime > timeDiff) {
          const pausedPlan = [name, start, playtime - timeDiff] 
          stack.push(pausedPlan)
      } else {
          answer.push(name)
          let remainedTime = timeDiff - playtime
          while(stack.length > 0 && remainedTime>0) {
              const popedPlan = stack.pop()
              const [popedName, popedStart, popedPlaytime] = popedPlan
              
              if(popedPlaytime <= remainedTime) {
                  answer.push(popedName)
                  remainedTime -= popedPlaytime
              } else {
                  const rePausedPlan = [popedName, popedStart, popedPlaytime - remainedTime] 
                  stack.push(rePausedPlan)
                  break
              }
              
              
          }
      }
      index++
  }
  // console.log(stack)
  while(stack.length) {
      const popedPlan = stack.pop()
      const [popedName, popedStart, popedPlaytime] = popedPlan
      answer.push(popedName)
  }
      
  
  return answer;
}

function convertTimeToMinutes(time){
  const [hours, minutes] = time.split(':').map(Number)
  return hours*60 + minutes
}