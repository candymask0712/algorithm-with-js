
// 모범 답안
// function solution(n){
//     function DFS(L){
//         if(L==0) return;
//         else{
//             DFS(L-1);
//             console.log(L);   
//         }
//     }
//     DFS(n);
// }

// solution(3);

// * 4차 풀이 - 성공
const solution = (n) => {
    function DFS (L){
      if(L>n) return
      else{
        console.log(L)
        DFS(L+1)
      }
    }
    DFS(1)
  }
  console.log(solution(3))

// 3차 풀이 - if문으로 return하는 것만 복습
function recurFunc (x) {
function inner (n) {
    if (n === 0) return;
    else {
        console.log(n)
        inner(n-1)
    }
    }
    inner(x);
}
recurFunc(3);

// 2차 풀이 -풀이 실패
function recursive (num) {
return function func (num) {
    if(num === 0) return;
    
    func(num)

    fun(num)
}
} 

// 1차 풀이 - 풀이 실패로 답 타이핑
// 함수는 스택에 저장 후 실행하는데 '복귀주소'를 저장
// '복귀주소'를 이용하면 재귀함수 사용 가능
function solution(n) {
    function DFS(L){
        if(L===0) return;
        // return 하고 값을 쓰지 않으면 중단의 의미
        else {
            console.log(L); // 3,2,1
            // consol.log의 위치에 따라 결과값이 달라짐
            DFS(L-1);
            console.log(L); // 1,2,3
        }
    }
    DFS(n);
}

solution(3);
