const fs = require('fs');
const input = fs.readFileSync('input.txt', 'utf-8').trim().split('\n');

const stations = input
  .slice(1)
  .map((location) => location.split(' ').map(Number));

function solution(stations) {
  let farSouthern = stations[0];

  stations.forEach((station) => {
    const [, locationY] = station;
    const [, farY] = farSouthern;

    if (locationY < farY) {
      farSouthern = station;
    }
  });

  return `${farSouthern[0]} ${farSouthern[1]}`;
}

console.log(solution(stations));
