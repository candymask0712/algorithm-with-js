// * 나의 풀이

var containsNearbyDuplicate = function(nums, k) {
  const h = new Map()
  const n = nums.length
  for(let i=0; i<n; i++){
      const num = nums[i]
      if(h.has(num)) {
          const index = h.get(num)
          const diff = Math.abs(index-i)
          if(diff <= k) return true
          else h.set(num, i)
      } else {
          h.set(num, i)
      }
  }
  return false

};