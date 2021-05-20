import demo from '../app';

test('app', () => {
    const value = "Begin"
    expect(demo(value)).toBe(value);
  });
  