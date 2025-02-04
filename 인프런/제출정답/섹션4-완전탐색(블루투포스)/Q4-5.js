// 모범 답안

function solution(n, k, card) {
  let answer;
  let tmp = new Set();
  for (let i = 0; i < n; i++) {
    for (let j = i + 1; j < n; j++) {
      for (let k = j + 1; k < n; k++) {
        tmp.add(card[i] + card[j] + card[k]);
      }
    }
  }
  let a = Array.from(tmp).sort((a, b) => b - a);
  answer = a[k - 1];
  return answer;
}

// 3차 - 성공
function solution(arr, k) {
  const answer = [];
  const n = arr.length;
  for (let i = 0; i < n; i++) {
    for (let j = i + 1; j < n; j++) {
      for (let k = j + 1; k < n; k++) {
        answer.push(arr[i] + arr[j] + arr[k]);
      }
    }
  }
  const final = Array.from(new Set(answer.sort((a, b) => b - a)));
  return Array.from(new Set(answer.sort((a, b) => b - a)))[k - 1];
}

// 2차 풀이 - 성공 (but 문제 잘못 이해)
// ! 번외 - 삼중 for 문의 매커니즘
// ! 삼중 포문은 아래와 같이 구성해도 문제 없음
// ! [0,1,2,...,i] j, k <= 이처럼 내부 for 문이 배열 길이를 초과해도
// ! j < n 조건이 거짓이여서 내부로 들어가지 않음
for (let i = 0; i < n; i++) {
  for (let j = i + 1; j < n; j++) {
    for (let k = j + 1; k < n; k++) {
      // 코드의 내용
    }
  }
}
// ! 그러나 반복을 조금이라도 줄이려면 아래와 같이
// ! 안쪽에 들어있는 for문의 개수만큼 빼주어야 함
// ! ! [0,1,2,...,i,j,k]
for (let i = 0; i < n - 2; i++) {
  for (let j = i + 1; j < n - 1; j++) {
    for (let k = j + 1; k < n; k++) {
      // 코드의 내용
    }
  }
}

function solution(arr) {
  arr.sort((a, b) => b - a);
  let list = new Set();
  for (let i = 0; i < arr.length; i++) {
    for (let j = i + 1; j < arr.length; j++) {
      for (let k = j + 1; k < arr.length; k++) {
        let sum = arr[i] + arr[j] + arr[k];
        list.add(sum);
      }
    }
  }
  // ! let arr = Array.from(이름) 객체의 배열화 가능
  let arr2 = [];
  for (let x of list) {
    arr2.push(x);
  }

  return arr2.sort((a, b) => b - a)[2];
}

// 1차 풀이 - 실패

let arr = [13, 15, 34, 23, 45, 65, 33, 11, 26, 42];
for (let i = 0; i < arr.length; i++) {
  for (let j = i + 1; j < arr.length; j++) {
    for (let k = j + 1; k < arr.length; k++) {
      let order = 0;
      console.log(i, j, k, arr[i], arr[j], arr[k]);
    }
  }
}
