function afterLargest (numberArray) {
    if (numberArray.length < 2) return null;

    var numberA = numberArray[0];
    var numberB = numberArray[1];

    for(var i=1; i<numberArray.length-1; i++) {
        if (numberArray[i]>numberA) {
            numberA = numberArray[i];
            numberB = numberArray[i+1];
        }
    }

    if (numberArray[numberArray.length-1] > numberA) return null;
    else return numberB;


}

module.exports = afterLargest;