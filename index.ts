import { fillSuggestions } from "./structures/array_utility";
import { titles } from "./structures/mockdata";

const sortedLoweredTitles = titles.sort().map(t => t.toLowerCase());
const searchedWord = "spaghetti aglio, olio e peperoncino";

console.time("suggestion");
const found = fillSuggestions(sortedLoweredTitles, searchedWord);
console.timeEnd("suggestion");

console.log("searched for: " + searchedWord)
console.log(found)