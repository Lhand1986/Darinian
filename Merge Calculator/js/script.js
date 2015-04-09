/*
 *Author: Levi Hand
 *Gerdau Rebar Mill, Rancho Cucamonga, CA
 *
 *Creating a program to calculate a merge between
 *two separate heats. This program should be able
 *to account for different bundle size, subs,
 *and possible rerolls. The calculation will dictate
 *how many bars will need to be merged from one
 *heat to the next.
 */


//alert("JavaScript works!");

//Merge calc prototype


//Focus on calculating subs as the primary

//How many cuts make a bundle X

//How many cuts in a run X
//
//How many pieces are in a bundle X

//How many drops make a run X

//How many bars per drop X

//How many bars are left in this heat X

//Are there any rerolls (prompt true or false) X

//How many drops per billet X

//How many rerolled billets X

//Are there any subs (prompt true or false) X

//How many subs are there X

//How many subs can there be in the bundling station X

//Use a while loop to calculate the subs by adding 1 or 2 while a condition maintains true about the amount of subs remaining until the condition reads false (0 subs remain)

//encase the entire program in a while loop with a prompt at the beginning and end to check a true and false condition. Does the person want to start a merge? (What kind?) and do they want to do another?

//variables

var cutsInRun = prompt("How many cuts are in a run?");
var cutsPerBundle = prompt("How many cuts are there per bundle?");
var subsTrueFalse;

var bundlePieces = prompt("How many pieces are in each bundle?");
var dropsInRun = prompt("How many drops are in each run?");
var barsPerDrop = prompt("How many bars are in each drop?");
var dropsLeftInHeat = prompt("How many drops are left in the current heat?");
//var dropsPerBillet = prompt("How many drops are there per billet?");
var dropAdd;
var mergeNumber;
//Figure out how many drops we need to borrow from the next heat
//Use the dropAdd to figure out if we need to merge more based on rerolls with subtraction. Subtract the amount of dropAdd from the total number of bars the rerolls will have.
dropAdd = dropsInRun - dropsLeftInHeat;
console.log("dropAdd = " + dropAdd);
//Math to figure out a standard merge
mergeNumber = (dropAdd * barsPerDrop) * cutsPerBundle;

console.log(mergeNumber + " bars for the first merge");

//create array variable to hold how many bundles are in a run, including subs. Allow each bundle total to be applied to a space in the array, with the respective sub/full bundle in the appropriate place of the array.

// Calculate how many bundles are present in each run
var masterBundles = cutsInRun / cutsPerBundle;
console.log(masterBundles);
// Remove any possible decimal from masterBundles
// with a Math.ceil operator, and assign the total
// to the variable subsMod
var subsMod = Math.ceil(masterBundles);
// Utilize a modulus operator to determine if there
// are any subs in the run.
var subs = subsMod % masterBundles;
var subs = Math.round(subs);
// Debugging log
console.log("masterBundles = " + masterBundles + " subsMod = " + subsMod + " subs = " + subs);
//var subsMergeAdd = dropsLeftInHeat * barsPerDrop;
//var subsMergeNumber = (subsMergeAdd + mergeNumber);
//var subsMergeTotal = (bundlePieces - subsMergeNumber) + mergeNumber;
//alert("The total number to merge is going to be: " + mergeNumber + " for the regular bundle, and " + subsMergeTotal + " for the subs.");

//console.log("subsMergeTotal is " + subsMergeTotal + " subsMergeNumber is " + subsMergeNumber + " and subsMergeAdd is " + subsMergeAdd);

if (subs > 0) {
    var subsTotal = prompt("How many subs can you have? \n1 or 2?")
    subsTrueFalse = true;
    var subsMergeAdd = dropsLeftInHeat * barsPerDrop;
    var subsMergeNumber = (subsMergeAdd + mergeNumber);
    var subsMergeTotal = (bundlePieces - subsMergeNumber) + mergeNumber;
    alert("The total number to merge is going to be: " + mergeNumber + " for the regular bundle, and " + subsMergeTotal + " for the subs.");

}else{
    subsTrueFalse = false;
    alert("The total number to merge is going to be: " + mergeNumber);
}
/*
if (subsTrueFalse === true) {
    subsInput = confirm("Are there any subs left in the bundling station?");
}
/*
//Check to see if there are any rerolls
if (confirm("Are there any rerolls?")) {
    var rerolls = prompt("How many rerolls are there?");
}
var dropsPerBillet = prompt("How many drops are there per billet?");


/*
//assign masterBundles number to denote the number of array variables
var bundleArray = [masterBundles];

//use a while loop to assign each variable to a different point in the array using i variable.

var subs;
var singleCut;

//body

//checking to see if there are possible subs
subs = cutsInRun / cutsPerBundle;
//assigning a variable to how many pieces are in a single cut for sub calculation
singleCut = bundlePieces / cutsPerBundle;

//make this a function

//function verifying if there are subs or not
if(subs != 0){
var subMerge = singleCut * subs;

//assign subMerge total to the first location in the array
bundleArray[1] = subMerge;

//check to see if the merge and rerolls make a full run. If not, start a new merge calculation
*/