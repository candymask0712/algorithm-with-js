
// 모범 답안
function solution(arr){
    let answer=arr;
    for(let i=0; i<arr.length; i++){
        let tmp=arr[i], j;
        // ! 매 시행마다 정렬의 기준이 되는 tmp를 i번째 원소로 지정 
        for(j=i-1; j>=0; j--) {
            if(arr[j]>tmp) arr[j+1]=arr[j];
            // ! tmp의 왼쪽은 이미 정렬된 상태
            // ! tmp보다 큰 요소를 만나면 계속 오른쪽으로 옮겨 tmp가 들어갈 자리 만듬
            else break;
            // ! 더 이상 tmp보다 큰 요소가 없으면 중단
        }
        arr[j+1]=tmp;
        // ! 빈 자리에 tmp를 넣음
    } 
    return answer;
}

let arr=[11, 7, 5, 6, 10, 9];
console.log(solution(arr));

// 2차 풀이 - 영상으로 개념 학습 후 풀이 (but 답은 나왔으나 풀이 다름)
const solution = (arr) => {

    for(let i=1; i<arr.length; i++){
      let tmp = arr[i]
      for(let j=i-1; j>=0; j--){
        console.log('arr',arr,'tmp',tmp,'i',i,'j',j)
        if(tmp<arr[j]) {
          arr[j+1]=arr[j]
          arr[j]=tmp
        }  
      }
    }
    return arr
  }
  
  let arr = [11, 7, 5, 6, 10, 9]
  console.log(solution(arr))

// 1차 풀이 - 풀이 실패로 정답 참고
function solution(arr) {
    let answer=arr;
    for(let i=1; i<arr.length; i++) {
        let tmp=arr[i], j;
        for(j=i-1; j>=0; j--) {
            if(arr[j]>tmp) arr[j+1]=arr[j];
            else break;
        }
    arr[j+1]=tmp;
    }
    return answer;    
}
let arr = [11, 7, 5, 6, 10, 9];
console.log(solution(arr));
