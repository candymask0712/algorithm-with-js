
// * 모범 답안
function solution(n, k, arr, m){         
  let answer=0;
  function DFS(L, s, sum){
     if(L===k){
          if(sum%m===0) answer++;
     }
     else{
         for(let i=s; i<n; i++){
             DFS(L+1, i+1, sum+arr[i]);
         }
     }
  }

  DFS(0, 0, 0);
  return answer;
}

let arr=[2, 4, 5, 8, 12];
console.log(solution(5, 3, arr, 6));

// * 3차 풀이 


// * 2차 풀이 


// * 1차 풀이 - 풀이 성공
function solution(arr, pick, m) {
  let answer = []
  let tmp = Array.from({length:pick}, ()=>0)
  function DFS(L,r){
    if(L===pick){
      answer.push(tmp.slice())
    }else{
      for(let i=r; i<arr.length; i++){
       tmp[L]=arr[i]
       DFS(L+1,i+1)
      }
    }
  }
  DFS(0,0)
  answer = answer.filter(el=>{
    let sum = el.reduce((a,b)=>a+b)
    if(sum%6===0) return sum
  })
  // ! 모범답안은 DFS 내에서 sum을 계산하여 최적화 해결
  // ! filter는 결국 해당되는 element를 리턴함 주의
  // ! (위와 같이 작성하면 sum의 배열을 리턴할 것이라 생각)
  return answer.length
}
let arr = [2,4,5,8,12]
console.log(solution(arr,3,6))
