const Bankbalance = 200;
const costofgoods = 305;
const tax = 0.90;

if (Bankbalance <= costofgoods + tax ){
    console.log("cost of goods is tooo high, check the amount of tax attached to it");
}
if (tax >= 0.90) {
    console.log("  Tax amount is too high");
}