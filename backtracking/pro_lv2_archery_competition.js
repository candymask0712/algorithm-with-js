// 나의 풀이
function solution(n, info) {
  var answer = [];
  const target = Array(10).fill(null)
  
  function DFS(s, target) {
      if(s === 0 || target.every(el=> el !== null)){
          console.log(s, target)
      }
      
      for(let i=0; i<n; i++){
          if(target[i]!==null) continue
          
          apeach = info[i]
          const winTarget = target.slice()
          const loseTarget = target.slice()
          
          if(s >=  apeach + 1) {
              winTarget[i] = apeach + 1
              const newS = s - (apeach + 1)
              DFS(s, winTarget)
          }
          loseTarget[i] = 0
          DFS(s, loseTarget)
          
      }
      
  }
  DFS(n, target)
  
  return answer;
}

// 다른 풀이
function combinationsWithRepetition(arr, n) {
  // 기본 케이스: n이 1이면 각 요소를 단일 요소 배열로 반환
  if (n === 1) {
    return arr.map(item => [item]);
  }

  // 결과를 저장할 배열
  const result = [];

  // 배열의 각 요소에 대해
  for (let i = 0; i < arr.length; i++) {
    const currentItem = arr[i];
    // 현재 요소부터 끝까지의 부분 배열로 재귀 호출
    const subCombinations = combinationsWithRepetition(arr.slice(i), n - 1);
    
    // 현재 요소를 각 하위 조합의 앞에 추가
    for (const subCombination of subCombinations) {
      result.push([currentItem, ...subCombination]);
    }
  }

  return result;
}



function solution(n, info) {
  let maxdiff = 0;
  let maxComb = {};

  // ➊ 주어진 조합에서 각각의 점수 계산
  function calculateScore(combi) {
    let score1 = 0;
    let score2 = 0;
    for (let i = 1; i <= 10; i++) {
      if (info[10 - i] < combi.filter((x) => x === i).length) {
        score1 += i;
      } else if (info[10 - i] > 0) {
        score2 += i;
      }
    }
    return [score1, score2];
  }

  // ➋ 최대 차이와 조합 저장
  function calculateDiff(diff, cnt) {
    if (diff > maxdiff) {
      maxComb = { ...cnt };
      maxdiff = diff;
    }
  }

  // ➌ 가능한 라이언의 과녁점수 조합의 모든 경우에 대해서 체크
  for (const combi of combinationsWithRepetition([...Array(11).keys()], n)) {
    const cnt = combi.reduce((acc, cur) => {
      acc[cur] = (acc[cur] || 0) + 1;
      return acc;
    }, {});
    const [score1, score2] = calculateScore(combi);
    const diff = score1 - score2;
    calculateDiff(diff, cnt);
  }

  // ➍ 최대 차이가 0 이상인 경우, 조합 반환
  if (maxdiff > 0) {
    const answer = Array(11).fill(0);
    for (const n of Object.keys(maxComb)) {
      answer[10 - n] = maxComb[n];
    }
    return answer;
  } else {
    // ➎ 최대 차이가 0인 경우, -1 반환
    return [-1];
  }
}

