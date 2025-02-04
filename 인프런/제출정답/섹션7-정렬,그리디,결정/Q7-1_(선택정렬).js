
// *  모범 답안
let selectionSort = function (arr) {
    for (let i = 0; i<arr.length-1; i++){
        let idx = i;                
        for (let j =i+1; j<arr.length; j++) {
            if(arr[j] < arr[i]) idx = j;
        }
        [arr[i], arr[idx]] = [arr[idx], arr[i]];
    }
return arr;
}
let arr = [13, 5, 11, 7, 23, 15];
console.log(selectionSort(arr));


// * 4차 풀이 - 풀이 성공 (but 약간 사족)
const solution = (arr) => {

    for(let i=0; i<arr.length; i++){
      let min=arr[i];
      // ! min 자체는 정의 필요 X
      let minIdx=i;
      for(let j=i; j<arr.length; j++){
        if(arr[j]<min) {
          min=arr[j]
          minIdx=j
        }
        console.log('arr',arr,'i',i,'j',j,'min',min,'minIdx',minIdx)  
      }
      [arr[i],arr[minIdx]]=[arr[minIdx],arr[i]]
    }
    return arr
  }
  
  let arr = [13, 5, 11, 7, 23, 15]
  console.log(solution(arr))

// * 3차 풀이 - 변수를 리셋 타이밍을 잘 못 생각해 시간 지연
let selectionSort = function (arr) {

    for (let i=0; i<arr.length-1; i++) {
        let min = arr[i];
        let idx = i;
        let j
        for (let j=i+1; j<arr.length; j++) {
            if (arr[j] < min) {
                min = arr[j];
                idx = j;
            } 
        }

        [arr[i], arr[idx]] = [arr[idx], arr[i]];
        console.log('i:',i,'idx:',idx)
        console.log(arr);
    }
    return arr;
}
arr = [13, 5, 11, 7, 23, 15];
console.log(selectionSort(arr));

// * 2차 풀이 - 내부 매커니즘을 정확히 구현 x
function selectionSort (arr) {
    let min = arr[0];
    for (let i=0; i<arr.length-1; i++) {
        for (let j=i; j<arr.length; j++) {
            if (arr[j] < arr[i]) [arr[j], arr[i]] = [arr[i], arr[j]];
        }
    }
    return arr;
}

// * 1차 풀이  - 실패 (값 끼리 자리 바꿈 구현 실패)
let selectionSort = function (arr) {
    let min = 1000;                
    for (let i = 0; i<arr.length; i++){
        for (let j =i; j<arr.length; j++) {
            if(arr[j] < min) min = arr[j];
        }
        arr.splice(arr.indexOf(min),1);
        arr.splice(i,1,min);
        min = 1000;
    }
return arr;
}
arr = [13, 5, 11, 7, 23, 15];
console.log(selectionSort(arr));
