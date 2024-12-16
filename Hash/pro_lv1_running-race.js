// 나의 풀이
function solution(players, callings) {
  var answer = [];

  callings.forEach((calling) => {
    switchNeighborElement(calling, players);
  });

  return players;
}

function switchNeighborElement(el2, arr) {
  const index2 = arr.indexOf(el2);
  const index1 = index2 - 1;
  const el1 = arr[index1];

  arr.splice(index1, 1, el2);
  arr.splice(index2, 1, el1);

  return arr;
}

// 추가 풀이
function solution(players, callings) {
  // 선수 이름과 인덱스를 매핑하는 맵 생성
  const indexMap = new Map();
  players.forEach((player, index) => {
    indexMap.set(player, index);
  });

  // 호출 처리
  for (const name of callings) {
    const currentIndex = indexMap.get(name); // 현재 등수
    if (currentIndex > 0) {
      const prevIndex = currentIndex - 1; // 앞 선수의 등수

      // 선수 이름 교환
      const prevPlayer = players[prevIndex];
      players[prevIndex] = name;
      players[currentIndex] = prevPlayer;

      // 인덱스 맵 업데이트
      indexMap.set(name, prevIndex);
      indexMap.set(prevPlayer, currentIndex);
    }
  }

  return players;
}
