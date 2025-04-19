function superDigit(n, k) {
  if (n.length === 1) return Number(n);
  const num = n.split('').reduce((acc, char) => acc + Number(char), 0);
  return superDigit(String(num).repeat(k), 1);
}
