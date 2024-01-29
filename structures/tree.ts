export class TreeNode<T> {
  value: T;
  sxNode: TreeNode<T> | null;
  dxNode: TreeNode<T> | null;
  constructor(_value: T) {
    this.value = _value;
    this.sxNode = null;
    this.dxNode = null;
  }
}

const getParentNode = <T>(node: TreeNode<T>, val: T): TreeNode<T> => (
  node.value >= val ?
    node.sxNode === null ?
      node : getParentNode<T>(node.sxNode, val)
    :
    node.dxNode === null ?
      node : getParentNode<T>(node.dxNode, val)
);

export const arrayToTree = <T>(array: T[]): TreeNode<T> => {
  const root = new TreeNode<T>(array[0])
  for (let i = 1;
    i < array.length;
    i++) {
    const element = array[i];
    const next = getParentNode<T>(root, element);
    if (next.value >= element)
      next.sxNode = new TreeNode<T>(element);
    else
      next.dxNode = new TreeNode<T>(element);
  }
  return root;
}

export const findInTree = <T>(node: TreeNode<T>, val: T): T | null => {
  if (node.value === val)
    return val
  else if (node.value > val && node.sxNode)
    return (findInTree<T>(node.sxNode, val))
  else if (node.value < val && node.dxNode)
    return (findInTree<T>(node.dxNode, val))
  else return null;
}