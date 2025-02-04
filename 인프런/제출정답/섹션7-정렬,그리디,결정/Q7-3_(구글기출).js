
// 모범 답안
function solution(arr){
    let answer=arr;
    for(let i=0; i<arr.length-1; i++){
        for(let j=0; j<arr.length-i-1; j++){
            if(arr[j]>0 && arr[j+1]<0){
                [arr[j], arr[j+1]]=[arr[j+1], arr[j]];
            }
        }   
    } 
    return answer;
}

let arr=[1, 2, 3, -3, -2, 5, 6, -6];
console.log(solution(arr));

// * 4차 풀이 - 성공(but 엣지케이스 대응 실패)
const solution = (arr) => {

    for(let i=0; i<arr.length; i++){
      for(let j=0; j<arr.length-i-1; j++){
        console.log('i',i,'j',j,'arr',arr)
        if(arr[j+1]<arr[j] && (arr[j]>0 || arr[j+1]>0)) [arr[j+1],arr[j]]=[arr[j],arr[j+1]]
        // ! 위 코드대로면 양수는 원 순서가 아닌 크기 순으로 정렬 됨
      }
    }
    return arr
  }
  
let arr = [1, 2, 3, -3, -2, 5, 6, -6]
console.log(solution(arr))

// 3차 풀이 - 정답 안보고 풀어서 오답
function google (arr) {
for(let i=0; i<arr.length; i++) {
            for(let j=i; j<arr.length; j++) {
                //일반적인 버블정렬처럼 시작점을 i로 설정
                // 최대 맨 뒤에 있던 음수가 맨낲까지 와야함으로 범위가 넓어야 함
                if (arr[j+1]<0 && arr[j]>0) [[arr[j],arr[j+1]]] = [[arr[j+1],arr[j]]];
            }
        }
        return arr
}
let arr = [1, 2, 3, -3, -2, 5, 6, -6];
console.log(google(arr));

// 2차 풀이  - 정답보고 푼 풀이
function solution(arr){
    let answer=arr;
    for(let i=0; i<arr.length-1; i++){
        for(let j=0; j<arr.length-i-1; j++){
            if(arr[j]>0 && arr[j+1]<0){
                [arr[j], arr[j+1]]=[arr[j+1], arr[j]];
            }
        }   
    } 
    return answer;
}

let arr=[1, 2, 3, -3, -2, 5, 6, -6];
console.log(solution(arr));

// 1차 풀이 - push가 아닌 정렬을 이용해서 풀라는 의도
let specialSort = function (arr) {
    let answer = [];
    for (let i=0; i<arr.length; i++) {
        if (arr[i]<0) answer.push(arr[i]);
    }
    for (let i=0; i<arr.length; i++) {
        if (arr[i]>0) answer.push(arr[i]);
    }
    return answer;
}
let arr = [1, 2, 3, -3, -2, 5, 6, -6];
console.log(specialSort(arr));
