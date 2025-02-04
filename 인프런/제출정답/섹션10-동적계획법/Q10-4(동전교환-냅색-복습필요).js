// * 모범답안
// 냅섹 알고리즘
// 동전의 종류나 거스름 금액이 크게 늘 경우 DFS로 풀이 불가 -> DY풀이 필요
// ! 코플릿-알고리즘 adv.04 - 금고를 털어라
// ! 코플릿-토이.37 - coinChange와 비교 필요

function solution(m, coin) {
  let answer = 0;
  let dy = Array.from({ length: m + 1 }, () => 1000);
  // ! 먼저 0 ~ 15원까지 포괄하는 배열을 만듬
  // ! 각 배열에 n번째에 들어갈 수는 n원을 지불할 때 필요한 최소 동전의 개수
  dy[0] = 0;
  // ! 다이나믹 순회를 위해 초기값 지정

  for (let i = 0; i < coin.length; i++) {
    // ! coin배열 [1,2,5]를 순휘하면서 각 동전을 넣어본
    for (let j = coin[i]; j <= m; j++) {
      // ! 각 동전의 금액 부터 시작해야함
      dy[j] = Math.min(dy[j], dy[j - coin[i]] + 1);
      // ! 각 동전을 넣었을 때 기존값( dy[j] )과 새동전을 사용한 값 ( dy[j-coin[i]]+1 )를 비교
      // ! (5원 기준) dy[j-coin[i]]+1 는  10원 지불을 계산 시 기존 5원 지불의 동전 수를 사용하고
      // ! 동전하나를 추가로 사용했으니 +1을 해주는 방식
    }
  }
  answer = dy[m];
  return answer;
}

// 5차 - 정답
const solution = (m, coin) => {
  let ch = Array.from({ length: m + 1 }, () => 0);
  const n = coin.length;
  for (let i = 0; i < n; i++) {
    const money = coin[i];
    ch[1] = 1;
    // ! 동전의 값이 오름차순이고 값 차이가 클때만 적용 가능
    // ! 정답이 더 좋아 보임
    for (let j = money; j <= m; j += money) {
      ch[j] = ch[j - money] + 1;
    }
  }
  return ch[m];
};

// * 4차 풀이 - 정답 but 답안 부분적으로 부족함

const solution = (m, coin) => {
  let ch = Array.from({ length: m + 1 }, () => 0);
  ch[0] = 0;

  for (let i = 0; i < coin.length; i++) {
    // ! ch[0]=0 부분 덕분에 굳이 넣지 않아도 자동으로 계산 됨
    ch[coin[i]] = 1;
    for (let j = coin[i]; j < ch.length; j++) {
      // ! 동전 배열이 동전의 크기순으로 오지 않을 경우 오답 가능성
      ch[j] = ch[j - coin[i]] + 1;
      console.log('ch', JSON.parse(JSON.stringify(ch)));
    }
  }
};

// * 3차 풀이 - 성공 (엣지 케이스 대응 부족)
const solution = (m, coin) => {
  let ch = Array.from({ length: m + 1 }, () => 0);
  console.log(ch);
  ch[0] = 0;

  for (let i = 0; i < coin.length; i++) {
    for (let j = coin[i]; j < ch.length; j++) {
      ch[j] = ch[j - coin[i]] + 1;
      // ! 기존 ch[j] 값과 비교없이 무조건 값 교체
      // ! 동전 배열의 순서 등 다른 변수 있을 시 답안에 영향 있을 수 있다
    }
  }
  return ch[m];
};

let arr = [1, 2, 5];
console.log(solution(15, arr));

// * 2차 풀이 - 성공
const solution = (m, coin) => {
  let ch = Array.from({ length: m + 1 }, () => 1000);

  for (let i = 0; i < coin.length; i++) {
    ch[i] = i;
    // ! 매 동전 단위마다 정해주는 것으로 풀이
    // ! 모범답안은 루프 밖에서 0번째 값을 0으로 처리하는 것으로 한번에 풀이
    for (let j = coin[i]; j < ch.length; j++) {
      ch[j] = Math.min(ch[j], ch[j - coin[i]] + 1);
      console.log('ch[i]', ch[i], 'ch', ch, 'i', i);
      // ! 처음에 콘솔을 계산 전 값에 찍어 해맴 -> 콘솔은 루프 최 하단 깊숙한 곳에 지정하자
    }
  }
  return ch[15];
};

let arr = [1, 2, 5];
console.log(solution(15, arr));

// * 1차 풀이 - 정답보고 풀이
const solution = (m, coin) => {
  let ch = Array.from({ length: m + 1 }, () => 1000);
  ch[0] = 0;

  for (let i = 0; i < coin.length; i++) {
    for (let j = coin[i]; j < ch.length; j++) {
      // ! 처음에 j의 시작을 단순히 i로 해서 풀이 실패
      // ! 갈수록 조건 설정이 중요하니 신중히 판단 필요
      ch[j] = Math.min(ch[j], ch[j - coin[i]] + 1);
    }
  }
  return Math.min(...ch);
};

let arr = [1, 2, 5];
console.log(solution(15, arr));
