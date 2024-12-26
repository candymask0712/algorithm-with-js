function solution(relation) {
  const candidateKeys = [];
  const n = relation.length;
  const m = relation[0].length;

  const numbers = Array.from({ length: m }, (_, i) => i);

  for (let i = 1; i <= m; i++) {
    const combinations = getCombinations(numbers, i);

    for (const combination of combinations) {
      // 이미 등록된 후보키가 combination의 부분집합이면 패스
      if (isSubset(candidateKeys, combination)) {
        continue;
      }

      // 유일성 체크
      const unique = new Set();
      for (const row of relation) {
        let str = '';
        for (const colIndex of combination) {
          str += row[colIndex];
        }
        unique.add(str);
      }

      // 유일성을 만족하면 후보키 등록
      if (unique.size === n) {
        candidateKeys.push(combination);
      }
    }
  }

  return candidateKeys.length;
}

// 이미 찾은 후보키 중 하나가 지금 조합의 부분집합인지 판별
function isSubset(candidateKeys, combination) {
  // candidateKeys: [[0], [1,2], ...] 형태
  // combination: 예) [1,2] 혹은 [0,3]
  for (const key of candidateKeys) {
    // key가 combination에 모두 들어 있으면 = key가 combination의 부분집합
    // 예) key = [1,2], combination = [0,1,2] 인 경우 true
    let includedCount = 0;
    for (const colIndex of key) {
      if (combination.includes(colIndex)) {
        includedCount++;
      }
    }
    // key 전체 원소가 들어 있다면
    if (includedCount === key.length) {
      return true;
    }
  }
  return false;
}

// 조합을 구하는 함수
function getCombinations(arr, selectCount) {
  const results = [];
  function dfs(start, path) {
    if (path.length === selectCount) {
      results.push([...path]);
      return;
    }
    for (let i = start; i < arr.length; i++) {
      path.push(arr[i]);
      dfs(i + 1, path);
      path.pop();
    }
  }
  dfs(0, []);
  return results;
}
