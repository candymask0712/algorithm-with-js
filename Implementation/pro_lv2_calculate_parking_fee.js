// * 접근 방법
// A와 B의 길이는 1 이상 100,000 이하 => 10초 기준 O(n^2)까지 사용가능


// 나의 최근 풀이 (24.09.18)
function solution(fees, records) {
  var answer = [];
  const currentCars = new Map()
  const totalTime = new Map()

  records.forEach(record => {
      const [time, carNumber, type] = record.split(' ')
      if(type === 'IN') {
          currentCars.set(carNumber, time)
      } else {
          const inTime = currentCars.get(carNumber)
          const outTime = time
          const minutes = subtractMinutesDifference(inTime, outTime)
          if(totalTime.has(carNumber)) {
              totalTime.set(carNumber, totalTime.get(carNumber) + minutes)
          } else {
              totalTime.set(carNumber, minutes)
          }
          currentCars.delete(carNumber)
      }
  })

  for(const [carNumber, inTime] of currentCars) {
          const outTime = '23:59'
          const minutes = subtractMinutesDifference(inTime, outTime)
          if(totalTime.has(carNumber)) {
              totalTime.set(carNumber, totalTime.get(carNumber) + minutes)
          } else {
              totalTime.set(carNumber, minutes)
          }
  }

  for(const [carNumber, minutes] of totalTime) {
      const [basicMinutes, basicFee, unitTime, unitFee] = fees
      let fee = 0
      if(minutes <= basicMinutes) {
          fee = basicFee
      } else {
          fee = basicFee + Math.ceil((minutes - basicMinutes) / unitTime) * unitFee
      }
      answer.push([carNumber, fee])
  }

  answer = answer.sort((a,b)=>Number(a[0]) - Number(b[0])).map(([_, fee]) => fee)

  return answer;
}

function subtractMinutesDifference(time1, time2) {
const parseTime = (timeStr) => {
  const [hours, minutes] = timeStr.split(':').map(Number);
  return hours * 60 + minutes;
};

const minutes1 = parseTime(time1);
const minutes2 = parseTime(time2);

const diffMinutes = Math.abs(minutes1 - minutes2);
  
return diffMinutes 
}

// 풀이 과정
// 1차 풀이

// 배열 B의 경우 가장 최소한의 원소로 이기기 위해 오름차순 나열 후 검색
// 정확성은 모두 통과
// 효율성은 모두 실패
function solution(A, B) {
  var answer = 0
  B.sort((a,b) => a-b)
  A.forEach(aNum => {
      for(let i=0; i<B.length; i++) {
          const bNum = B[i]
          if(bNum > aNum) {
              answer++
              B.splice(i, 1)
              break
          } 
      }
  })
  return answer;
}
