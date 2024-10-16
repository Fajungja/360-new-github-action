describe('Simple arithmetic', () => {

  test('addition: expect 5 + 3 = 8', () => {
    expect(add(5, 3)).toBe(8);
  });

  test('subtract: expect 5 - 1 = 4', () => {
    expect(subtract(5, 1)).toBe(4);
  });

  test('multiply: expect 2 * 3 = 6', () => {
    expect(multiply(2, 3)).toBe(6);
  });

});
