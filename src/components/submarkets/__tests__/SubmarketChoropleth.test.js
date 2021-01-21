import { describe, test, expect } from '@jest/globals';
import { getClickedTractId } from './../SubmarketChoropleth';
import { clickDataInRegion, clickDataOutsideRegion } from '../../../utils/mapOnClickData';

describe('Submarket Choropleth', () => {
  test('returns the ID of the selected tract when area inside region is clicked', () => {
    expect(getClickedTractId(clickDataInRegion)).toEqual('25017358300');
  });

  test('returns null when clicked area is outside of the MAPC region', () => {
    expect(getClickedTractId(clickDataOutsideRegion)).toBeNull();
  });
});
