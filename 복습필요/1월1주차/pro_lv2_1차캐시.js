function solution(cacheSize, cities) {
  let answer = 0;
  const cache = [];

  // ! chageCacheByLRU에서 cacheSize가 0인 경우에는 캐싱이 되는 것처럼 동작하므로 예외처리
  if (cacheSize === 0) return cities.length * 5;

  cities.forEach((city) => {
    const cityToUpperCace = city.toUpperCase();
    if (cache.includes(cityToUpperCace)) {
      if (cache.at(-1) !== cityToUpperCace) {
        chageCacheByLRU(cache, cityToUpperCace);
      }
      answer += 1;
    } else {
      if (cache.length === cacheSize) cache.shift();
      cache.push(cityToUpperCace);
      answer += 5;
    }
  });

  return answer;
}

// ! 처음에는 캐시에 이미 요소가 있는 경우를 고려하지 않아  push, shift 사용
// ! 이후 캐시에 이미 요소가 있는 경우를 고려하여 캐시를 업데이트하는 함수 작성
function chageCacheByLRU(cache, newElement) {
  const newElementIndex = cache.indexOf(newElement);
  cache.splice(newElementIndex, 1);

  cache.push(newElement);
}
