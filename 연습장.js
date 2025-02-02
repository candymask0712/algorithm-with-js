// * 5-4
function solution(k, arr) {
  let rp = 0;
  const n = arr.length;
  let answer = 0;
  for (let lp = 0; lp < n; lp++) {
    let sum = arr[lp];
    let rp = lp;
    while (sum <= k && rp < n) {
      answer++;
      rp++;
      sum += arr[rp];
    }
  }
  return answer;
}

let arr = [1, 3, 1, 2, 3];
console.log(solution(5, arr)); // 10
