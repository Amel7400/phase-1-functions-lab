// Code your solution in this file!
function distanceFromHqInBlocks(someValue){
return Math.abs(someValue - 42);
}
distanceFromHqInBlocks(50);

function distanceFromHqInFeet(someValue){
    distanceFromHqInBlocks(someValue)
    return Math.abs((someValue - 42)*264);
}
distanceFromHqInFeet(someValue);

function distanceTravelledInFeet(start, destination){
return Math.abs((destination-start)*264);
}
distanceTravelledInFeet(start, destination);

function calculatesFarePrice(start, destination){
    const distance = Math.abs((destination-start)*264);
    if (distance <= 400) return 0
    else if (distance > 400 && distance <= 2000 ) return 2.56
    else if (distance > 2000 && distance <= 2500 ) return 25
    else return 'cannot travel that far'
} 
calculatesFarePrice(50, 42);
