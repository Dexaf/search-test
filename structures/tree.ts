export class TwoWayTreeNode<T> {
  value: T;
  parentNode: TwoWayTreeNode<T> | null;
  sxNode: TwoWayTreeNode<T> | null;
  dxNode: TwoWayTreeNode<T> | null;

  constructor(_value: T) {
    this.value = _value;
    this.sxNode = null;
    this.dxNode = null;
    this.parentNode = null;
  }

  setParentNode = (parentNode: TwoWayTreeNode<T>) => {
    this.parentNode = parentNode;
  }
}

const getParentNode = <T>(node: TwoWayTreeNode<T>, val: T): TwoWayTreeNode<T> => (
  node.value >= val ?
    node.sxNode === null ?
      node : getParentNode<T>(node.sxNode, val)
    :
    node.dxNode === null ?
      node : getParentNode<T>(node.dxNode, val)
);

export const arrayToTree = <T>(array: T[]): TwoWayTreeNode<T> => {
  const root = new TwoWayTreeNode<T>(array[0])
  for (let i = 1;
    i < array.length;
    i++) {
    const element = array[i];
    const next = getParentNode<T>(root, element);
    if (next.value >= element) {
      next.sxNode = new TwoWayTreeNode<T>(element);
      next.sxNode.parentNode = next;
    }
    else {
      next.dxNode = new TwoWayTreeNode<T>(element);
      next.dxNode.parentNode = next;
    }
  }
  return root;
}

export const findInTree = <T>(node: TwoWayTreeNode<T>, val: T): T | null => {
  if (node.value === val)
    return val
  else if (node.value > val && node.sxNode)
    return (findInTree<T>(node.sxNode, val))
  else if (node.value < val && node.dxNode)
    return (findInTree<T>(node.dxNode, val))
  else return null;
}