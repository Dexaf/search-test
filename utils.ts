/** 
 * @param testMeaseurements array of measurement;
 * @param measurementUnit measurement unit (ms, steps...);
 * @param floatUnit default is false, add floating limit if the units requires it (ex: ms => 0.00032, steps => 2)
 * */
export const displayPerformanceData = (testMeaseurements: number[], measurementUnit: string, floatUnit: boolean = false) => {
  const sortedTestMeaseurements = testMeaseurements.sort();
  let min = sortedTestMeaseurements[0];
  let max = sortedTestMeaseurements[sortedTestMeaseurements.length - 1];
  let avg = Math.ceil((sortedTestMeaseurements.reduce((prv, nxt) => prv + nxt, 0)) / sortedTestMeaseurements.length);
  let minStr = (floatUnit ? min.toPrecision(5) : min) + measurementUnit;
  let maxStr = (floatUnit ? max.toPrecision(5) : max) + measurementUnit;
  let avgStr = (floatUnit ? avg.toPrecision(5) : avg) + measurementUnit;

  console.log(`min: ${minStr}, max: ${maxStr}, avg: ${avgStr}`);
}