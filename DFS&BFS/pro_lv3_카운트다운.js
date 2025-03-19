function solution(target) {
  var answer = [0,0];        
  if(target % 60 === 0) {
      answer[0] += parseInt(target/60)
      target %= 60
  }
  
  if(target > 50) {
      answer[0] += parseInt(target/50)
      answer[1] += parseInt(target/50)
      target %= 50
  } 
  
  if(target>=50) {
      if(target === 50) {
          answer[0]++
          answer[1]++
      } else if(target % 3 === 0) {
          answer[0]++
      } else {
          answer[0]+=2
          answer[1]+=2
      }
  } else if(target <= 20) {
      answer[0]++
      answer[1]++
  } else {
      if(target%2===0 || target%3===0){
          answer[0]++
      } else {
          if(target < 40) {
              answer[0]+=2
              answer[1]+=2
          } else {
              answer[0]+=2
              answer[1]+=1
          }
      }

  }
  return answer;
}

