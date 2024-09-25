// * 문제
// 두 배열 합치기
// 오름차순으로 정렬이 된 두 배열이 주어지면 두 배열을 오름차순으로 합쳐 출력하는 프로그램
// 을 작성하세요.

// ▣ 입력설명
// 첫 번째 줄에 첫 번째 배열의 크기 N(1<=N<=100)이 주어집니다.
// 두 번째 줄에 N개의 배열 원소가 오름차순으로 주어집니다.
// 세 번째 줄에 두 번째 배열의 크기 M(1<=M<=100)이 주어집니다.
// 네 번째 줄에 M개의 배열 원소가 오름차순으로 주어집니다.
// 각 리스트의 원소는 int형 변수의 크기를 넘지 않습니다.

// ▣ 출력설명
// 오름차순으로 정렬된 배열을 출력합니다.

// ▣ 입력예제 1
// 3
// 1 3 5
// 5
// 2 3 6 7 9

// ▣ 출력예제 1
// 1 2 3 3 5 6 7 9

function solution(arr1, arr2) {
  let p1 = 0;
  let p2 = 0;
  const n1 = arr1.length;
  const n2 = arr2.length;
  let answer = [];

  while (p1 < n1 && p2 < n2) {
    const e1 = arr1[p1];
    const e2 = arr2[p2];
    console.warn(e1, e2);
    console.info(p1, p2, answer);
    if (e1 < e2) {
      answer.push(e1);
      p1++;
    } else {
      answer.push(e2);
      p2++;
    }
  }
  // ! 배열 길이가 차이나므로 남은 요소 처리 주의
  while (p1 < n1) answer.push(arr1[p1++]);
  while (p2 < n2) answer.push(arr2[p2++]);
  return answer;
}

console.info(solution([1, 3, 5], [2, 3, 6, 7, 9]));
