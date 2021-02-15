import { describe, test, expect } from '@jest/globals';
import { filterMunicipality } from './../SearchResults';
import submarketData from '../../../utils/mockSubmarketData';

describe('Municipal search', () => {
  test('returns data NA with either of the arguments is undefined/null', () => {
    expect(filterMunicipality(null, undefined)).toEqual('Data n/a');
    expect(filterMunicipality(submarketData, undefined)).toEqual('Data n/a');
    expect(filterMunicipality(null, 'Acton')).toEqual('Data n/a');
  });

  test('returns array of correct length for various municipalities', () => {
    expect(filterMunicipality(submarketData, 'Acton')).toHaveLength(5);
    expect(filterMunicipality(submarketData, 'Brookline')).toHaveLength(12);
    expect(filterMunicipality(submarketData, 'Topsfield')).toHaveLength(1);
  })
});
