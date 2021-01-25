import { describe, test, expect } from '@jest/globals';
import { color } from '../CardFace';
import submarketColors from '../../../utils/colors';

describe('Card Face', () => {
  test('returns magenta for submarket 1', () => {
    expect(color(1).styles).toContain(submarketColors[0]);
  });
});
