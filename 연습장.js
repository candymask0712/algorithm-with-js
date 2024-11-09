function solution(n, heights) {
  let answer=0
  const arrows = []
  heights.forEach(ballon =>{
    // console.info(ballon, arrows)
    if(arrows.includes(ballon)){
      arrows[arrows.indexOf(ballon)] -= 1
    }else{
      arrows.push(ballon-1)
    }
  })
  return arrows.length
}

// 예시 테스트케이스 
console.info(solution(5, [2, 1, 5, 4, 3])); // 2
console.info(solution(5, [1, 2, 3, 4, 5])); // 5
console.info(solution(5, [4, 5, 2, 1, 4])); // 3