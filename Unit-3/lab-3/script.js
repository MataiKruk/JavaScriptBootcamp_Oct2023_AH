let name1 = "Lames Baxter"
let name2 = "Ed"
let name3 = "James Baxter"

let length1 = name1.length
let length2 = name2.length
let length3 = name3.length

switch(true) {
    case length1 > length2 && length1 > length3:
        console.log(`${name1} has the longest name.`)
        break;

    case length2 > length1 && length2 > length3:
        console.log(`${name2} has the longest name.`)
        break;

    case length3 > length1 && length3 > length2:
        console.log(`${name3} has the longest name.`)
        break;

    case length1 === length2 && length1 === length3:
        console.log(`All 3 names are the same length.`)
        break;

    case length1 === length2:
        console.log(`${name1} and ${name2} are tied for the longest name.`)
        break;

    case length2 === length3:
        console.log(`${name2} and ${name3} are tied for the longest name.`)
        break;

    case length1 === length3:
        console.log(`${name1} and ${name3} are tied for the longest name.`)
        break;

    default:
        console.log("failure")
        break;
}

