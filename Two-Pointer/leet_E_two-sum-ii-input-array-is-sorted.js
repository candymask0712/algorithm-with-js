var twoSum = function (numbers, target) {
  const n = numbers.length;
  let lp = 0;
  let rp = n - 1;

  while (rp > lp) {
    const sum = numbers[lp] + numbers[rp];
    if (sum === target) return [lp + 1, rp + 1];
    else if (sum < target) lp++;
    else rp--;
  }
};
