// 처음 풀이
// 정확성 통과, 효율성 절반 통과
function solution(gems) {
  let answer = [1, gems.length];
  const gemType = new Set(gems);
  let lp = 0,
    rp = 0;

  const gemCount = new Map();
  for (const type of gemType) {
    gemCount.set(type, 0);
  }
  gemCount.set(gems[0], 1);

  while (lp <= rp && rp < gems.length) {
    if (isAllTypes(gemCount)) {
      if (rp - lp < answer[1] - answer[0]) {
        answer = [lp + 1, rp + 1];
      }
      gemCount.set(gems[lp], gemCount.get(gems[lp]) - 1);
      lp++;
    } else {
      rp++;
      gemCount.set(gems[rp], gemCount.get(gems[rp]) + 1);
    }
  }

  return answer;
}

function isAllTypes(hash) {
  for (const [key, value] of hash) {
    if (value <= 0) return false;
  }
  return true;
}

// 두번째 풀이

function solution(gems) {
  const totalTypes = new Set(gems).size;
  const gemCount = new Map();
  let answer = [1, gems.length];
  let lp = 0,
    rp = 0;
  // ! 유니크 변수 도입으로 보석 객체 순회하지 않고도 확인 가능
  let unique = 0;

  gemCount.set(gems[0], 1);
  unique = 1;

  // lp, rp 비교하는 조건은 rp만 남김
  // lp가 증가할 때는 rp가 이미 해당 보석을 포함하여 이동했기 때문에 rp가 lp를 따라잡지 못합니다.
  while (rp < gems.length) {
    if (unique === totalTypes) {
      if (rp - lp < answer[1] - answer[0]) {
        answer = [lp + 1, rp + 1];
      }
      const leftGem = gems[lp];
      gemCount.set(leftGem, gemCount.get(leftGem) - 1);
      if (gemCount.get(leftGem) === 0) {
        unique--;
      }
      lp++;
    } else {
      rp++;
      if (rp === gems.length) break;
      const rightGem = gems[rp];
      gemCount.set(rightGem, (gemCount.get(rightGem) || 0) + 1);
      if (gemCount.get(rightGem) === 1) {
        unique++;
      }
    }
  }

  return answer;
}
