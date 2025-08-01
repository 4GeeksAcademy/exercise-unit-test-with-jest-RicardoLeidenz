const { fromEuroToDollar, fromDollarToYen, fromYenToPound} = require("./app.js");

test("One euro should be 1.07 dollars", function() {
     expect(fromEuroToDollar(1)).toBe(1.07);
})
test("One euro should be 167.455 Yens", function() {
     expect(fromDollarToYen(1.07)).toBe(156.5); 
})
test("One euro should be Pounds", function() {
     expect(fromYenToPound(156.5)).toBe(0.87); 
})