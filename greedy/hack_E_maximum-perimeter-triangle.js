function maximumPerimeterTriangle(sticks) {
  // ! 처음에 output 형태 이해 잘못해 풀이 지연
  let answer = [-1];

  sticks.sort((a, b) => b - a);

  for (let i = 0; i < sticks.length - 2; i++) {
    // ! 처음에는 조합, 순열로 생각했으나 문제 특성상 간단히 해결 가능
    const a = sticks[i];
    const b = sticks[i + 1];
    const c = sticks[i + 2];
    if (b + c > a) {
      return [c, b, a];
    }
  }
  return answer;
}
