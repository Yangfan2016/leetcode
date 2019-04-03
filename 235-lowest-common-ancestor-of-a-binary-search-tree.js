/**
 * @param {TreeNode} root
 * @param {TreeNode} p
 * @param {TreeNode} q
 * @return {TreeNode}
 */
// 方法1
var lowestCommonAncestor = function (root, p, q) {
    // 极端情况
    if (!root || !p || !q)
        return null;
    // 极端情况
    if (p.val === q.val)
        return p;

    let l1 = [];
    let l2 = [];

    findParentOfNode(root, p, l1); // 找到访问 p 的路径，并存入数组中
    findParentOfNode(root, q, l2); // 找到访问 q 的路径，并存入数组中
    // 节点不在树中
    if (l1.length === 0 || l2.length === 0)
        return null;

    let isOneBig = l1.length > l2.length;
    let len = isOneBig ? l1.length : l2.length;
    let node = null; // 存储相同的节点


    /**
     * 遍历找到最后一个相同的节点，即他们的最近祖先
     * l1: 6-2-4   
     * l2: 6-2
     */

    for (let i = 0; i < len; i++) {
        if (!l1[i] || !l2[i])
            break;
        if (l1[i].val === l2[i].val) {
            node = l1[i];
        }
    }

    return node;
};
// 找父节点
function findParentOfNode(root, p, list) {
    if (!root)
        return null;

    if (root.val === p.val) {
        list.push(root);
        return root;
    }

    list.push(root);
    if (p.val < root.val) {
        if (root.left) {
            if (root.left.val === p.val) {
                list.push(root.left);
                return root.left;
            } else {
                return findParentOfNode(root.left, p, list);
            }
        }
    }

    if (p.val > root.val) {
        if (root.right) {
            if (root.right.val === p.val) {
                list.push(root.right);
                return root.right;
            } else {
                return findParentOfNode(root.right, p, list);
            }
        }
    }
}


//////////////////////////////////////////////////////////////////////////

// 方法2
var lowestCommonAncestor2 = function (root, p, q) {
    // 极端情况
    if (!root || !p || !q)
        return null;
    // 极端情况
    if (p.val === q.val)
        return p;
    // 计算根节点和目标节点的差值，来确定两个目标节点的位置（同侧还是不同侧）
    let d1 = root.val - p.val;
    let d2 = root.val - q.val;

    if (d1 * d2 <= 0) { // 负数，说明两个目标节点不在同一侧，那么根节点就是他们的最近祖先
        return root;
    }
    // 否则，说明在同一侧，根据差值，确定在哪一侧
    let parent = d1 < 0 ? root.right : root.left;
    // 递归
    return lowestCommonAncestor2(parent, p, q);
}