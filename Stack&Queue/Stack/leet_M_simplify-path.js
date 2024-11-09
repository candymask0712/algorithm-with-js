/**
 * @param {string} path
 * @return {string}
 */
var simplifyPath = function (path) {
  // 스택 생성
  const stack = [];

  // '/'를 기준으로 경로를 분할
  const directories = path.split('/');

  // 각 디렉토리 요소를 순회
  for (const dir of directories) {
    // 현재 디렉토리가 비어있거나 '.'인 경우 무시
    if (dir === '' || dir === '.') continue;

    // '..'인 경우 스택에서 마지막 요소 제거 (상위 디렉토리로 이동)
    if (dir === '..') {
      if (stack.length > 0) {
        stack.pop();
      }
    }
    // 일반적인 디렉토리명인 경우 스택에 추가
    else {
      stack.push(dir);
    }
  }

  // 최종 경로 생성
  return '/' + stack.join('/');
};
