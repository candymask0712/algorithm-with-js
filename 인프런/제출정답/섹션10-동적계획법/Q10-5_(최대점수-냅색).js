
// * 모범답안
function solution(m, arr){  
  let ch = Array.from({length:m+1}, ()=>0)

  for(let i=0; i<arr.length; i++){
    let ps=arr[i][0]
    let pt=arr[i][1]
    for(let j=m; j>=pt; j--){
      // ! 문제는 중복풀이가 불가능하므로 뒤에서 부터 집어넣음
      console.log(ch)
      ch[j] = Math.max(ch[j], ch[j-pt]+ps) 
      // ! 기존값 (새로운 문제 적용 X) 새로운 문제 적용 시 의 스코어 비교하여 높은 것 적용
      // ! 결국 배열의 뒤 쪽의 값이 진짜 답이 될 수 있는 후보이고
      // ! 배열의 앞 쪽 요소들은 뒤 요소들 계산을 위한 점화식의 요소
      // ! 앞쪽 요소들은 짧은 시간 시의 경우라 0임 -> 시간초과 시의 경우 해결
      // ! j의 시간을 써서 얻을 수 있는 점수 ( ch[j] ) =  j-pt의 시간동안 얻을 수 있는 최대점수( ch[j-pt] ) + pt만큼의 시간을 더 써서 얻을 수 있는 점수 ( ps )
    }
  }
  return Math.max(...ch)
}

let arr=[[10, 5], [25, 12], [15, 8], [6, 3], [7, 4]];
// [점수, 시간]
console.log(solution(20, arr));

// * 4차 풀이 - 실패 (강의 듣고 구현만)
function solution(m, arr){

  let ch = Array.from({length:m+1}, ()=>0)
  for(let i=0; i<arr.length; i++){
    let s = arr[i][0]
    let t = arr[i][1]
    for(let j=m; j>=t; j--){
      ch[j] = Math.max(ch[j],ch[j-t]+s)
      console.log('ch',JSON.parse(JSON.stringify(ch)))
    }
  }
  return ch[m]
}

let arr=[[10, 5], [25, 12], [15, 8], [6, 3], [7, 4]];
// [점수, 시간]
console.log(solution(20, arr));

// * 3차 풀이 - 성공
function solution(m, arr){  
  let ch = Array.from({length:m+1}, ()=>0)

  for(let i=0; i<arr.length; i++){
    for(let j=m; j>=arr[i][1]; j--){
      ch[j] = Math.max(ch[j], ch[j-arr[i][1]] + arr[i][0])
      console.log('i',i,'j',j,'arr[i]',arr[i][0],'ch',ch)
    }
  }
  return ch[m]
}
// [점수, 시간]
let arr=[[10, 5], [25, 12], [15, 8], [6, 3], [7, 4]];
console.log(solution(20, arr));

// * 2차 풀이 - 풀이 실패
function solution(m, arr){  
  let ch = Array.from({length:m+1}, ()=>0)

  for(let i=0; i<arr.length; i++){
    for(let j=m; j<arr[i][1]; j--){
      ch[j]=Math.max(ch[j],ch[j])
      // ! 핵심부분 이해 실패
    }
  }
}

let arr=[[10, 5], [25, 12], [15, 8], [6, 3], [7, 4]];
console.log(solution(20, arr));

// * 1차 풀이 - 풀이 실패
const solution = (score, time, limit) => {
  let ch = Array.from({length:limit+1}, ()=>0)

  for(let i=0; i<ch.length; i++){
    for(let j=0; j<time.length; j++){

    }
  }
}

let arr=[[10, 5], [25, 12], [15, 8], [6, 3], [7, 4]];
console.log(solution(score, time, 20))