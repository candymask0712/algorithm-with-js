var isPalindrome = function (s) {
  const cleanStr = s.toLowerCase().replace(/[^a-z0-9]/g, '');
  const n = cleanStr.length;

  for (let i = 0; i < Math.ceil(n / 2); i++) {
    if (cleanStr[i] !== cleanStr[n - i - 1]) return false;
  }
  return true;
};
