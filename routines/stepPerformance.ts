import { pivotSearchWithStepsCount } from "../structures/array_steps";
import { titles } from "../structures/mockdata";
import { arrayToTree } from "../structures/tree";
import { findInTreeWithStepsCount } from "../structures/tree_steps";
import { displayPerformanceData } from "../utils";

export const stepPerformanceRoutine = () => {
  const randIndexes: number[] = [];
  for (let i = 0; i < 10000000; i++) {
    randIndexes.push(Math.floor((Math.random() * 100) % titles.length));
  }

  //SECTION - SIMPLE ARRAY
  const stepsForSimpleArraySearch: number[] = [];
  randIndexes.forEach(i => {
    let steps = 0;
    titles.find(t => {
      steps++;
      if (t === titles[i])
        return true;
      else
        return false;
    });
    stepsForSimpleArraySearch.push(steps);
  })
  //!SECTION - SIMPLE ARRAY

  //SECTION - TREE
  const stepsForTreeSearch: number[] = [];
  randIndexes.forEach(i => {
    const treeRoot = arrayToTree(titles);
    const steps = findInTreeWithStepsCount<string>(treeRoot, titles[i]);
    stepsForTreeSearch.push(steps);
  })
  //!SECTION

  //SECTION - SORTED AND PIVOT SEARCHED 
  const stepsForPivotArraySearch: number[] = [];
  randIndexes.forEach(i => {
    const sortedTitles = titles.sort();
    const steps = pivotSearchWithStepsCount<string>(sortedTitles, titles[i]);
    stepsForPivotArraySearch.push(steps);
  })

  //SECTION - RESULTS
  console.log("\nSIMPLE ARRAY");
  console.log("search");
  displayPerformanceData(stepsForSimpleArraySearch, " steps");

  console.log("\nTREE");
  console.log("search");
  displayPerformanceData(stepsForTreeSearch, " steps");

  console.log("\nSORTED ARRAY");
  console.log("search");
  displayPerformanceData(stepsForPivotArraySearch, " steps");
  //!SECTION
}