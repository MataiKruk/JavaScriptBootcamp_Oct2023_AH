const count = document.getElementById('count');
const makeMoney = document.getElementById('makeMoney');
const coinInput = document.getElementById('coinTypes');
let totalMoney = document.getElementById('totalMoney');
let total = 0.00;

function makeCoin(coinType) {
    let newCoin = document.createElement("div");
    newCoin.classList.add(coinType.toLowerCase());
    newCoin.innerText=coinType;
    document.querySelector('main').append(newCoin);
    switch(coinType) {
        case 'Penny':
            total += 0.01;
            break;
        case 'Nickel':
            total += 0.05;
            break;
        case 'Dime':
            total += 0.10;
            break;
        case 'Quarter':
            total += 0.25;
            break;
    }

    totalMoney.innerText = `Total Money: $${(Math.round(total * 100) / 100)}`

    newCoin.addEventListener('click', function() {
        document.querySelector('main').removeChild(newCoin);
        switch(coinType) {
            case 'Penny':
                total -= 0.01;
                break;
            case 'Nickel':
                total -= 0.05;
                break;
            case 'Dime':
                total -= 0.10;
                break;
            case 'Quarter':
                total -= 0.25;
                break;
        }
        totalMoney.innerText = `Total Money: $${(Math.round(total * 100) / 100)}`
    });
}

makeMoney.addEventListener('click', function(e) {
    e.preventDefault();

    for(let i=1; i<= count.value; i++) {
        makeCoin(coinInput.value);
    }
});




