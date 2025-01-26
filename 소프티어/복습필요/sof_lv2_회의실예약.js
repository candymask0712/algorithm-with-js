// * 1차 풀이
const fs = require('fs');
const input = fs.readFileSync('/dev/stdin').toString();

function processMeetingRooms(input) {
  const lines = input.trim().split('\n');
  const [N, M] = lines[0].split(' ').map(Number);
  const roomNames = lines.slice(1, N + 1);
  const meetings = lines.slice(N + 1).map((line) => {
    const [room, start, end] = line.split(' ');
    return { room, start: parseInt(start, 10), end: parseInt(end, 10) };
  });

  const roomSchedules = {};
  roomNames.forEach((room) => (roomSchedules[room] = []));

  meetings.forEach(({ room, start, end }) => {
    roomSchedules[room].push({ start, end });
  });

  const result = [];

  roomNames.sort().forEach((room, index) => {
    const schedule = roomSchedules[room].sort((a, b) => a.start - b.start);

    const availableTimes = [];
    let lastEnd = 9;

    schedule.forEach(({ start, end }) => {
      if (lastEnd < start) {
        availableTimes.push({ start: lastEnd, end: start });
      }
      lastEnd = Math.max(lastEnd, end);
    });

    if (lastEnd < 18) {
      availableTimes.push({ start: lastEnd, end: 18 });
    }

    result.push(`Room ${room}:`);

    if (availableTimes.length === 0) {
      result.push('Not available');
    } else {
      result.push(`${availableTimes.length} available:`);
      availableTimes.forEach(({ start, end }) => {
        result.push(
          `${start.toString().padStart(2, '0')}-${end
            .toString()
            .padStart(2, '0')}`
        );
      });
    }

    if (index !== roomNames.length - 1) result.push('-----');
  });

  console.log(result.join('\n'));
}

processMeetingRooms(input);
