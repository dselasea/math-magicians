import operate from "../logic/operate";

describe('Test test math operators',() => {
  test('adds numbers', () => {
    expect(operate(3, 4, "+")).toEqual('7');
  })

  test('substracts numbers', () => {
    expect(operate(3, 4, "-")).toEqual('-1');
  })

  test('multiply numbers', () => {
    expect(operate(3, 4, "x")).toEqual('12');
  })

  test('divides numbers', () => {
    expect(operate(3, 4, "÷")).toEqual('0.75');
  })

  test('divides numbers', () => {
    expect(operate(4, 0, "÷")).toEqual('Can\'t divide by 0.');
  })

  test('finds modulus', () => {
    expect(operate(3, 4, "%")).toEqual('3');
  })
})