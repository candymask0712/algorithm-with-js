function solution(n, weak, dist) {
  const betweens = [];
  for (let i = 0; i < weak.length; i++) {
    const between =
      i === weak.length - 1 ? weak[0] + (n - weak[i]) : weak[i + 1] - weak[i];
    betweens.push(between);
  }

  dist.reverse();
  const m = betweens.length;

  // ..
}

// 참고 풀이
// https://velog.io/@longroadhome/%ED%94%84%EB%A1%9C%EA%B7%B8%EB%9E%98%EB%A8%B8%EC%8A%A4-LV.3-%EC%99%B8%EB%B2%BD%EC%A0%90%EA%B2%80-JS
function solution(n, weak, dist) {
  const len = weak.length;
  const linear_weak = new Array(len * 2 - 1).fill(0);

  for (let i = 0; i < len * 2 - 1; i++) {
    linear_weak[i] = i < len ? weak[i] : weak[i - len] + n;
  }

  dist.sort((a, b) => b - a);

  console.log(linear_weak);
  console.log(dist);

  for (let i = 1; i <= dist.length; i++) {
    const permutation = getPermutation(dist, i);

    // 모든 순열에 대해
    for (const permu of permutation) {
      for (let j = 0; j < len; j++) {
        // 확장된 취약점 배열을 잘라 시작점을 옮겨가면서 확인
        let line = linear_weak.slice(j, len + j);
        for (const p of permu) {
          // 현재 친구가 점검할 수 있는 최대 거리
          const coverage = line[0] + p;
          // 현재 친구가 점검할 수 있는 최대 거리보다 작은 취약점들만 남김
          line = line.filter((e) => e > coverage);
          if (!line.length) return i;
        }
      }
    }
  }

  return -1;
}

const getPermutation = (arr, n) => {
  if (n === 1) return arr.map((el) => [el]);
  const result = [];

  arr.forEach((fixed, idx, origin) => {
    const rest = [...origin.slice(0, idx), ...origin.slice(idx + 1)];
    const perms = getPermutation(rest, n - 1);
    const attached = perms.map((perm) => [fixed, ...perm]);
    result.push(...attached);
  });

  return result;
};
