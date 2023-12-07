translate = (string) => {
    string = string.toLowerCase();
    let vowel = ["a", "e", "i", "o", "u"];
    let end = "";
    let newString = "";
    let firstVowelCounter = 0;

    for (let i = 0; i <= string.length - 1; i++) {
        if (vowel.includes(string[i])) {
            end += "ay";
            break;
        } else {
            end += string[i];
            firstVowelCounter++;
        };
    };

    if(firstVowelCounter === 0) {
        end = "way";
    };

    for(let i = firstVowelCounter; i<=string.length-1; i++) {
        newString += string[i];
    };

    newString += end;
    return newString;
    };

module.exports = translate;