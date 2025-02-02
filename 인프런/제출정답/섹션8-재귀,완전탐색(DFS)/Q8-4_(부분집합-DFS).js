
// 모범 답안
function solution(n){
    let answer=[];
    let ch=Array.from({length:n+1}, ()=>0);
    function DFS(L){
        if(L===n+1){
            let tmp="";
            for(let i=1; i<=n; i++){
                if(ch[i]===1) tmp+=(i+" ");
            }
            if(tmp.length>0) answer.push(tmp.trim());
        }
        else{
            ch[L]=1;
            DFS(L+1);
            ch[L]=0;
            DFS(L+1);
        }
    }
    DFS(1);
    return answer;
}

console.log(solution(3)); 

// * 5차 풀이 - 성공
// ! 정답은 DFS의 파라미터를 한 개만 지정하고 ch배열 생성하는 풀이

const solution = (n) => {
    let answer = [];
     function DFS(L,w){
    // ! DFS의 파라미터 L과 solution의 파라미터 n을 혼동해 풀이 지연
       if(L>n){
         if (w.length>0) answer.push(w)
         return
       }else{
         DFS(L+1, w+String(L))
         DFS(L+1, w)
       }
     }
    DFS(1,'')
    return answer
}

// 4차 풀이 -  재귀 내 for문의 조건 설정 실수
// 모든 요소를 자유롭게 다룰 정도의 연습 필요 
function solution (n) {
    let answer = [];
    let ch = Array.from({length:n}, ()=>0)
    function DFS(L){
        if(L===n+1){
        let tmp='';
        for(let i=1; i<=n; i++){
            if(ch[i]===1) tmp += String(i); 
        }
        if (tmp.length>0) answer.push(tmp);
        } else {
            ch[L]=1
            DFS(L+1)
            ch[L]=0
            DFS(L+1)
        }
    }
    DFS(1);
    return answer;
}

console.log(solution(3))


// 3차 풀이 -  배열 생성 외에는 완성
function solution (n) {
    let answer= [];
    let ch = [0,0,0,0];
    // 위 배열을 함수 내에 생성해서 리셋되는 부작용
    // let ch=Array.from({length:n+1}, ()=>0);
    // 배열은 n + 1 개 생성
    // DFS(1)부터 시작이라 0번째 인덱스는 값이 변하지 않음
    function DFS (v) {
        if(v===n+1) {
        // 탐색하는 값인 v가 n을 초과하면 ch에 해당하는 부분집합 생성
            let tmp = '';
            for(let i=1; i<n+1; i++) {
                if(ch[i]===1) tmp += String(i)
                //  배열 값에 맞게 tmp (부분집합) 생성
            }
            if(tmp.length>0) answer.push(tmp);
            //  생성 된 tmp를 answer에 넣어줌
        }
        else {
            ch[v]=1 // v 레벨에 해당하는 값을 넣는다 (왼쪽)
            DFS(v+1) // v+1 레벨을 탐색한다 (왼쪽)
            ch[v]=0 // v 레벨에 해당하는 값을 넣는다 (오른쪽)
            DFS(v+1) // v+1 레벨을 탐색한다 (왼쪽)
        }
    }
    DFS(1);
    // 탐색을 시작할 값
    return answer;
}

console.log(solution(3))   

// 2차 풀이 
function solution () {
    let answer = [];
    let ch=Array.from({length:n+1}, ()=>0) // 모든 요소가 0인 길이 n+1 배열 생성
    function DFS(L){
        if(L===n+1){
            let tmp="";
            for(let i=1; i<n; i++) {
                if(ch[i]===1) tmp +=(i+" ");
            }
            if(tmp.length>0) answer.push(tmp.trim());
        }
        else {
            ch[L]=1
            DFS(L+1);
            ch[L]=0
            DFS(L+1);
        }
    }
    DFS(1);
    return answer;
}

console.log(solution(3)); 


// 1차 풀이 - 풀이 실패로 답 타이핑
function solution(n) {
    let answer;
    let ch=Array.from({length:n+1}, ()=>0);
    console.log(ch);
    function DFS(v){
        if(v===n+1) {
            let tmp="";
            for(let i=1; i<=n; i++) {
                if(ch[i]===1) tmp+=i+' ';
            }
            if(tmp.length>0) answer.push(tmp.trim());
        }
        else {
            ch[v]=1;
            DFS(v+1);
            ch[v]=0;
            DFS(v+1);
        } 
    }
    DFS(1);
    return answer;
}
console.log(solution(3));
