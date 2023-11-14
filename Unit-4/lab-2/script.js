const burg = document.querySelector("#burg");
const menuBox = document.querySelector("#menuBox");
const lettersLink = document.querySelector("#lettersLink");
const numbersLink = document.querySelector("#numbersLink");
const letters = document.getElementById("letters");
const numbers = document.getElementById("numbers");


burg.addEventListener('click', function() {
    if(menuBox.style.display === 'none') {
        menuBox.style.display = 'flex'
    }else {
        menuBox.style.display = 'none'
    }
})

lettersLink.addEventListener('click', function(e) {
    e.preventDefault();
    letters.style.display = 'block'
    numbers.style.display = 'none'
    menuBox.style.display = 'none'
})

numbersLink.addEventListener('click', function(e) {
    e.preventDefault();
    letters.style.display = 'none'
    numbers.style.display = 'block'
    menuBox.style.display = 'none'
})

