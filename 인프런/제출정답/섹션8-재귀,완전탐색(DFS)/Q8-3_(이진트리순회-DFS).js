
// 모범 답안
function solution(n){
    let answer="";
    function DFS(v){
        if(v>7) return;
        else{
            answer+=(v+' ');
            DFS(v*2);
            DFS(v*2+1);
        }
    }
    DFS(n);
    return answer;
}

console.log(solution(1));

// * 5차 풀이 - 정답 (but 전위 순위 약간 비효율적 풀이) + 이진트리 개념 헷갈림

// 전위
const solution = (n) => {
    function DFS(L){
      if(L>Math.floor(n/2)){
        return
      }else{
        console.log(L*2)
        DFS(L*2)
        console.log(L*2+1)
        DFS(L*2+1)
      }
    }
    console.log(1)
    DFS(1)
  }
  console.log(solution(7))
  
  // 중위
  const solution = (n) => {
    function DFS(L){
      if(L>n){
        return
      }else{
        DFS(L*2)
        console.log(L)
        DFS(L*2+1)
      }
    }
    DFS(1)
  }
  console.log(solution(7))
  
  // 후위
  const solution = (n) => {
    function DFS(L){
      if(L>n){
        return
      }else{
        DFS(L*2)
        console.log(L)
        DFS(L*2+1)
      }
    }
    DFS(1)
  }
  console.log(solution(7))
  





// 4차 풀이 - 혼자 풀이 진행
function solution (n) {
    let answer='';
    function DFS(L){
        if(L>n) return;
        else {
        DFS(L*2)
        DFS(L*2 +1)
        answer += L
        }
    }
    DFS(1)
    return answer;
}
    console.log(solution(5))

// 3차 풀이 - 해설보고 혼자서 재 타이핑

function solution (n) {
    let answer ='';
    function DFS (L) {
        if(L>5) return;
        else {
            DFS(L*2);
            answer += String(L)
            DFS(L*2 + 1);
        }
    }
    DFS(n);
    return answer;
}
console.log(solution(1));

// 2차 풀이 
function solution (num) {
    answer="";
    function DFS(v) {
        if (v>5) return;
        else {
            answer += String(v);
            // 전위순회 실행시 answer 위치
            // v + ''으로 쓸 시 문자열 변환 가능 
            DFS(v*2);
            DFS(v*2+1);
        }
    }
    DFS(num);
    return answer;
}
solution(1);


// 1차 풀이 - 풀이 실패로 답 타이핑
// 전위순회 부모 -> 왼쪽 -> 오른쪽
// 중위순회 왼쪽 -> 부모 -> 오른쪽
// 후위순회 왼쪽 -> 오른쪽 -> 부모
function solution (num) {
    answer="";
    function DFS(v) {
        if (v>5) return;
        else {
            answer += String(v);
            // 전위순회 실행시 answer 위치
            DFS(v*2);
            // 중위순회 실행시 answer 위치
            DFS(v*2+1);
            // 후위순회 실행시 answer 위치
        }
    }
    DFS(num);
    return answer;
}
solution(1);
