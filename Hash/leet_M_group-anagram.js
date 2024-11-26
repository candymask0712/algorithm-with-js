/**
 * @param {string[]} strs
 * @return {string[][]}
 */
var groupAnagrams = function (strs) {
  const answer = [];
  const h = new Map();
  for (const str of strs) {
    const sortedStr = str.split('').sort().join('');
    if (h.has(sortedStr)) h.set(sortedStr, [...h.get(sortedStr), str]);
    else h.set(sortedStr, [str]);
  }

  for (const [key, words] of h) {
    answer.push(words);
  }

  return answer;
};
