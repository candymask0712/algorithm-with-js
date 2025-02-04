
// 모범 답안
function solution(arr){
    let answer=arr;
    for(let i=0; i<arr.length-1; i++){
        for(let j=0; j<arr.length-i-1; j++){
            if(arr[j]>arr[j+1]){
                [arr[j], arr[j+1]]=[arr[j+1], arr[j]];
            }
        }   
    } 
    return answer;
}

let arr=[13, 5, 11, 7, 23, 15];
console.log(solution(arr));

// * 3차 풀이 - 풀이 성공(but 약간 지연)
const solution = (arr) => {
    for(let i=0; i<arr.length; i++){
      for(let j=0; j<arr.length-i-1; j++){
        // ! 조건 설정때문에 약간 시간 지연
        // ! i루프와 j루프의 관계 때문에 약간 고민함
        // ! j 루프의 시작을 i로 지정 -> 버블의 특성상 앞쪽은 마지막 까지 정렬 해줘야 됨   
        console.log('i',i,'j',j,'arr',arr)
        if(arr[j+1]<arr[j]) [arr[j+1],arr[j]]=[arr[j],arr[j+1]]
      }
    }
    return arr
}

// 2차 풀이  
let bubbleSort = function (arr) {
    for(let i=0; i<arr.length; i++){
        for(let j=i; j<arr.length; j++) {
            if (arr[j] >arr[j+1]) [[arr[j],arr[j+1]]] = [[arr[j+1],arr[j]]];
        }
    }
    return arr;    
}
arr = [13, 5, 11, 7, 23, 15];
console.log(bubbleSort(arr));


// 1차 풀이
let bubbleSort = function (arr) {
    for(let i=0; i<arr.length; i++){
        for(let j=i; j<arr.length; j++) {
            // 버블정렬의 특성상 i 하나가 돌고나면 가장 우측에 가장 큰 수가 위치
            // 즉 한 바퀴 돌때마다 젤 우측 수는 체크 안해도 됨 (j<arr.length-i;)
            if (arr[j-1] > arr[j]) [arr[j-1], arr[j]] = [arr[j], arr[j-1]];
        }
    }
    return arr;
}
arr = [13, 5, 11, 7, 23, 15];
console.log(bubbleSort(arr));
