// * 문제 링크

// * 3차 풀이
//? 시간복잡도: O()
//? 공간복잡도: O()

// * 2차 풀이
//? 시간복잡도: O()
//? 공간복잡도: O()

// * 1차 풀이
// ? 시간복잡도: O(n)
// ? 공간복잡도: O(n)
var reverseWords = function (s) {
  // ! replace 생략도 가능
  return s.trim().replace(/\s+/g, ' ').split(' ').reverse().join(' ');
};

// * 참고 풀이
// ? 시간복잡도: O(n)
// ? 공간복잡도: O(n)

// ! JS 구현은 입력 타입 제약 때문에 O(n) 보조 공간이 든다
var reverseWords = function (s) {
  return s
    .trim() // 1️⃣ 앞뒤 공백 제거
    .split(/\s+/) // 2️⃣ 하나 이상의 공백 기준으로 단어 분리
    .reverse() // 3️⃣ 단어 순서 뒤집기
    .join(' '); // 4️⃣ 단일 공백으로 합치기
};
