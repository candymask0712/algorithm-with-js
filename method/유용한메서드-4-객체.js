// ! ✨✨✨✨✨✨✨✨✨✨
// ! ✨✨✨✨객체✨✨✨✨
// ! ✨✨✨✨✨✨✨✨✨✨...

// ! ✨✨✨✨✨✨✨✨✨✨
// ! ✨✨✨✨SET객체✨✨✨
// ! ✨✨✨✨✨✨✨✨✨✨
// 자료형에 관계 없이 원시/참조형 모두 유일한 값 저장하는 객체
// let 이름 new Set() => '이름'으로 set객체 선언
// 이름.add(value) - 추가
// 이름.size - 길이 구하기
// 이름.delete(value) - 삭제
// 이름.clear(value) - 모든 요소 제거
// 이름.has(value) - boolean 반환
// 이름.forEach(callbackFn[, thisArg]) - 삽입 순으로 Set 객체 내에 있는 각 값에 대해 한 번 callbackFn을 호출합니다. thisArg 매개변수가 forEach에 제공된 경우, 이는 각 콜백에 대해 this 값으로 사용됩니다.
// let arr = Array.from(이름) - set 객체의 배열화

// ! ✨✨✨✨✨✨✨✨✨✨
// ! ✨✨✨✨해쉬✨✨✨✨..
// ! ✨✨✨✨✨✨✨✨✨✨
//  let 변수명 = new Map() => '변수명'으로 빈 해쉬맵 선언
//  해쉬.has(이름) => 해쉬맵이 '이름'에 해당하는 키를 가지고 있는지 T/F 반환
//  해쉬.set(이름, 내용) => 해쉬맵에서 '이름'에 해당하는 키 만들고 '내용'을 값으로 넣음
//  해쉬.get(이름) => 해쉬맵에서 '이름'에 해당하는 키의 값을 반환
//  해쉬.keys(): 해쉬맵의 모든 key들을 반환
//  해쉬.delete(key) : 삭제
//  for (let [key, val] of sH) {}

let graph = Array.from(Array(n + 1), () => Array(n + 1).fill(0));
