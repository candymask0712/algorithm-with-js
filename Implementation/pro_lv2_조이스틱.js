// ! 나의 풀이
function solution(name) {
  var answer = 0;
  
  let lastIndexOfNotA = 0
  const n = name.length
  
  for(let i=1; i<n-1; i++){
      if(name[i]!=='A'){
          lastIndexOfNotA = i
      }
  }
  
  let lastIndexOfA = 0
  for(let i=1; i<n-1; i++){
      if(name[i]!=='A'){
          lastIndexOfA = i - 1
          break
      }
  }
  
  for(const char of name) {
      const code = char.charCodeAt()
      const Adiff = code - 65
      const Zdiff = 90 - code + 1
      const plus = Math.min(Adiff, Zdiff)
      // console.log(plus)
      answer += plus
  }
  // console.log('lastIndexOfNotA',lastIndexOfNotA)
  // console.log('lastIndexOfA',lastIndexOfA)
  if(n%2===0){
      if(lastIndexOfA>=1) {
          answer += n-lastIndexOfA-1
      } else if(lastIndexOfNotA < Math.ceil(n/2)) {
          answer += lastIndexOfNotA*2+1
      } else {
          answer += n-1
      }        
  } else {
      if(lastIndexOfA>=1) {
          answer += n-lastIndexOfA-1
      } else if(lastIndexOfNotA < Math.ceil(n/2)-1) {
          answer += lastIndexOfNotA*2+1
      } else {
          answer += n-1
      }  
  }

  return answer;
}

// ! 참고 풀이
function solution(name) {
  let answer = 0;
  let min_move = name.length - 1;

  [...name].map((n, i) => {
    answer += Math.min(n.charCodeAt() - 65, 91 - n.charCodeAt());
    let idx = i + 1;

    // 연속되는 A의 개수 count
    while (idx < name.length && name[idx] === 'A') {
      idx++;
    }

    min_move = Math.min(
      min_move,
      i * 2 + name.length - idx,
      i + 2 * (name.length - idx),
    );
  });

  return answer + min_move;
}