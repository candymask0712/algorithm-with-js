// * 접근 방법
// progresses 배열의 길이가 최대 100 => 플루투포스 포함 모든 알고리즘 사용가능
// 뒤에 있는 기능이 먼저 배포될 수 없고 순차적으로 진행 => 큐 사용

// * 최근 나의 풀이 (24.09.17)
function solution(progresses, speeds) {
  let answer = [];

  while(progresses.length) {
      progresses.forEach((progress, index) => {
          progresses[index] = progress + speeds[index]
      })

      let deployedTask = 0
      for(let i=0; i<progresses.length; i++) {
          if(progresses[i] < 100) break;

          deployedTask++
          progresses.splice(i, 1)
          // ! 풀이 진행 시 speeds 배열에서 요소를 삭제하지 않아 로직이 꼬임
          // ! 배열의 요소를 삭제할 때는 인덱스와 인덱스를 참고하는 다른 배열도 잘 고려해야한다
          speeds.splice(i, 1)
          i--
      }
      if(deployedTask !== 0) answer.push(deployedTask)
  }

  return answer;
}