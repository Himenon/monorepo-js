import { addBar } from '../src/bar';

describe("addBar", () => {
  it("should return add suffix", () => {
    const result = addBar("message");
    expect(result).toEqual("message bar");
  })
})
