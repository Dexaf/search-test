import { suggestedSearchQta } from './mockdata';

export const fillSuggestions = (orderedArray: string[], searchedWord: string): string[] => {
  let suggestions: string[] = [];

  suggestions = [...searchForWord(orderedArray, searchedWord, true)];
  const words = searchedWord.replace(',', '').split(" ").filter(w => w.length > 4);

  if (words.length > 1)
    words.forEach(word => {
      suggestions = [...suggestions, ...searchForWord(orderedArray, word, false)];
    });

  return suggestions;
}

const searchForWord = (orderedArray: string[], searchedWord: string, needToBeEqual: boolean): string[] => {
  const suggestions: string[] = [];

  for (let i = searchedWord.length; i > 0; i--) {
    const slicedSearchedWord = searchedWord.substring(0, i);

    let SSWIndex: number | null = null;
    if (needToBeEqual)
      SSWIndex = pivotSearchByBeEqualIndex(orderedArray, slicedSearchedWord, 0, orderedArray.length);
    else
      SSWIndex = pivotSearchByIncludeIndex(orderedArray, slicedSearchedWord, 0, orderedArray.length);

    if (SSWIndex !== null) {
      do {
        suggestions.push(orderedArray[SSWIndex]);
        orderedArray.splice(SSWIndex, 1);
      } while (orderedArray[SSWIndex].includes(searchedWord));
    }

    if (suggestions.length === suggestedSearchQta)
      break;
  }
  return suggestions;
}

const pivotSearchByBeEqualIndex = <T>(array: T[], searchedValue: T, floor: number, ceil: number): number | null => {
  const arrayHalfLength = Math.ceil((floor + ceil) / 2);
  if (array[arrayHalfLength] === searchedValue)
    return arrayHalfLength;

  if ((ceil - floor) === 1)
    return null

  if (array[arrayHalfLength] > searchedValue)
    return pivotSearchByBeEqualIndex(array, searchedValue, floor, arrayHalfLength);
  else
    return pivotSearchByBeEqualIndex(array, searchedValue, arrayHalfLength, ceil);
}

const pivotSearchByIncludeIndex = (array: string[], searchedValue: string, floor: number, ceil: number): number | null => {
  const arrayHalfLength = Math.ceil((floor + ceil) / 2);
  if (array[arrayHalfLength].includes(searchedValue))
    return arrayHalfLength;

  if ((ceil - floor) === 1)
    return null

  if (array[arrayHalfLength] > searchedValue)
    return pivotSearchByIncludeIndex(array, searchedValue, floor, arrayHalfLength);
  else
    return pivotSearchByIncludeIndex(array, searchedValue, arrayHalfLength, ceil);
}