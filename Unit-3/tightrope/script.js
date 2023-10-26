let position = 0;
let direction = 1;

function moveForward(distance) {
  position += direction * distance;
  console.log(`Moved forward ${distance} units`);
}

function moveBackward(distance) {
  position -= direction * distance;
  console.log(`Moved backwards ${distance} units`);
}

function turnAround() {
  direction *= -1;
  console.log(`You turned around`);
}

function printLocation() {
  console.log(`Current position: ${position}`);
  console.log(`Current direction: ${direction}`);
}
