/** @param array is a SORTED array; @param searchedValue is the value you are looking for*/
export const pivotSearch = <T>(array: T[], searchedValue: T): T | null => {
  const arrayHalfLength = Math.ceil(array.length / 2);
  if (array[arrayHalfLength] === searchedValue)
    return array[arrayHalfLength];
  else if (arrayHalfLength > 1)
    if (array[arrayHalfLength] > searchedValue)
      return pivotSearch(array.splice(0, arrayHalfLength), searchedValue);
    else
      return pivotSearch(array.splice(arrayHalfLength, array.length), searchedValue);
  else
    return null;
}