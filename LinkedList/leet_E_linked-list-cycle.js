// 1차 풀이
var hasCycle = function (head) {
  if (!head || !head.next) {
    return false;
  }

  let slow = head;
  let fast = head;

  while (fast && fast.next) {
    // ! 한칸씩 이동하는 slow와 두칸씩 이동하면 fast가 만나면 순환!
    slow = slow.next;
    fast = fast.next.next;

    if (slow === fast) return true;
  }
  return false;
};
