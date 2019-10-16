#!/usr/bin/env node

const secondLargest = require('./secondLargest');
const afterLargest = require('./afterLargest');

var numberArray = [];
for (var i=3; i < process.argv.length; i++) {
    numberArray.push(process.argv[i]);
}

if (process.argv[2]==='A') {
    console.log(secondLargest(numberArray));
}
if (process.argv[2]==='B') {
    console.log(afterLargest(numberArray));
}