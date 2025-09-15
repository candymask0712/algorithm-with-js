const arr = ['A', 'B', 'C', 'D'];
const selectNum = 2;

console.log('🔹 순열(Permutation) - 순서 O, 중복 X');
console.log(getPermutations(arr, selectNum));

console.log('\n🔹 조합(Combination) - 순서 X, 중복 X');
console.log(getCombinations(arr, selectNum));

console.log('\n🔹 중복 순열(Repeated Permutation) - 순서 O, 중복 O');
console.log(getRepeatedPermutations(arr, selectNum));

console.log('\n🔹 중복 조합(Repeated Combination) - 순서 X, 중복 O');
console.log(getRepeatedCombinations(arr, selectNum));

// ✅ 순열(Permutation) - 순서 O, 중복 X
function getPermutations(arr, selectNum) {
  if (selectNum === 1) return arr.map((el) => [el]);

  const result = [];

  arr.forEach((num, index, arr) => {
    const rest = [...arr.slice(0, index), ...arr.slice(index + 1)];
    const permutation = getPermutations(rest, selectNum - 1);
    permutation.forEach((subArr) => {
      result.push([...subArr, num]);
    });
  });

  return result;
}

// ✅ 중복 순열(Repeated Permutation) - 순서 O, 중복 O
function getRepeatedPermutations(arr, selectNum) {
  if (arr.length === 1) return arr.map((el) => [el]);

  const result = [];

  arr.forEach((num, index, arr) => {
    // ! 그냥 순열과 달리 재귀에 arr를 그대로 넣어줌
    const permutation = getPermutations(arr, selectNum - 1);
    permutation.forEach((subArr) => {
      result.push([...subArr, num]);
    });
  });

  return result;
}

let dx = [0, 0, 1, -1];
let dy = [-1, 1, 0, 0];

// ✅ 조합(Combination) - 순서 X, 중복 X
function getCombinations(arr, selectNum) {
  if (selectNum === 1) return arr.map((el) => [el]);

  const result = [];

  arr.forEach((num, index, arr) => {
    // ! 조합은 순열과 다르게 중복 방지를 위해 본인보다 뒤에 있는 요소만 활용
    const rest = arr.slice(index + 1);
    const combinations = getCombinations(rest, selectNum - 1);
    combinations.forEach((subArr) => {
      result.push([...subArr, num]);
    });
  });

  return result;
}

// ✅ 중복 조합(Repeated Combination) - 순서 X, 중복 O
function getRepeatedCombinations(arr, selectNum) {
  if (selectNum === 1) return arr.map((el) => [el]);

  const result = [];

  arr.forEach((num, index, arr) => {
    // ! 중복조합은 딱 본인까지만 자름
    const combinations = getRepeatedCombinations(
      arr.slice(index),
      selectNum - 1
    );
    combinations.forEach((subArr) => {
      result.push([...subArr, num]);
    });
  });

  return result;
}
