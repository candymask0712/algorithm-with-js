function solution(s) {
  var answer = true;

  let stack = [];

  for (let i = 0; i < s.length; i++) {
    const bracket = s[i];
    if (bracket === '(') {
      stack.push(bracket);
    } else {
      if (stack.length === 0) return false;
      stack.pop();
    }
  }
  if (stack.length !== 0) return false;
  return answer;
}
