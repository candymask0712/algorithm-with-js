// 나의 최근 풀이 (24.09.18)
function solution(A, B) {
  let answer = 0
  // 둘다 내림 차순 정렬 후 가장 높은 순 나열
  B.sort((a,b) => b-a)
  A.sort((a,b) => b-a)
  let bIndex = 0
  A.forEach(aNum => {
      const bNum = B[bIndex]
      // B가 이기는 경우에만 카운터와 인덱스를 이동
      // 그 외에는 작은 숫자가 소모됬다 가정하고 별 다른 동작 하지 않음
      if(bNum > aNum) {
          answer++
          bIndex++
      }
  })
  return answer;
}

// 풀이 과정
// 1차 풀이

// 배열 B의 경우 가장 최소한의 원소로 이기기 위해 오름차순 나열 후 검색
// 정확성은 모두 통과
// 효율성은 모두 실패
function solution(A, B) {
  var answer = 0
  B.sort((a,b) => a-b)
  A.forEach(aNum => {
      for(let i=0; i<B.length; i++) {
          const bNum = B[i]
          if(bNum > aNum) {
              answer++
              B.splice(i, 1)
              break
          } 
      }
  })
  return answer;
}
