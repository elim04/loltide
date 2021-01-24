
const assert = require('chai').assert;
const eqObjects = require('../eqObjects');

describe('#eqObjects', () => {
  it("returns true for two object that are the same and have the same contents", () => {
    const ab = { a: "1", b: "2" };
    const ba = { b: "2", a: "1" }; 

    assert.strictEqual(eqObjects(ab, ba), true);
  });

  it("returns false for two object that are not the same and have different contents and different number of keys", () => {
    const ab = { a: "1", b: "2" };
    const abc = { a: "1", b: "2", c: "3" } 

    assert.strictEqual(eqObjects(ab, abc), false);
  });
  
  it("returns false for two object that are not the same and have different contents but same number of keys", () => {
    const ab = { a: "1", b: "2" };
    const abc = { a: "1", b: "4" };

    assert.strictEqual(eqObjects(ab, abc), false);
  });

  it("returns true for two object that are the same and contain arrays that are the same", () => {
    const cd = { c: "1", d: ["2", 3] };
    const dc = { d: ["2", 3], c: "1" };

    assert.strictEqual(eqObjects(cd, dc), true);
  });

  //stretch portion - recursive eqObjects DAY 5 week 1
  it("returns true for matching nested objects as values in both objects being compared", () => {
    const el = { a: { z: 1 }, b: 2 };
    const fd = { a: { z: 1 }, b: 2 };

    assert.strictEqual(eqObjects(el, fd), true);
  })

  it("returns false for nested objects as values that are different in both objects being compared", () => {
    const mo = { a: { y: 0, z: 1 }, b: 2 };
    const fo = { a: { z: 1 }, b: 2 };

    assert.strictEqual(eqObjects(mo, fo), false);
  })
  

});

