// * 문제 내용
// 방향그래프가 주어지면 1번 정점에서 N번 정점으로 가는 모든 경로의 가지 수를 출력하는 프
// 로그램을 작성하세요. 아래 그래프에서 1번 정점에서 5번 정점으로 가는 가지 수는
// 1 2 3 4 5
// 1 2 5
// 1 3 4 2 5
// 1 3 4 5
// 1 4 2 5
// 1 4 5
// 총 6 가지입니다.
// ▣ 입력설명
// 첫째 줄에는 정점의 수 N(1<=N<=20)와 간선의 수 M가 주어진다. 그 다음부터 M줄에 걸쳐 연
// 결정보가 주어진다.
// ▣ 출력설명
// 총 가지수를 출력한다.
// ▣ 입력예제 1
// [
//   [5, 9],
//   [1, 2],
//   [1, 3],
//   [1, 4],
//   [2, 1],
//   [2, 3],
//   [2, 5],
//   [3, 4],
//   [4, 2],
//   [4, 5]
// ];
// ▣ 출력예제 1
// 6

// * 나의 풀이
function solution(arr, k) {
  let answer = 0;

  const list = Array.from({ length: k + 1 }, () => []);
  // console.info(list);
  arr.forEach(([start, end]) => {
    // console.info(start, list[start]);
    list[start].push(end);
  });

  console.info(list);
  const isVisited = Array(k + 1).fill(0);
  isVisited[1] = 1;
  function DFS(n) {
    if (n === k) {
      answer++;
      return;
    }
    list[n].forEach((next) => {
      if (!isVisited[next]) {
        isVisited[next] = 1;
        DFS(next);
        isVisited[next] = 0;
      }
    });
  }
  DFS(1);

  return answer;
}

const arr = [
  [5, 9],
  [1, 2],
  [1, 3],
  [1, 4],
  [2, 1],
  [2, 3],
  [2, 5],
  [3, 4],
  [4, 2],
  [4, 5]
];

console.info(solution(arr, 5)); // 6
