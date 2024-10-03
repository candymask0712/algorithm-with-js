// 1차 풀이 - 90점
function solution(K, A) {
    const N = A.length;
    let count = 0;
    let left = 0;
    let right = 0;
    let min = A[0];
    let max = A[0];

    while (right < N) {
        min = Math.min(min, A[right]);
        max = Math.max(max, A[right]);

        if (max - min <= K) {
            count += right - left + 1;
            right++;
        } else {
            left++;
            if (left > right) {
                right = left;
                min = max = A[left];
            } else {
                min = Math.min(...A.slice(left, right + 1));
                max = Math.max(...A.slice(left, right + 1));
            }
        }

        if (count > 1000000000) {
            return 1000000000;
        }
    }

    return count;
}

// 2차 풀이 - 100점
function solution(K, A) {
    const N = A.length;
    let count = 0;
    let left = 0;
    let minDeque = [];
    let maxDeque = [];

    for (let right = 0; right < N; right++) {
        // 최소값 큐 업데이트
        while (minDeque.length > 0 && A[minDeque[minDeque.length - 1]] > A[right]) {
            minDeque.pop();
        }
        minDeque.push(right);

        // 최대값 큐 업데이트
        while (maxDeque.length > 0 && A[maxDeque[maxDeque.length - 1]] < A[right]) {
            maxDeque.pop();
        }
        maxDeque.push(right);

        // 경계 조건 확인
        while (A[maxDeque[0]] - A[minDeque[0]] > K) {
            left++;
            if (minDeque[0] < left) minDeque.shift();
            if (maxDeque[0] < left) maxDeque.shift();
        }

        // 유효한 슬라이스 개수 추가
        count += right - left + 1;

        // 결과가 10^9를 초과하면 10^9 반환
        if (count > 1000000000) return 1000000000;
    }

    return count;
}