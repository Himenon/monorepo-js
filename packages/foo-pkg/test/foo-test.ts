import { addFoo } from '../src/foo';

describe("addFoo", () => {
  it("should return add suffix", () => {
    const result = addFoo("message");
    expect(result).toEqual("message foo");
  })
})
