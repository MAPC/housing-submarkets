import { describe, test, expect } from '@jest/globals';
import { submarketBreakdown } from './../SearchResults';
import submarketData from '../../../utils/mockSubmarketData';

describe('Municipal search', () => {
  test('returns data NA with either of the arguments is undefined/null', () => {
    expect(submarketBreakdown(null, undefined)).toEqual('Data n/a');
    expect(submarketBreakdown(submarketData, undefined)).toEqual('Data n/a');
    expect(submarketBreakdown(null, 'Acton')).toEqual('Data n/a');
  });

  test('returns array of correct length for various municipalities', () => {
    expect(submarketBreakdown(submarketData, 'Acton')).toHaveLength(5);
    expect(submarketBreakdown(submarketData, 'Brookline')).toHaveLength(12);
    expect(submarketBreakdown(submarketData, 'Topsfield')).toHaveLength(1);
  })
});
