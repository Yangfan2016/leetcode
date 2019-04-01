/**
 * Definition for a binary tree node.
 * function TreeNode(val) {
 *     this.val = val;
 *     this.left = this.right = null;
 * }
 */
/**
 * @param {TreeNode} root
 * @return {number}
 */
var maxDepth = function (root) {
    // return dfs(root); // 方法1
    return bfs(root); // 方法2
};


// 深度优先搜索
function dfs(root) {
    if (!root) return 0;

    let maxL = dfs(root.left);
    let maxR = dfs(root.right);

    return (maxL > maxR ? maxL : maxR) + 1;
}

// 广度优先搜索
function bfs(root) {
    if (!root) return 0;
    let depth = 0;
    root.level = 1; // 标记层级
    let list = [root];

    while (list.length > 0) {
        let r = list.shift(); // 父节点出队
        depth = depth > r.level ? depth : r.level; // 取最较大值
        if (!r) return depth;
        if (r.left) {
            r.left.level = r.left.level || 0;
            r.left.level = r.level + 1; // 标记层级
            list.push(r.left); // 子节点入队
        }
        if (r.right) {
            r.right.level = r.right.level || 0;
            r.right.level = r.level + 1; // 标记层级
            list.push(r.right); // 子节点入队
        }
    }
    return depth;
}