// Code your solution in this file!
function distanceFromHqInBlocks(streetnumber) {
    return Math.abs(streetnumber - 42);
}

function distanceFromHqInFeet(streetnumber) {
    return (Math.abs(streetnumber - 42) * 264);
}

function distanceTravelledInFeet(block1, block2) {
    return (Math.abs(block1 - block2) * 264);
}

function calculatesFarePrice(start, destination) {
    let distance = distanceTravelledInFeet(start, destination);
    if (distance > 2500) {
        return 'cannot travel that far';
    } else if (distance > 2000) {
        return 25;
    } else if (distance > 400){
        return ((distance-400) * .02);
    } else {
        return 0
    };
}
