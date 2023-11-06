"use strict"
{
let count = 0;

function countUp(increment) {
    count += increment;
    return count;
}

function countDown(increment) {
    count -= increment;
    return count;
}

function coundUD(isUp) {

    return function(increment) {
        if(isUp) {
            return countUp(increment);
        }else {
            return countDown(increment);
        }
    }
} 

const countUp = countUD(true);
const countDown = countUD(false);

const countUpByFive = countUDby(true,5);

}