// * 7-12
function solution(num, arr) {
  arr.sort((a, b) => a - b);
  let lp = 0;
  let rp = arr.at(-1);

  let answer = 0;
  let cnt = 0;
  while (lp <= rp) {
    const mid = parseInt((lp + rp) / 2);
    // console.log(lp, rp, mid);
    if (isPossible(mid, num, arr)) {
      // console.log(mid, isPossible(mid, num, arr));
      answer = mid;
      lp = mid + 1;
    } else {
      rp = mid - 1;
    }
  }
  return answer;
}

function isPossible(distance, num, arr) {
  let prevDistance = 0;
  num--;
  for (let i = 1; i < arr.length; i++) {
    const diff = arr[i] - arr[i - 1];
    const totalDistance = diff + prevDistance;
    if (totalDistance >= distance) {
      num--;
      prevDistance = 0;
    } else {
      prevDistance += diff;
    }
  }
  return num <= 0;
}
const num = 3;
let arr = [1, 2, 8, 4, 9];
console.log(solution(num, arr));
