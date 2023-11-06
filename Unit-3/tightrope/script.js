// let position = 0;
// let direction = 1;

// function moveForward(distance) {
//   position += direction * distance;
//   console.log(`Moved forward ${distance} units`);
// }

// function moveBackward(distance) {
//   position -= direction * distance;
//   console.log(`Moved backwards ${distance} units`);
// }

// function turnAround() {
//   direction *= -1;
//   console.log(`You turned around`);
// }

// function printLocation() {
//   console.log(`Current position: ${position}`);
//   console.log(`Current direction: ${direction}`);
// }

// "use strict"
// {
//     let direction = 1;
//     let currentPosition = 0; 

//     const move = (initialDirection) => {
//         return function(distance) {
//             if (initialDirection) {
//                 currentPosition += distance * direction;  
//             } else {
//                 currentPosition -= distance * direction;  
//             }
//         }
//     }

//     const moveForward = move(true);
//     const moveBackward = move(false);
    
//     const turnAround = () => {
//         direction *= -1;
//     }
    
//     const printLocation = () => {
//         console.log(currentPosition);
//     }
    
//     moveForward(5);
//     moveBackward(3)
//     printLocation() // 2
//     turnAround()
//     moveForward(10)
//     moveBackward(5) 
//     printLocation() // -3
// }

"use strict"
{
let positionN = 0;
let positionE = 0;
let direction = 1;

function moveForward(distance) {
  switch(direction) {
    case 1: 
      positionN += distance;
      break;
    case 2: 
      positionE += distance;
      break;
    case 3: 
      positionN -= distance;
      break;
    case 4: 
      positionE -= distance;
      break;
  }
}

function moveBackward(distance) {
  switch(direction) {
    case 1: 
      positionN -= distance;
      break;
    case 2: 
      positionE -= distance;
      break;
    case 3: 
      positionN += distance;
      break;
    case 4: 
      positionE += distance;
      break;
  }
}

function turnLeft() {
  if(direction===1) {
    direction = 4;
    return direction;
  }else {
    direction -= 1;
    return direction;
  }
}

function turnRight() {
  if(direction===4) {
    direction = 1;
    return direction;
  }else {
    direction += 1;
    return direction;
  }
}

function printLocation() {
  console.log(`${positionN} N, ${positionE} E`)
}

moveForward(5);
turnRight();
moveForward(2);
printLocation();
turnLeft();
turnLeft();
moveForward(7);
turnRight();
moveBackward(3);
printLocation();
}