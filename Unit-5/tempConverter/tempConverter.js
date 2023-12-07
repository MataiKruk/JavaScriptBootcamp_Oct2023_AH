// // normal inputs
// tempConverter(212, "C"); // 100
// tempConverter(0, "F"); // 32
// tempConverter(0, "K"); // 273.15

// // extreme inputs
// tempConverter(100000 * 10000, "K"); //

// // negative numbers
// tempConverter(-1000, "C"); //

// // decimals
// tempConverter(65.421, "F");

// // wrong inputs
// // error, try to convert it to a number, if NaN then error
// tempConverter("ssdf", "C"); // error
// tempConverter("212", "C"); // 100

// // enforce only C, F, K
// tempConverter("212", "ABC"); // 100
// tempConverter("212", "c"); // 100
// tempConverter("212"); // default?

tempConverter = (temp, unit) => {
  switch (unit) {
    case "C":
      return ((temp - 32) * 5) / 9;
      break;
    case "F":
      return (temp * 9) / 5 + 32;
      break;
    case "K":
      return temp + 273.15;
      break;
    default:
      break;
  }
};
