// * 5-1
const solution = (arr1, arr2) => {
  let p1 = 0;
  let p2 = 0;
  let answer = [];

  while (p1 < arr1.length || p2 < arr.length) {
    const num1 = arr1[p1];
    const num2 = arr2[p2];
    if (num1 >= num2) {
      answer.push(num1);
      p1++;
    } else {
      answer.push(num2);
      p2++;
    }
  }
  while (p1 < arr1.length) answer.push(++p1);
  while (p2 < arr2.length) answer.push(++p2);

  return answer;
};

let arr1 = [1, 3, 5];
let arr2 = [2, 3, 6, 7, 9];

console.log(solution(arr1, arr2)); // [1, 2, 3, 3, 5, 6, 7, 9]
