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

// 배열을 받아 비교하는 힙
class MinHeap {
  constructor() {
    this.heap = [];
  }

  // 힙의 크기를 반환
  size() {
    return this.heap.length;
  }

  // 힙의 최상단 요소를 반환
  peek() {
    return this.heap[0];
  }

  // 새로운 요소를 힙에 삽입
  insert(value) {
    this.heap.push(value);
    this._heapifyUp();
  }

  // 힙의 최상단 요소를 제거하고 반환
  pop() {
    if (this.size() === 1) return this.heap.pop();
    const root = this.heap[0];
    this.heap[0] = this.heap.pop();
    this._heapifyDown();
    return root;
  }

  // 힙을 위로 재정렬
  _heapifyUp() {
    let index = this.heap.length - 1;
    const element = this.heap[index];

    while (index > 0) {
      const parentIndex = Math.floor((index - 1) / 2);
      const parent = this.heap[parentIndex];

      // 비교 함수 사용: element이 parent보다 우선순위가 높으면 종료
      if (this._compare(element, parent) >= 0) break;

      // 부모와 교환
      this.heap[index] = parent;
      index = parentIndex;
    }
    this.heap[index] = element;
  }

  // 힙을 아래로 재정렬
  _heapifyDown() {
    let index = 0;
    const length = this.heap.length;
    const element = this.heap[index];

    while (true) {
      const leftChildIndex = 2 * index + 1;
      const rightChildIndex = 2 * index + 2;
      let leftChild, rightChild;
      let swap = null;

      // 왼쪽 자식이 존재하고 우선순위가 더 높으면 교환 후보로 설정
      if (leftChildIndex < length) {
        leftChild = this.heap[leftChildIndex];
        if (this._compare(leftChild, element) < 0) {
          swap = leftChildIndex;
        }
      }

      // 오른쪽 자식이 존재하고, 오른쪽 자식이 현재 교환 후보보다 우선순위가 더 높으면 교환 후보를 오른쪽으로 설정
      if (rightChildIndex < length) {
        rightChild = this.heap[rightChildIndex];
        if (
          (swap === null && this._compare(rightChild, element) < 0) ||
          (swap !== null && this._compare(rightChild, leftChild) < 0)
        ) {
          swap = rightChildIndex;
        }
      }

      // 교환 후보가 없으면 종료
      if (swap === null) break;

      // 교환
      this.heap[index] = this.heap[swap];
      index = swap;
    }
    this.heap[index] = element;
  }

  /**
   * 두 요소를 비교하는 함수
   * 우선순위: 소요시간 < 요청시간 < 번호
   * @param {Array} a - [번호, 요청시간, 소요시간]
   * @param {Array} b - [번호, 요청시간, 소요시간]
   * @returns {number} - a의 우선순위가 높으면 음수, 같으면 0, 낮으면 양수
   */
  _compare(a, b) {
    // 소요시간 비교
    if (a[2] !== b[2]) {
      return a[2] - b[2];
    }
    // 요청시간 비교
    if (a[1] !== b[1]) {
      return a[1] - b[1];
    }
    // 번호 비교
    return a[0] - b[0];
  }
}
