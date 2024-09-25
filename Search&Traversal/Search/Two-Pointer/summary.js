// * 주의 사항

// * 두 개의 배열에서의 투포인터
function solution(arr1, arr2) {
  let p1 = 0;
  let p2 = 0;
  const n1 = arr1.length;
  const n2 = arr2.length;
  let answer = [];

  // ! 하나라도 마지막에 도착하면 순회 종료
  // ! 그렇지 않으면 undefined와 비교함
  while (p1 < n1 && p2 < n2) {
    const e1 = arr1[p1];
    const e2 = arr2[p2];
    if (e1 < e2) {
      answer.push(e1);
      p1++;
    } else {
      answer.push(e2);
      p2++;
    }
  }
  // ! 배열 길이가 차이나므로 남은 요소 처리 주의
  while (p1 < n1) answer.push(arr1[p1++]);
  while (p2 < n2) answer.push(arr2[p2++]);
  return answer;
}
// * 두 개의 배열에서의 투포인터
function solution(arr1, arr2) {
  let p1 = 0;
  let p2 = 0;
  const n = arr1.length;
  const m = arr2.length;
  let answer = [];
  let tmp = 0;

  while (p1 < n && p2 < m && tmp < 100) {
    tmp++;
    const e1 = arr1[p1];
    const e2 = arr2[p2];
    if (e1 === e2) {
      answer.push(e1);
      if (p1 < n) p1++;
      if (p2 < m) p2++;
    }

    if (e1 < e2) p1++;
    else p2++;
  }

  return answer;
}

// * 하나의 배열에서의 투포인터
function solution(arr, k) {
  const n = arr.length;
  // 문제에 따라 답의 형식 수정
  let answer = 0;
  // 최초의 합계는 0번째 인덱스의 요소로 한다
  let sum = arr[0];
  let lp = 0,
    rp = 0;

  // 오른쪽 포인터가 배열의 길이를 초과하면 끝난다
  while (rp < n) {
    // 경우1. sum < k
    if (sum < k) {
      // 오른쪽 포인터를 움직여 새로운 요소를 더해줌
      sum += arr[rp + 1];
      rp++;
      // 경우2. sum > k
    } else if (sum > k) {
      // 왼쪽 포인터를 움직여 기존 요소를 빼줌
      sum -= arr[lp];
      lp++;
      // 경우3. sum === k
    } else {
      if (true) {
        // 답을 업데이트 하는 로직
      }
      sum -= arr[lp];
      lp++;
    }
  }

  return answer;
}
