// * 1번째 풀이
const fs = require('fs');
const input = fs.readFileSync('/dev/stdin').toString().trim();
const [K, P, N] = input.split(' ').map(BigInt);
const MOD = BigInt(1000000007);

let count = N;
let totalVirus = K;

while (count > 0) {
  totalVirus *= P;
  totalVirus %= MOD;
  count--;
}

console.log(Number(totalVirus));
