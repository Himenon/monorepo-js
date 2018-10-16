import { addFoo, getAddBar } from '../src/foo';

describe("addFoo", () => {
  it("should return add suffix", () => {
    const result = addFoo("message");
    expect(result).toEqual("message foo");
  })

  it("should return add bar suffix", () => {
    const result = getAddBar("message");
    expect(result).toEqual("message said from foo. bar");
  })
})
