// 첫번째 풀이 - 75점
// ! 정렬 때문에 O(n log n)의 시간복잡도라 좋지 않음
function solution(A) {
  // 정렬을 하고 시작함
  A.sort((a,b)=> a-b)
  let answer = 1

  // 정수가 존재하면 계속해서 그 다음 정수로 답안을 업데이트
  for(let i =0; i<A.length; i++) {
    if(A[i] === answer) {
      answer++
    }
  }
  return answer
}

// 두번째 풀이 -  88점(정확성 100점, 효율성 75점)
// ! 정렬 때문에 O(n)으로 줄임 -> 엣지케이스 처리하지 못함
function solution(A) {
  let answer = 1
  const n = A.length
  // 최대 A의 길이만큼 정수의 존재여부 배열 생성
  const ch = Array(n+2).fill(false)

  // 실제로 A에 존재하는 숫자를 체크
  for(let i =0; i<A.length; i++) {
      const num = A[i]
      if(num > 0) {
          ch[num] = true 
      }
  }

  // ch를 순회하면서 비어있는 정수가 나오면 바로 리턴
  for(let i =1; i<ch.length; i++) {
      if(ch[i] === false) {
          answer = i
          return answer
      }
  }
  // 비어 있는 정수가 없다면 -1 리턴
  return answer
}

// 세번째 풀이
function solution(A) {
  const n = A.length;
  const ch = new Array(n + 1).fill(false);
  let maxPositive = 0;

  for (let i = 0; i < n; i++) {
      // A[i]의 범위가 1이상 n이하인 경우만 체크
      // 왜냐하면 그 사이에 하나라도 빈 정수가 있으면 정답이 되기 때문
      if (A[i] > 0 && A[i] <= n) {
          ch[A[i]] = true;
          // 배열에 존재하는 가장 큰 정수를 저장함
          maxPositive = Math.max(maxPositive, A[i]);
      }
  }
  // 계산한 maxPositive까지만 검색함
  for (let i = 1; i <= maxPositive + 1; i++) {
      if (!ch[i]) {
          return i;
      }
  }

  return maxPositive + 1;
}
