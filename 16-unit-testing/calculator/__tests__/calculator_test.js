const calculator = require('../calculator')
describe("Calculator", () => {
  it("should be able to add given numbers", () => {
    const result = calculator.add(1, 2);
    expect(result).toBe(3);
  });
})