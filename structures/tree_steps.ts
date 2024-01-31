import { TwoWayTreeNode } from "./tree";

let steps = 0;
export const findInTreeWithStepsCount = <T>(node: TwoWayTreeNode<T>, val: T): number => {
  steps = 0;
  findInTree(node, val);
  return steps;
}

export const findInTree = <T>(node: TwoWayTreeNode<T>, val: T): T | null => {
  steps++;
  if (node.value === val)
    return val
  else if (node.value > val && node.sxNode)
    return (findInTree<T>(node.sxNode, val))
  else if (node.value < val && node.dxNode)
    return (findInTree<T>(node.dxNode, val))
  else return null;
}