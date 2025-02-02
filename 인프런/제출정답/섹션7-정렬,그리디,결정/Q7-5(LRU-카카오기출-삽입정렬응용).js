
// * 모범 답안

function solution(size, arr){
  let answer=Array.from({length:size}, ()=>0);
  arr.forEach(x => {
      let pos=-1;
      for(let i=0; i<size; i++) if(x===answer[i]) pos=i;
      if(pos===-1){
          for(let i=size-1; i>=1; i--){
              answer[i]=answer[i-1];
          }
      }
      else{
          for(let i=pos; i>=1; i--){
              answer[i]=answer[i-1];
          }
      } 
      answer[0]=x;  
  });

  return answer;
}

// * 2차 풀이 - 풀이 성공

function solution(n, arr){
  let q = Array.from({length:n}, ()=>0)
  for(let el of arr){
    if(q.includes(el)) {
     q.splice(q.indexOf(el),1)
     q.unshift(el)
    }
    else{
      q.unshift(el)
      q.pop()
    }
  }
  return q
}

let arr=[1,2,3,2,6,2,3,5,7];
console.log(solution(5, arr));

// * 1차 풀이 - 풀이 실패로 정답 참고
