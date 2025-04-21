// * 5-2
const solution = (arr1, arr2) => {
  let p1 = 0;
  let p2 = 0;

  const n = arr1.length;
  const m = arr2.length;
  const answer = [];

  // arr1.sort((a, b) => a - b);
  // arr2.sort((a, b) => a - b);

  arr1.sort();
  arr2.sort();

  while (p1 < n && p2 < m) {
    if (arr1[p1] === arr2[p2]) {
      answer.push(arr1[p1]);
      p1++;
      p2++;
    } else if (arr1[p1] > arr2[p2]) {
      p2++;
    } else {
      p1++;
    }
  }
  return answer;
};

let arr1 = [1, 3, 9, 5, 2];
let arr2 = [3, 2, 5, 7, 8];

console.log(solution(arr1, arr2)); // [2,3,5]
