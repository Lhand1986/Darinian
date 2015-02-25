/*
 Levi Hand
 Emp. no. 49519
 Merge Calculation
 */

/*
    A program which will calculate the total number of bars needed
    to merge from one heat to the next, taking into account the
    different amount of cuts on the bed, and whether there is
    a single, or multiple, re-rolls.

    Use confirm function for multiple re-rolls. "Are there any rerolls"

    Can also use variable % 2 === 0 to determine if there are subs in the cut on the bed.

    Need to prompt to ask if there are any subs in the bundling station

*/

var numberOfCutsPerRun;
var numberOfCutsPerBundle;
var numberOfBarsBundle;
var numberOfBarsRemaining;
var numberOfSubsRemaining;
var numberOfSubsComing;
var numberOfDropsPerRun;
var numberOfBarsPerDrop;
var dropsRemaining;

dropsRemaining = prompt("Enter the number of drops remaining on the hot bed");
numberOfBarsPerDrop = prompt("Enter the total number of bars per drop");
numberOfCutsPerBundle = prompt("Enter the number of cuts to make a full bundle");
numberOfBarsBundle = prompt("Enter the total number of bars that make a full bundle");

// Multiplying variables in order to get the number of bars remaining in the run.
mergeNumber[4] = mergeNumber[0] *  mergeNumber[1] * mergeNumber[2];

// Utilizing an assignment operator to assign a value from a shortened expression.
mergeNumber[3] -= mergeNumber[4];

//Test
