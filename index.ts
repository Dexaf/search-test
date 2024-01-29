import { msPerformanceRoutine } from "./routines/msPerformance";
import { stepPerformanceRoutine } from "./routines/stepPerformance";

const testingMode: string = process.argv[2];

switch (testingMode) {
  case "performance":
    console.log("Running 'performance', it will take a while...");
    msPerformanceRoutine();
    break;
  case "steps":
    console.log("Running 'steps', it will take a while...");
    stepPerformanceRoutine();
    break;
  default:
    //yea i know this i cursed
    console.log(`
    No matching arguments, you can use:
        -perfomance: it will test each make+search method 10.000.000 times 
                     and give you min, max and avg time. \n`)
    break;
}