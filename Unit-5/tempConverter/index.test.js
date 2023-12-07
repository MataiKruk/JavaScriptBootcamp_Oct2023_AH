const tempConverter = require("./index.js");

describe("tempConverter", () => {
  test("212C converts to 100F", () => {
    expect( tempConverter(212, "C") ).toEqual(100);
  });

  test("0C converts to 32F", () => {
    expect( tempConverter(0, "F") ).toEqual(32);
  });

  test("0C converts to 273.15K", () => {
    expect( tempConverter(0, "K") ).toEqual(273.15);
  });

  test("100000 * 10000C converts to 1000000273.15K", () => {
    expect( tempConverter(100000 * 10000, "K") ).toEqual(1000000273.15);
  });
});

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