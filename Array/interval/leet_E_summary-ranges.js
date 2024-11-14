// * 나의 풀이 - 조건이 지저분하고 복잡
var summaryRanges = function (nums) {
  let q = [];
  const answer = [];
  const n = nums.length;

  for (let i = 0; i < n; i++) {
    const cur = nums[i];
    console.log(i, cur, q, answer);
    if (q.length === 0) {
      q.push(cur);
      continue;
    }
    const prev = nums[i - 1];
    if (Math.abs(cur - prev) === 1 && i !== n - 1) q.push(cur);
    else {
      if (q.length === 1) {
        const onlyNum = q.pop();
        answer.push(`${onlyNum}`);
      } else {
        const startNum = q[0];
        const lastNum = q[q.length - 1];
        answer.push(`${startNum}->${lastNum}`);
        q = [cur];
      }
    }
  }
  return answer;
};

function summaryRanges(nums) {
  const result = [];

  if (nums.length === 0) return result;

  let start = 0;

  for (let i = 0; i < nums.length; i++) {
    // 마지막 요소이거나 연속되지 않는 숫자를 만났을 때
    if (i === nums.length - 1 || nums[i + 1] !== nums[i] + 1) {
      // 시작과 끝이 같은 경우
      if (start === i) {
        result.push(nums[start].toString());
      }
      // 시작과 끝이 다른 경우
      else {
        result.push(`${nums[start]}->${nums[i]}`);
      }
      // 다음 범위의 시작점 갱신
      start = i + 1;
    }
  }

  return result;
}
