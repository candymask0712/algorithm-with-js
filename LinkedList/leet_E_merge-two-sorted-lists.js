// 나의 풀이 - 1
var mergeTwoLists = function (list1, list2) {
  const mergedList = new ListNode(0);
  let current = mergedList;

  while (list1 && list2) {
    if (list1.val > list2.val) {
      current.next = list2;
      list2 = list2.next;
    } else {
      current.next = list1;
      list1 = list1.next;
    }
    current = current.next;
  }

  current.next = list1 || list2;

  return mergedList.next;
};
