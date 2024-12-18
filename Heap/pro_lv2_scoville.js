// 나의 풀이
// ! 힙을 사용하지 않고 직접 정렬
function solution(scoville, K) {
  var answer = 0;

  scoville.sort((a, b) => b - a);

  while (scoville.at(-1) <= K) {
    if (scoville.length <= 1) return -1;
    const firstHot = scoville.at(-1);
    const secondHot = scoville.at(-2);

    scoville.pop();
    scoville.pop();

    if (firstHot >= K) break;

    const newHot = firstHot + secondHot * 2;
    answer++;

    for (let i = scoville.length - 1; i >= 0; i--) {
      if (scoville[i] >= newHot) {
        scoville.splice(i - 1, 0, newHot);
        break;
      }
    }
  }

  return answer;
}

// 추가 풀이
function solution(scoville, K) {
  let answer = 0;
  const minHeap = new MinHeap();
  for (const index of scoville) {
    minHeap.insert(index);
  }

  while (minHeap.peek() < K) {
    if (minHeap.size() <= 1) return -1;
    const firstMin = minHeap.pop();
    const secondMin = minHeap.pop();

    const newMin = firstMin + secondMin * 2;
    answer++;
    minHeap.insert(newMin);
  }

  return answer;
}

class MinHeap {
  constructor() {
    this.heap = [];
  }

  size() {
    return this.heap.length;
  }

  peek() {
    return this.heap[0];
  }

  insert(value) {
    this.heap.push(value);
    this._heapifyUp();
  }

  pop() {
    if (this.size() === 1) return this.heap.pop();
    const root = this.heap[0];
    this.heap[0] = this.heap.pop();
    this._heapifyDown();
    return root;
  }

  _heapifyUp() {
    let index = this.heap.length - 1;
    const element = this.heap[index];

    while (index > 0) {
      const parentIndex = Math.floor((index - 1) / 2);
      const parent = this.heap[parentIndex];
      if (element >= parent) break;
      this.heap[index] = parent;
      index = parentIndex;
    }
    this.heap[index] = element;
  }

  _heapifyDown() {
    let index = 0;
    const length = this.heap.length;
    const element = this.heap[index];

    while (true) {
      const leftChildIndex = 2 * index + 1;
      const rightChildIndex = 2 * index + 2;
      let leftChild, rightChild;
      let swap = null;

      if (leftChildIndex < length) {
        leftChild = this.heap[leftChildIndex];
        if (leftChild < element) swap = leftChildIndex;
      }

      if (rightChildIndex < length) {
        rightChild = this.heap[rightChildIndex];
        if (
          (swap === null && rightChild < element) ||
          (swap !== null && rightChild < leftChild)
        ) {
          swap = rightChildIndex;
        }
      }

      if (swap === null) break;
      this.heap[index] = this.heap[swap];
      index = swap;
    }
    this.heap[index] = element;
  }
}
