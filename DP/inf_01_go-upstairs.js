// 나의 답안
function solution(n){  
  let answer=0;
  // dp를 위한 배열 생성
  let dy=Array.from({length:n+1}, ()=>0);
  // 배열의 첫 번째, 두 번째 요소는 직접 넣어줌
  dy[1]=1;
  dy[2]=2;
  // 3번째 요소부터는 점화식으로 진행
  for(let i=3; i<=n; i++){
      dy[i]=dy[i-2]+dy[i-1];
  }
  answer=dy[n];
  return answer;
}