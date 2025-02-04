// 모범 답안

function solution(m, product) {
  let answer = 0;
  let n = product.length;
  product.sort((a, b) => a[0] + a[1] - (b[0] + b[1]));
  for (let i = 0; i < n; i++) {
    let money = m - (product[i][0] / 2 + product[i][1]);
    let cnt = 1;
    for (let j = 0; j < n; j++) {
      if (j !== i && product[j][0] + product[j][1] > money) break;
      if (j !== i && product[j][0] + product[j][1] <= money) {
        money -= product[j][0] + product[j][1];
        cnt++;
      }
    }
    answer = Math.max(answer, cnt);
  }
  return answer;
}

// 2차 답안 - 성공 (but 시간 많이 걸리고 부족한 부분 많음)

// ! 중간에 인덱스 위치 변경, 2차원 배열의 복사,
// ! 콘솔 볼때 참조형은 stringify 필요, i/j 인덱스 헷갈림 등등
// ! 배열 관련 너무나 많은 실수 발생 => 철저한 복습 및 추후 문제풀이 시 신중한 로직 고려 필요

function solution(b, a) {
  let answer = 0;

  for (let i = 0; i < a.length; i++) {
    // ! 처음에는 arr = [...a] 처럼 얕은 복사 사용
    // ! 그래서 요소 조작 시 원 배열도 계속 변경
    // ! 2차원 배열은 spread 연산자 사용시 1레벨은 깊은복사, 그 이상은 얕은복사 됨
    // https://developer-talk.tistory.com/86
    let arr = JSON.parse(JSON.stringify(a));

    // ! 복사한 배열 직접 조작
    // ! 선택한 요소에 대해서는 따로 계산해주는 모범 답안 방식이 더 간단
    arr[i][0] = arr[i][0] / 2;
    let tmp = b;
    let cnt = 0;
    // ! 내 풀이 - for문 안에서 정렬 => 인덱스가 바뀌어 큰 혼란
    // ! 모범 답안 - for문 밖에서 한 번만 정렬 => 깔끔한 풀이 가능
    // ! 할인 한 선물을 우선적으로 계산하고 break하는 모범답안에서는 가능
    // ! 어짜피 방향이 완전 탐색이기 때문에 모범답안 처럼 구상해야 함
    arr.sort((a, b) => a[0] + a[1] - (b[0] + b[1]));

    for (let j = 0; j < a.length; j++) {
      // ! 처음에는 arr[j][0]이 아닌 i를 넣어서 혼란
      tmp -= arr[j][0] + arr[j][1];
      if (tmp >= 0) cnt++;
    }
    if (cnt > answer) answer = cnt;
    // ! 처음에는 할인해 준 요소 *2 로 복구함
    // ! 배열의 순서가 변화되기 때문에 계산 오류 발생
    // ! 최상단에서 다시 원 배열을 깊은 복사 하는 것으로 수정
    // arr[i][0] = arr[i][0] * 2;

    // ! 콘솔로 내부로직 확인 시 a[i] 대신 arr[i]로 확인해서 풀이 지연
    // ! arr[i]는 중간에 sort로 인해 순서 변했기 때문에 a[i]로 확인해야 함
    console.log(
      'arr',
      JSON.parse(JSON.stringify(a[i])),
      JSON.parse(JSON.stringify(arr))
    );
  }
  return answer;
}

// 1차 답안 - 실패

let arr = [
  [6, 6],
  [2, 2],
  [4, 3],
  [4, 5],
  [10, 3]
];
for (let i = 0; i < 5; i++) {
  for (let j = 0; j < 5; j++) {
    console.log(j, arr[i][0] + arr[i][1]);
  }
}
