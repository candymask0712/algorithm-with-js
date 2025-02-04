// 모범 답안

function solution(arr2) {
  let answer = arr;
  let sum = answer.reduce((a, b) => a + b, 0);
  for (let i = 0; i < 8; i++) {
    for (let j = i + 1; j < 9; j++) {
      if (sum - (answer[i] + answer[j]) == 100) {
        answer.splice(j, 1);
        answer.splice(i, 1);
      }
    }
  }
  return answer;
}

let arr2 = [20, 7, 23, 19, 10, 15, 25, 8, 13];

// 5차 - 정담

function solution(arr) {
  const sum = arr.reduce((sum, el) => sum + el, 0);
  const target = sum - 100;
  const n = arr.length;
  for (let i = 0; i < n; i++) {
    for (let j = i + 1; j < n; j++) {
      if (arr[i] + arr[j] === target) {
        return arr.filter((el) => {
          if (el === arr[i] || el === arr[j]) return;
          else return el;
        });
      }
    }
  }
}

console.log(solution([20, 7, 23, 19, 10, 15, 25, 8, 13])); // [20 ,7 ,23 ,19 ,10 ,8 ,13]

// 4차 답안 - 정답

function solution(arr) {
  const sum = arr.reduce((a, b) => a + b, 0);
  for (let i = 0; i < arr.length; i++) {
    for (let j = i + 1; j < arr.length; j++) {
      if (arr[i] + arr[j] === sum - 100) {
        arr.splice(arr.indexOf(arr[i]), 1);
        arr.splice(arr.indexOf(arr[j]), 1);
        return arr;
      }
    }
  }
}
// 3차 답안

function solution(arr) {
  // sum = 40
  const sum = arr.reduce((a, b) => a + b, 0);
  for (let i = 0; i < arr.length; i++) {
    // ! 같은 요소를 중복불가인데 이중 for loop를 전부 검색함
    // ! 중복 피하기 => j의 경우 i의 다음 요소 부터 검색
    // ! 결국 20+20 = 40 으로 20이 두 번 삭제 됨
    for (let j = i + 1; j < arr.length; j++) {
      if (arr[i] + arr[j] === sum - 100) {
        // ! splice를 사용 시 삭제로 인한 index 꼬임 방지할 수 판단
        // ! 실제로는 0,1번째 인덱스에 있던 20, 7이 삭제 됨
        // ! arr[i]=20, arr[j]=20 이니 두번째 splice는 실행되지 않는다 생각
        // ! 그러나 i=0, j=0 만 원시값으로 고정이라
        // ! arr[0] 값을 계속해서 삭제하게 됨
        // ! 원시값과 참조값 정확히 구별 필요
        arr.splice(arr.indexOf(arr[i]), 1);
        arr.splice(arr.indexOf(arr[j]), 1);
        return arr;
      }
    }
  }
}

// 2차 답안

const dwarfHeightSum = function (list) {
  for (let i = 0; i < arr.length + 1; i++) {
    for (let j = i + 1; j < arr.length + 2; j++) {
      if (list[i] + list[j] === 40) {
        // 총합을 코드로 계산하지 않고 미리 계산한 값을 대입
        console.log(list[i], list[j]);
        delete list[i];
        delete list[j];
        // list.splice(i,1);
        // list.splice(j,1);
        return arr;
        // 원래 이 자리에 break 삽입 -> 원소를 4개 제거
        // 정답을 찾은 시점에 바로 return으로 끝내는 것이 효울적
        // 이중 for문의 경우 안의 것을 탈출해도 상위 for이 돌아가면서
        // 다시 하위 for문으로 들어가게 된다
      }
    }
  }
};
let arr = [20, 7, 23, 19, 10, 15, 25, 8, 13];
console.log(dwarfHeightSum(arr));

// 1차 답안 - 없음
