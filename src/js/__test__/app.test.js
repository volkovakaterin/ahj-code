/* eslint-disable linebreak-style */
/* eslint-disable import/no-unresolved */
/* eslint-disable import/extensions */
import demo from '../app';

test('app', () => {
  const value = 'Begin';
  expect(demo(value)).toBe(value);
});
