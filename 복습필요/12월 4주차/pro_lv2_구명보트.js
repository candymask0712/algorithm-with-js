function solution(people, limit) {
  var answer = 0;

  people.sort((a, b) => b - a);
  const n = people.length;
  let lp = 0;
  let rp = n - 1;

  // ! 처음에는 = 부호 사용하지 않음
  // ! rp에 변동이 없이 한 명씩만 싣는 경우 = 경우 생김
  while (lp <= rp) {
    if (people[lp] + people[rp] <= limit) {
      lp++;
      rp--;
    } else {
      lp++;
    }
    answer++;
  }

  return answer;
}
