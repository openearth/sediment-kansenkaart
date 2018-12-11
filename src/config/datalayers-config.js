const dataLayers = [{
  'menu-title': 'Erosion layer',
  'active': true,
  'mapbox-layers': [{
    'id': 'bodemverandering-perkm-v2-67zqa0',
    'type': 'fill',
    'source': {
      'url': 'mapbox://camvdvries.ats15lzk',
      'type': 'vector'
    },
    'source-layer': 'Bodemverandering_perkm_v2-67zqa0',
    'minzoom': 12,
    'layout': {},
    'paint': {
      'fill-color': [
        'interpolate',
        ['linear'],
        ['get', 'Bodemveran'],
        -2,
        'hsl(246, 100%, 48%)',
        0,
        'hsl(0, 95%, 100%)',
        2,
        'hsl(0, 100%, 50%)'
      ]
    }
  },
  {
    'id': 'bodemverandering-per25km-0ae7af',
    'type': 'fill',
    'source': {
      'url': 'mapbox://camvdvries.0smie672',
      'type': 'vector'
    },
    'source-layer': 'Bodemverandering_per25km-0ae7af',
    'maxzoom': 12,
    'layout': {},
    'paint': {
      'fill-color': [
        'interpolate',
        ['linear'],
        ['get', 'MEAN_Bodem'],
        -2,
        'hsl(246, 100%, 48%)',
        0,
        'hsl(0, 95%, 100%)',
        2,
        'hsl(0, 100%, 50%)'
      ]
    }
  }]
}]

export {
  dataLayers
}
