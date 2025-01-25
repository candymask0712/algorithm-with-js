const fs = require('fs');
const input = fs.readFileSync('/dev/stdin').toString().trim().split('\n');
const n = input[0];

for (let i = 0; i < n; i++) {
  const line = `${i + 1} `.repeat(n).trim();
  console.log(line);
}
