const fullName = "Matai Kruk"
const age = 18
const birthday = "Februrary 8"
const pineapplePizza = false
const lifeEvents = ["I was born in Toledo, Ohio", "I went to Pioneer High School", "I like to play video games", "I dislike the winter"]

if(pineapplePizza===true) {
    console.log(`My name is ${fullName} and I like pineapples on pizza. I am currently ${age} and my birthday is on ${birthday}.`)
}else {
    console.log(`My name is ${fullName} and I'm not into pineapples on pizza. I am currently ${age} and my birthday is on ${birthday}.`)

}

for(let i=0;i < 4; i++) {
    console.log(lifeEvents[i]+".")
}

let counter = 0;

while(true) {
    let randomNumber = Math.floor(Math.random() * 10) + 1

    if(randomNumber !== 5) {
        counter++;
        console.log("randomNumber !== 5")
    } else {
        counter++;
        console.log(`5 == 5. it took ${counter} iterations to randomly generate the number 5.`)
        break;
    }
}