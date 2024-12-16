// 나의 풀이

function solution(keymap, targets) {
  const keyPressMap = new Map();

  keymap.forEach((key) => {
    const keyLength = key.length;
    for (let i = 0; i < keyLength; i++) {
      const char = key[i];
      if (keyPressMap.has(char)) {
        keyPressMap.set(char, Math.min(keyPressMap.get(char), i + 1));
      } else {
        keyPressMap.set(char, i + 1);
      }
    }
  });

  return targets.map((target) => {
    let count = 0;
    for (const char of target) {
      if (keyPressMap.has(char)) count += keyPressMap.get(char);
      else return -1;
    }
    return count;
  });
}
