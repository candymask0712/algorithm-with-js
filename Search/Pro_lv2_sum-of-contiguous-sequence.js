// * 예시 테스트 케이스
// console.info(solution([1, 2, 3, 4, 5], 7)); // [2, 3]
// console.info(solution([1, 1, 1, 2, 3, 4, 5], 5)); // [6, 6]
// console.info(solution([2, 2, 2, 2, 2], 6)); //	[0, 2]

// * 나의 풀이
function solution(sequence, k) {
  let lp = 0;
  let rp = 0;
  let sum = sequence[0];
  let length = Number.MAX_SAFE_INTEGER;
  let answer = [];

  const n = sequence.length;
  let cnt = 0;
  while (lp < n && rp < n) {
    cnt++;

    if (sum === k) {
      if (rp - lp < length) {
        answer = [lp, rp];
        length = rp - lp;
      }
      sum -= sequence[lp];
      lp++;
    } else if (sum > k) {
      sum -= sequence[lp];
      lp++;
    } else {
      rp++;
      sum += sequence[rp];
    }
  }
  return answer;
}

// * 다시 풀이

function solution(sequence, k) {
  let sum = 0;
  let minLen = Number.MAX_SAFE_INTEGER;
  let lp = 0;
  let rp = 0;
  let cnt = 0;
  const n = sequence.length;
  while ((lp <= n || rp <= n) && cnt < 1000) {
    cnt++;
    const len = rp - lp;
    console.log(len, sum);
    if (sum === k && len < minLen) {
      minLen = len;
      answer = [lp, rp - 1];
      sum -= sequence[lp];
      if (lp + 1 < n) sum += sequence[lp + 1];
      if (rp + 1 < n) sum += sequence[rp + 1];
      lp++;
      rp++;
    }
    if (sum < k) {
      rp++;
      sum += sequence[rp];
    }
    if (sum > k) {
      sum -= sequence[lp];
      lp++;
    }
  }
  return answer;
}

// * 다른 풀이
function solution(sequence, k) {
  var answer = [0, sequence.length - 1];
  let left = 0;
  let right = 0;

  let sum = sequence[left];
  while (right < sequence.length) {
    if (sum > k) {
      sum -= sequence[left];
      left++;
    } else if (sum < k) {
      right++;
      sum += sequence[right];
    } else {
      let distance = answer[1] - answer[0];
      let currentDistance = right - left;
      if (distance > currentDistance) {
        answer = [left, right];
      }
      sum -= sequence[left];
      left++;
    }
  }

  return answer;
}
