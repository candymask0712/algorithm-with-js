// * 문제

// * 모범 답안 - 1 (시간복잡도 o(n*m))
function compareMaps(map1, map2){
  if(map1.size!==map2.size) return false;
  for(let [key, val] of map1){
      if(!map2.has(key) || map2.get(key)!==val) return false;
  }
  return true;
}
function solution(s, t){
  let answer=0;
  let tH = new Map();
  let sH = new Map();
  for(let x of t){
      if(tH.has(x)) tH.set(x, tH.get(x)+1);
      else tH.set(x, 1);
  }
  let len=t.length-1;
  for(let i=0; i<len; i++){
      if(sH.has(s[i])) sH.set(s[i], sH.get(s[i])+1);
      else sH.set(s[i], 1);
  }
  let lt=0;
  for(let rt=len; rt<s.length; rt++){
      if(sH.has(s[rt])) sH.set(s[rt], sH.get(s[rt])+1);
      else sH.set(s[rt], 1);
      if(compareMaps(sH, tH)) answer++;
      sH.set(s[lt], sH.get(s[lt])-1);
      if(sH.get(s[lt])===0) sH.delete(s[lt]);
      lt++;
  }
  return answer;
}

let a="bacaAacba";
let b="abc";
console.log(solution(a, b));

// * 모범 답안 2 (시간 복잡도 o(n))
function solution(s, t){
  let answer=0;
  let sH = new Map();
  for(let x of t){
      sH.set(x, (sH.get(x) || 0)-1);
  }
  let len=t.length-1;
  for(let i=0; i<len; i++){
      sH.set(s[i], (sH.get(s[i]) || 0)+1);
      if(sH.get(s[i])===0) sH.delete(s[i]);
  }
  let lt=0;
  for(let rt=len; rt<s.length; rt++){
      sH.set(s[rt], (sH.get(s[rt]) || 0)+1);
      if(sH.get(s[rt])===0) sH.delete(s[rt]);
      if(sH.size===0) answer++;
      sH.set(s[lt], (sH.get(s[lt]) || 0)-1);
      if(sH.get(s[lt])===0) sH.delete(s[lt]);
      lt++;
  }
  return answer;
}
console.log(solution("bacacbcba", "abc"));

// * 모범 답안 분석 (모범답안 2만 분석)
function solution(s, t){
  let answer=0;
  let sH = new Map();
  for(let x of t){
      sH.set(x, (sH.get(x) || 0)-1);
  }
  let len=t.length-1;
  for(let i=0; i<len; i++){
      sH.set(s[i], (sH.get(s[i]) || 0)+1);
      if(sH.get(s[i])===0) sH.delete(s[i]);
  }
  let lt=0;
  for(let rt=len; rt<s.length; rt++){
      sH.set(s[rt], (sH.get(s[rt]) || 0)+1);
      if(sH.get(s[rt])===0) sH.delete(s[rt]);

      if(sH.size===0) answer++;
      
      sH.set(s[lt], (sH.get(s[lt]) || 0)-1);
      if(sH.get(s[lt])===0) sH.delete(s[lt]);
      lt++;
  }
  return answer;
}
console.log(solution("bacacbcba", "abc"));
// * 3차 답안

// * 2차 답안 - 성공 (but 이중포문이라 시간복잡도 o(n*m)

const solution = (str, t) => {

  let answer=0
  let n= t.length
  let tmp = ""
  let h = new Map()

  for(let i=0; i<n; i++) tmp += str[i] 

  for(let i=0; i<n; i++){
   if(h.has(t[i])) h.set(t[i], h.get(t[i]) + 1)
   else h.set(t[i],1)
  }
  console.log(h)


  for(let i=0; i<str.length-n+1; i++){
    let flag=0
    console.log('i',i,tmp)
   tmp = tmp.substring(1,n)
   tmp += str[i+n]
   for(let i=0; i<n; i++){
    if(!h.has(tmp[i])) flag=1
   }
   if(flag===0) answer++
  }

  return answer
}


// * 1차 답안 - 없음