/**
 * @param {string} s
 * @return {boolean}
 */
var isValid = function (s) {
  const openBrackets = ['(', '{', '['];
  const validBrackets = ['()', '{}', '[]'];
  const stack = [];

  for (const bracket of s) {
    if (openBrackets.includes(bracket)) {
      stack.push(bracket);
    } else {
      if (stack.length === 0) return false;
      const poped = stack.pop();
      const concat = poped + bracket;
      if (!validBrackets.includes(concat)) return false;
    }
  }
  if (stack.length !== 0) return false;

  return true;
};
