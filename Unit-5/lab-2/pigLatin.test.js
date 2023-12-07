const translate = require("./pigLatin.js");

describe("translate", () => {
    test("hello to ellohay", () => {
        expect( translate("hello") ).toEqual("ellohay");
      });

    test("cheese to eesechay", () => {
        expect( translate("cheese") ).toEqual("eesechay");
      });

      test("giraffe to iraffegay", () => {
        expect( translate("giraffe") ).toEqual("iraffegay");
      });

      test("apple to appleway", () => {
        expect( translate("apple") ).toEqual("appleway");
      });

      test("else to elseway", () => {
        expect( translate("else") ).toEqual("elseway");
      });
  });

