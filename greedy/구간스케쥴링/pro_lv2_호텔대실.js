// * 참고 답안
// ! HH:MM 형태의 시간을 분단위의 시간으로 변환하는 테크닉 필요
function solution(book_time) {
  let room = [];

  // 오름차순 정렬 후 순회
  book_time.sort().forEach(([start, end]) => {
    const startTime = toMinute(start);
    const endTime = toMinute(end) + 10;

    // 시작 시간(startTime)보다 작은 값 서치 => 사용이 끝난 방 확인
    const idx = room.findIndex((v) => v <= startTime);

    // 없다면 종료 시간(endTime) push => 방 추가
    // 있다면 해당 room의 종료 시간(endTime) 갱신 => 사용이 끝난 방에 들어감
    if (idx === -1) room.push(endTime);
    else room[idx] = endTime;
  });

  return room.length;
}

// 분으로 통일하는 함수
function toMinute(str) {
  const [hour, minute] = str.split(':');
  return hour * 60 + +minute;
}

// 두번째 풀이 - 정답
function solution(book_time) {
  book_time = book_time.map(([start, end]) => [
    convertToMinutes(start),
    convertToMinutes(end) + 10,
  ]);
  // ! 처음에 정렬을 종료 시간 기준으로해서 오답 됨
  book_time.sort((a, b) => a[0] - b[0]);
  let rooms = [book_time[0][1]];

  const n = book_time.length;

  for (let i = 1; i < n; i++) {
    const [currentStart, currentEnd] = book_time[i];
    const availableRoom = rooms.find((room) => room <= currentStart);
    if (availableRoom) {
      const roomIndex = rooms.indexOf(availableRoom);
      rooms.splice(roomIndex, 1, currentEnd);
    } else {
      rooms.push(currentEnd);
    }
    rooms.sort((a, b) => a - b);
  }
  return rooms.length;
}

function convertToMinutes(time) {
  const [hours, minutes] = time.split(':');
  return Number(hours) * 60 + Number(minutes);
}
