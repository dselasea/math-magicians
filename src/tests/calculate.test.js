import calculate from "../logic/calculate";

describe('Test calculator inputs',() => {

  test('total: 4, next: 5, operation null and AC', () => {
    expect(calculate({
      total: 4,
      next: 5,
      operation: null
    }, 'AC')).toEqual({total: null, next: null, operation: null});
  })

  test('total 2, next: 15, operation: x inputs and x', () => {
    expect(calculate({
      total: 3,
      next: 15,
      operation: 'x'
    }, 'x')).toEqual({total: "45" , next: null, operation: "x" });
  })

  test('total: 4, next: 5, operation +/- inputs and =', () => {
    expect(calculate({
      total: 4,
      next: 5,
      operation: '+/-'
    }, '+/-')).toEqual({total: 4 , next: "-5", operation: "+/-" });
  })
})