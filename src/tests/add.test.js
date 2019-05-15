const add = (a, b) => a + b;

test('Should add two values', () => {
  const result = add(4, 4);
  expect(result).toBe(8);
});
