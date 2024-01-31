import { pivotSearch } from "../structures/array";
import { titles } from "../structures/mockdata";
import { arrayToTree, findInTree } from "../structures/tree";
import { displayPerformanceData } from "../utils";

export const msPerformanceRoutine = () => {
  let found: string[] = [];
  const randIndexes: number[] = [];
  for (let i = 0; i < 10000000; i++) {
    randIndexes.push(Math.floor((Math.random() * 100) % titles.length));
  }

  //SECTION - TREE
  const fullTreeTimers: number[] = [];
  const searchTreeTimers: number[] = [];
  for (let i = 0; i < 10000000; i++) {
    const t0s = performance.now();
    const treeRoot = arrayToTree(titles);
    const t1s = performance.now();
    findInTree<string>(treeRoot, titles[i]);
    const t1e = performance.now();
    const t0e = performance.now();
    fullTreeTimers.push(t0e - t0s);
    searchTreeTimers.push(t1e - t1s);
  }
  //!SECTION

  //SECTION - SIMPLE ARRAY
  const searchSimpleArrayTimers: number[] = [];
  for (let i = 0; i < 10000000; i++) {
    const t0s = performance.now();
    titles.find(t => t === titles[i]);
    const t0e = performance.now();
    searchSimpleArrayTimers.push(t0e - t0s);
  }
  //!SECTION - SIMPLE ARRAY

  //SECTION - SORTED AND PIVOT SEARCHED 
  const fullSortedArrayTimers: number[] = [];
  const searchSortedArrayTimers: number[] = [];
  for (let i = 0; i < 10000000; i++) {
    const t0s = performance.now();
    const sortedTitles = titles.sort();
    const t1s = performance.now();
    pivotSearch(sortedTitles, titles[i]);
    const t1e = performance.now();
    const t0e = performance.now();
    fullSortedArrayTimers.push(t0e - t0s);
    searchSortedArrayTimers.push(t1e - t1s);
  }
  //!SECTION

  //SECTION - RESULTS
  console.log("\nSIMPLE ARRAY");
  console.log("search");
  displayPerformanceData(searchSimpleArrayTimers, "ms", true);

  console.log("\nTREE");
  console.log("create + search");
  displayPerformanceData(fullTreeTimers, "ms", true);
  console.log("search");
  displayPerformanceData(searchTreeTimers, "ms", true);

  console.log("\nSORTED ARRAY");
  console.log("create + search");
  displayPerformanceData(fullSortedArrayTimers, "ms", true);
  console.log("search");
  displayPerformanceData(searchSortedArrayTimers, "ms", true);
  //!SECTION

  console.log('\n');
}