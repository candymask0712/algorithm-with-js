// 1차 풀이 - 72점 (정확도 100점, 효율성 40점)
function solution(A) {
    for(let i=0; i<A.length; i++){
        const current = A[i]
        if(A.indexOf(current) === A.lastIndexOf(current)){
            return current
        }
    }
    return -1
}

// 2차 풀이 - 100점
// 해시맵을 이용한 횟수 기록 및 탐색
function solution(A) {
    const count = new Map();
    const firstOccurrence = new Map();

    // 첫 번째 순회: 각 숫자의 출현 횟수와 첫 등장 위치를 기록
    for (let i = 0; i < A.length; i++) {
        if (count.has(A[i])) {
            count.set(A[i], count.get(A[i]) + 1);
        } else {
            count.set(A[i], 1);
            firstOccurrence.set(A[i], i);
        }
    }

    let minPosition = A.length;
    let result = -1;

    // 두 번째 순회: 유일한 숫자 중 가장 낮은 위치를 찾음
    for (const [num, occurrences] of count.entries()) {
        if (occurrences === 1) {
            const position = firstOccurrence.get(num);
            if (position < minPosition) {
                minPosition = position;
                result = num;
            }
        }
    }

    return result;
}