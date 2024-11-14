/**
 * Definition for a binary tree node.
 * function TreeNode(val, left, right) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.left = (left===undefined ? null : left)
 *     this.right = (right===undefined ? null : right)
 * }
 */
/**
 * @param {TreeNode} root
 * @return {number}
 */
var maxDepth = function (root) {
  // 기저 사례: 노드가 null인 경우 0을 반환
  if (root === null) {
    return 0;
  }

  // 왼쪽 서브트리의 최대 깊이를 재귀적으로 계산
  const leftDepth = maxDepth(root.left);
  // 오른쪽 서브트리의 최대 깊이를 재귀적으로 계산
  const rightDepth = maxDepth(root.right);

  // 현재 노드의 깊이는 왼쪽과 오른쪽 서브트리 중 더 큰 값에 1을 더한 값
  return Math.max(leftDepth, rightDepth) + 1;
};
