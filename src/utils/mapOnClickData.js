const clickDataInRegion = {
  features: [
    {
      layer: {
        id: 'Tract choropleth',
        type: 'fill',
        source: '2010 Census Tracts',
        'source-layer': 'Tracts-2jsl06',
        paint: {
          'fill-color': {
            r: 0.8549019607843137,
            g: 0.8549019607843137,
            b: 0.9215686274509803,
            a: 1,
          },
          'fill-outline-color': {
            r: 0.13725490196078433,
            g: 0.12156862745098039,
            b: 0.12549019607843137,
            a: 1,
          },
        },
        layout: {},
      },
      properties: {
        aland10: 7553652,
        area_acres: 1870.7007,
        area_sqft: 81487724.58,
        awater10: 17259,
        county10: '017',
        ct10_id: '25017358300',
        intptlat10: '+42.4261135',
        intptlon10: '-071.2340953',
        name10: '3583',
        shape_Area: 7570487.57948,
        shape_Le_1: 13423.1596912,
        shape_leng: 13423.1596912,
        state10: '25',
        tract10: '358300',
      },
    },
    {
      layer: {
        id: 'landuse',
        type: 'fill',
        source: 'composite',
        'source-layer': 'landuse',
        metadata: {
          'mapbox:featureComponent': 'land-and-water',
          'mapbox:group': 'Land & water, land',
        },
        minzoom: 5,
        filter: [
          'match',
          [
            'get',
            'class',
          ],
          [
            'park',
            'airport',
            'glacier',
            'pitch',
            'sand',
            'facility',
          ],
          true,
          false,
        ],
        paint: {
          'fill-color': {
            r: 0.8980392156862745,
            g: 0.8627450980392157,
            b: 0.9490196078431372,
            a: 1,
          },
          'fill-opacity': 1,
        },
        layout: {},
      },
      properties: {
        class: 'pitch',
        type: 'driving_range',
      },
    },
    {
      layer: {
        source: 'composite',
        'source-layer': 'landuse',
        type: 'fill',
      },
      properties: {
        class: 'park',
        type: 'golf_course',
      },
    },
  ],
};

const clickDataOutsideRegion = {
  features: [
    {
      layer: {
        id: 'landuse',
        type: 'fill',
        source: 'composite',
        'source-layer': 'landuse',
        metadata: {
          'mapbox:featureComponent': 'land-and-water',
          'mapbox:group': 'Land & water, land',
        },
        minzoom: 5,
        filter: [
          'match',
          [
            'get',
            'class',
          ],
          [
            'park',
            'airport',
            'glacier',
            'pitch',
            'sand',
            'facility',
          ],
          true,
          false,
        ],
        paint: {
          'fill-color': {
            r: 0.8980392156862745,
            g: 0.8627450980392157,
            b: 0.9490196078431372,
            a: 1,
          },
          'fill-opacity': 1,
        },
        layout: {},
      },
      properties: {
        class: 'pitch',
        type: 'driving_range',
      },
    },
    {
      layer: {
        source: 'composite',
        'source-layer': 'landuse',
        type: 'fill',
      },
      properties: {
        class: 'park',
        type: 'golf_course',
      },
    },
  ],
};

export { clickDataInRegion, clickDataOutsideRegion };
