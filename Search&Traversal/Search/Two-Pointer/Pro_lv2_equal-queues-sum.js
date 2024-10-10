// 
function solution(queue1, queue2) {
  const arr = queue1.concat(queue2);
  const totalSum = arr.reduce((acc, num) => acc + num, 0);
  const targetSum = totalSum / 2;
  
  if (totalSum % 2 !== 0) {
      return -1; // 총 합이 홀수인 경우 불가능
  }

  let count = 0;
  let left = 0;
  let right = queue1.length - 1;
  let currentSum = queue1.reduce((acc, num) => acc + num, 0);
  const n = arr.length;

  while (count <= n * 2) {
      if (currentSum === targetSum) {
          return count;
      }

      if (currentSum < targetSum && right < n - 1) {
          right++;
          currentSum += arr[right];
          count++;
      } else if (currentSum > targetSum && left < n) {
          currentSum -= arr[left];
          left++;
          count++;
      } else {
          break; // 더 이상 진행할 수 없는 경우
      }
  }

  return -1; // 불가능한 경우
}
