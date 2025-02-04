// * 모범 답안
function solution(n, m) {
  let answer = [];
  let tmp = Array.from({ length: m }, () => 0);
  function DFS(L, s) {
    if (L === m) {
      answer.push(tmp.slice());
    } else {
      for (let i = s; i <= n; i++) {
        tmp[L] = i;
        DFS(L + 1, i + 1);
      }
    }
  }
  DFS(0, 1);
  return answer;
}

// * 답안 분석

function solution(n, r) {
  let answer = [];

  // n개를 뽑아 저장해둘 배열
  let tmp = Array.from({ length: r }, () => 0);
  function DFS(L, s) {
    console.info('L', L, 's', s);
    if (L === r) {
      answer.push(tmp.slice());
    } else {
      // i를 s(뽑을 숫자)부터 시작하여 중복 방지
      for (let i = s; i <= n; i++) {
        // 저장배열의 L번째 숫자로 이번에 뽑은 숫자를 넣음
        tmp[L] = i;
        // i+1를 하여 같은 숫자 중복하여 뽑지 않도록 처리
        DFS(L + 1, i + 1);
      }
    }
  }
  // 첫번째 인자는 뽑는 개수, 두번째 인자는 다음에 뽑을 숫자를 뜻함
  DFS(0, 1);
  return answer;
}

console.log(solution(4, 2));

// * 3차 풀이

// * 2차 풀이

// * 1차 풀이 - 영상 보고 풀이
// ! 이제까지는 DFS안에서 루프가 돌 때 i 값이 고정적으로 루프를 돔
// ! 중복사용이 불가한 조합의 특성을 위해 루프 i값이 매 시행마다 유동적으로 변하는 형태
function solution(total, pick) {
  let answer = [];
  let tmp = Array.from({ length: pick }, () => 0);
  function DFS(L, r) {
    if (L === 2) {
      let com = '';
      for (let i = 0; i < tmp.length; i++) {
        com += tmp[i];
      }
      answer.push(com);
      // ! tmp에 임시로 넣은 값 넣을 때는 tmp.slice()
    } else {
      for (let i = r; i <= total; i++) {
        // ! 루프가 r부터 시작하므로 자연스럽게 이미 배정 된 숫자는 제외 됨
        tmp[L] = i;
        // ! 기획대로 L번째 자리에 숫자 i를 배정
        DFS(L + 1, i + 1);
        // ! L번째 자리의 수를 배정했으므로 레벨 +1
        // ! i를 사용했으므로 다음에는 숫자 i+1 배정할 수 있도록 설정
      }
    }
  }
  DFS(0, 1);
  // ! 0레벨부터 (0번째 숫자) 시작하여 1부터 다음 숫자로 배정하라는 의미
  return answer;
}

console.log(solution(4, 2));
