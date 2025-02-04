
//  모범 답안
  function solution(n){
      let answer="";
      function DFS(n){
            if(n===0) return;
            else{
                DFS(parseInt(n/2));
                answer+=String(n%2);
            }
      }
      DFS(n);
      return answer;
  }

  console.log(solution(11));

//  3차 풀이 
function two (n) {
      let answer= [];
      function inner (x) {
          if(x===0) return
          else {
              answer.unshift(String(x%2))
              // 문자열은 그냥 + 를 통해 붙일 수 있음
              // 배열에 넣고 다시 붙이는 과정 필요 없음
              inner(Math.floor(x/2))
          }
      }
      inner(n);
      return answer.join('')
      }
  console.log(two(10));

//   2차 풀이 - 풀이 실패
  function recursive (num) {
    function bin (L) {
      if (L===0) return;
      
    }
    bin (L);
  }
  recursive(3);

//  1차 풀이 - 풀이 실패로 답 타이핑

  function solution(n) {
      let answer
      function DFS(n){
          if(n===0) return;
          else {
              console.log(n%2)
              DFS(parseInt(n/2));
              answer += String(n%2);
          }
      }
      DFS(n);
      return answer;
  }

  solution(3);
