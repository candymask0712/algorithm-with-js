function solution(arr){
  let answer
  const n = arr.length
  let ch = Array.from({length:n+1}, ()=>0)
  let g1 = []
  let g2 = []
  let g3 = []
  function DFS(k, g){
    if(ch[k] === 0) {
      const el  = arr[k-1]
      g.push(el)
      ch[k]=1
      DFS(el, g)
    }
   }


   ch[0] = 1
   DFS(1, g1)

  //  console.info(g1)
  // if(g1.length === n-1) return 0

   let next = 0
    for(let i=0; i<n; i++){
      if(ch[i] === 0){

        next = i
        break
      }
    }

   DFS(next, g2)
  //  console.info(g2)
   for(let i=1; i<n; i++){
     if(ch[i] === 0){

       next = i
       break
     }
   }
   DFS(next, g3)
  //  console.info(g3)


  console.info(g1)
  console.info(g2)
  console.info(g3)

   const len1 = g1.length
   const len2 = g2.length
   const len3 = g3.length 
   
   if(g1.length===n) return 0
   if(g2.length===n) return 0
   if(g3.length===n) return 0

  return Math.max(len1*len2, len2*len3, len1*len3)
}

// console.info(solution([8,6,3,7,2,5,1,4])); // 12
// console.info(solution([2,3,1])); // 0
// console.info(solution([1,2,3,4,5,6,7,8,9,10])); // 1
// console.info(solution([5,4,3,2,1])); // 4
// console.info(solution([10,9,8,7,6,5,4,3,2,1])); // 4
// console.info(solution([1])); // 0
// console.info(solution([2,1,3,4,5])); // 2
// console.info(solution([3,7,2,4,1,5,6])); // 6
// console.info(solution([1,2,3,4,5,6,7,8,9])); // 1
// console.info(solution([4,2,3,6,1,5])); // 4

// ! 내가 만든 풀이의 반례
console.info(solution([1,2,3,6,4,5])); // 3 

// 맞는 풀이
function solution(cards) {
  const openBoxes = (start, opened) => {
      let box = start;
      let count = 0;
      while (!opened[box]) {
          opened[box] = true;
          box = cards[box] - 1;
          count++;
      }
      return count;
  };
  
  let maxScore = 0;
  
  for (let i = 0; i < cards.length; i++) {
      const opened = Array(cards.length).fill(false);
      const group1 = openBoxes(i, opened);
      for (let j = 0; j < cards.length; j++) {
          if (opened[j]) {
              continue;
          }
          const group2 = openBoxes(j, opened);
          maxScore = Math.max(maxScore, group1 * group2);
      }
  }
  
  return maxScore;
}
let answer=Number.MAX_SAFE_INTEGER;

for(let i=0; i<n; i++){
 
}