// 나의 풀이
function solution(arrayA, arrayB) {
  const arrayTotal = arrayA.concat(arrayB);
  arrayTotal.sort((a, b) => b - a);

  for (let i = arrayTotal[0]; i >= 1; i--) {
    if (isConditionA(arrayA, arrayB, i) || isConditionB(arrayA, arrayB, i))
      return i;
  }

  return 0;
}

function isAllElementDivided(array, number) {
  return array.every((element) => element % number === 0);
}
function isAllElementNotDivided(array, number) {
  return array.every((element) => element % number !== 0);
}

function isConditionA(arrayA, arrayB, number) {
  return (
    isAllElementDivided(arrayA, number) &&
    isAllElementNotDivided(arrayB, number)
  );
}

function isConditionB(arrayA, arrayB, number) {
  return (
    isAllElementDivided(arrayB, number) &&
    isAllElementNotDivided(arrayA, number)
  );
}

// 참고 풀이
function solution(arrayA, arrayB) {
  const aResult = getAnswer(arrayA, arrayB);
  const bResult = getAnswer(arrayB, arrayA);

  return aResult > bResult ? aResult : bResult;
}

function getAnswer(A, B) {
  A.sort((a, b) => a - b);
  for (let i = A[0]; i > 1; i--) {
    if (A.every((a) => a % i === 0) && !B.some((b) => b % i === 0)) return i;
  }
  return 0;
}
