
const assert = require('chai').assert;
const countOnly = require('../countOnly');

describe('#countOnly', () => {
  it("returns 1 for Jason when counted in object", () => {
    const firstNames = [
      "Karl",
      "Salima",
      "Agouhanna",
      "Fang",
      "Kavith",
      "Jason",
      "Salima",
      "Fang",
      "Joe"
    ];

    const result1 = countOnly(firstNames, { "Jason": true, "Karima": true, "Fang": true, "Agouhanna": false });

    assert.strictEqual(result1["Jason"], 1);
    
  });

    it("returns 2 for Fang when counted in object", () => {
      const firstNames = [
        "Karl",
        "Salima",
        "Agouhanna",
        "Fang",
        "Kavith",
        "Jason",
        "Salima",
        "Fang",
        "Joe"
      ];
  
      const result1 = countOnly(firstNames, { "Jason": true, "Karima": true, "Fang": true, "Agouhanna": false });
  
      assert.strictEqual(result1["Fang"], 2);
      
    });

    it("returns undefined for Karima when counted in object", () => {
      const firstNames = [
        "Karl",
        "Salima",
        "Agouhanna",
        "Fang",
        "Kavith",
        "Jason",
        "Salima",
        "Fang",
        "Joe"
      ];
  
      const result1 = countOnly(firstNames, { "Jason": true, "Karima": true, "Fang": true, "Agouhanna": false });
  
      assert.strictEqual(result1["Karima"], undefined);
      
    });

});

