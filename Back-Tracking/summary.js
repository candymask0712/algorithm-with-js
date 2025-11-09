function combinationsWithRepetition(arr, n) {
  // 기본 케이스: n이 1이면 각 요소를 단일 요소 배열로 반환
  if (n === 1) {
    return arr.map((item) => [item]);
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
      const newCombination = [currentItem, ...subCombination];
      console.log(currentItem, subCombination, newCombination);
      result.push(newCombination);
    }
  }

  return result;
}

function combinationsWithoutRepetition(arr, n) {
  // 기본 케이스: n이 1이면 각 요소를 단일 요소 배열로 반환
  if (n === 1) {
    return arr.map((item) => [item]);
  }

  // n이 배열의 길이보다 크면 빈 배열 반환
  // ! 반복 불가 시의 차이점
  if (n > arr.length) {
    return [];
  }

  // 결과를 저장할 배열
  const result = [];

  // 배열의 각 요소에 대해
  for (let i = 0; i < arr.length - n + 1; i++) {
    const currentItem = arr[i];
    // 현재 요소 다음부터 끝까지의 부분 배열로 재귀 호출
    // ! 'i + 1'이 중복을 허용하지 않는 부분
    const subCombinations = combinationsWithoutRepetition(
      arr.slice(i + 1),
      n - 1
    );

    // 현재 요소를 각 하위 조합의 앞에 추가
    for (const subCombination of subCombinations) {
      result.push([currentItem, ...subCombination]);
    }
  }

  return result;
}

// * 중복을 허용하는 순열 (순서도 의미가 있음)
function permutationsWithRepetition(arr, n) {
  // 기본 케이스: n이 1이면 각 요소를 단일 요소 배열로 반환
  if (n === 1) {
    return arr.map((item) => [item]);
  }

  // 결과를 저장할 배열
  const result = [];

  // 배열의 각 요소에 대해
  for (let i = 0; i < arr.length; i++) {
    const currentItem = arr[i];
    // 전체 배열로 재귀 호출 (중복 허용)
    const subPermutations = permutationsWithRepetition(arr, n - 1);

    // 현재 요소를 각 하위 순열의 앞에 추가
    for (const subPermutation of subPermutations) {
      result.push([currentItem, ...subPermutation]);
    }
  }

  return result;
}

// * 중복을 허용하지 않는 순열 (순서도 의미가 있음)
function permutationsWithoutRepetition(arr, n) {
  // n이 배열의 길이보다 크면 빈 배열 반환 (불가능한 경우)
  if (n > arr.length) {
    return [];
  }

  // 기본 케이스: n이 1이면 각 요소를 단일 요소 배열로 반환
  if (n === 1) {
    return arr.map((item) => [item]);
  }

  // 결과를 저장할 배열
  const result = [];

  // 배열의 각 요소에 대해
  for (let i = 0; i < arr.length; i++) {
    const currentItem = arr[i];
    // 현재 요소를 제외한 나머지 배열로 재귀 호출 (중복 방지)
    const remainingItems = [...arr.slice(0, i), ...arr.slice(i + 1)];
    const subPermutations = permutationsWithoutRepetition(
      remainingItems,
      n - 1
    );

    // 현재 요소를 각 하위 순열의 앞에 추가
    for (const subPermutation of subPermutations) {
      result.push([currentItem, ...subPermutation]);
    }
  }

  return result;
}
