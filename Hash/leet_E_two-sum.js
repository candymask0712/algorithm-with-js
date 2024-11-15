// * 나의 풀이 - 1
// ! 투포인터를 사용한 풀이 - 느림
var twoSum = function(nums, target) {
  let leftP = 0
  let rightP = 1
  const n = nums.length

  while(leftP < n) {
      if(nums[leftP]+ nums[rightP]===target) {
          return [leftP, rightP]
      }

      if(rightP < n-1)rightP++         
      else {
          leftP++
          rightP = leftP + 1
      }
  }
};

// * 나의 풀이 - 2
// ! 해시를 이용한 풀이 - 빠름
var twoSum = function(nums, target) {
  const h = new Map()
  const n = nums.length
  for(let i=0; i<n; i++){
      const diff = target - nums[i]
      if(h.has(diff)) return [h.get(diff), i]
      else h.set(nums[i], i)
  }
};