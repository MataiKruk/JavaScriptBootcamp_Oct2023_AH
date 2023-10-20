for(let i=1;i<=10;i++) {
    console.log(i)
}

for(let i=10;i>=1;i--) {
    console.log(i)
}

let x=1
while(x<=10) {
    console.log(x)
    x++
}

x=10
while(x>=1) {
    console.log(x)
    x--
}

x=1
do {
    console.log(x)
    x++
}while(x<=10)

x=10
do {
    console.log(x)
    x--
}while(x>=1)

const numbers = [1,2,3,4,5,6,7,8,9,10]

for(const i of numbers) {
    console.log(i)
}

let word = "anyword"

while (word.length < 10) {
    word = " " + word
}

console.log(word)