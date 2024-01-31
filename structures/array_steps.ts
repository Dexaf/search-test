import { TwoWayTreeNode } from "./tree";

let steps = 0;
export const pivotSearchWithStepsCount = <T>(array: T[], val: T): number => {
  steps = 0;
  pivotSearchWithSteps<T>(array, val);
  return steps;
}

export const pivotSearchWithSteps = <T>(array: T[], searchedValue: T): T | null => {
  steps++;
  const arrayHalfLength = Math.ceil(array.length / 2);
  if (array[arrayHalfLength] === searchedValue)
    return array[arrayHalfLength];
  else if (arrayHalfLength > 1)
    if (array[arrayHalfLength] > searchedValue)
      return pivotSearchWithSteps(array.splice(0, arrayHalfLength), searchedValue);
    else
      return pivotSearchWithSteps(array.splice(arrayHalfLength, array.length), searchedValue);
  else
    return null;
}