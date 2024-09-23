// !✨✨ 플래그의 종류✨✨git
// ! g : 대상 문자열 내에서 패턴과 일치하는 모든 문자열 전역 검색(중요)
// i : 대소문자 구별 없이 패턴 검색
// m : 문자열의 행이 바뀌더라도 패턴 검색을 계속함

// !✨✨ 패턴 ✨✨

// ! 임의의 문자열 검색
// . : 임의의 문자열 의미.

// ! 역슬래시
// 1. 특수 문자 앞 사용 : 문자 그대로 해석되어야 함
// ex) /. : .(마침표)라는 의미로 사용

// 2/ 특수 문자 외 문자 앞 사용 : 문자 그대로가 아닌 특별한 의미

// ! 숫자/문자 검색
// \d : 숫자 ([0-9]와 같음)
// \D : 숫자가 아닌 문자
// \w : 알파벳, 숫자, 언더스코어 ([A-Za-z0-9_]와 같음)
// \W : 알파벳, 숫자, 언더스코어 가 아닌 문자

// ! 반복 검색
// a{m,n} : 앞선 패턴(a)이 최소 m번, 최대 n번 반복
// a{n} :  앞선 패턴(a)이 n번 반복
// a{n,} : 앞선 패턴(a)이 최소 n번 이상 반복
// a+ : 앞선 패턴(a)이 최소 한번 이상 반복 (a{1,}과 같음)
// a? : 앞선 패턴(a)이 최대 한번 이상 반복 (a{0,1}과 같음)

// ! OR검색
// | : or의 의미
// [] : []내에 문자는 or로 동작

// ! NOT 검색
// ^ : [...] 내의 ^은 not의 의미를 가짐
// ex) [^0-9] : 숫자를 제외한 문자라는 의미

// ! 시작/마지막 위치로 검색
// ^ : [...] 밖의 ^은 문자열의 시작을 의미 (앞에 붙여줌)
// $ : 문자열의 마지막을 의미 (뒤에 붙여줌)
// const target = 'https://naver.com'
// const regExp = /^https/
// regExp.test(target) // true
// const regExp = /com$/
// regExp.test(target) // true

// ! 자주 사용하는 정규식
// * 공백제거
// str = str.replace(/ /g, '');

// * 알파벳 소문자만 남기기
// s = s.toLowerCase().replace(/[^a-z]/g, '');

// * 알파벳 소문자, 숫자, 빼기, 밑줄, 마침표 제외 모든 문자 제거
str = str.replace(/[^a-z0-9-_.]/g, '');

// 1의 개수 체크
// n을 이진법 변환
// 그 배열의 길이를 구함
n
  .toString(2)
  // '//'해당되는 조건을 만나면 배열에 요소로 넣음
  .match(/1/g).length;
