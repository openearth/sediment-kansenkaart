const dataSources = {
  "name": "mapbox-sources",
  "sources": {
    "url": "mapbox://sedimentkaart.ce8lve45,sedimentkaart.b67gl0hf,sedimentkaart.1ios0psi,sedimentkaart.bbbxkvbv",
    "type": "vector"
  }
}

const dataLayers = [{
  "title": "Bodemverandering [cm/jaar]",
  "active": true,
  "barlegend": "background: linear-gradient(to left, rgb(101, 72, 0), rgb(256, 256, 256), rgb(0, 0, 76));",
  "bartext": "-5 0 5",
  "mapbox-layers": [{
    "id": "bodemverandering-10km",
    "type": "fill",
    "source": "mapbox-sources",
    "source-layer": "bodemverandering_10km-1jsp3k",
    "maxzoom": 12,
    "layout": {},
    "paint": {
      "fill-color": [
        "interpolate",
        ["linear"],
        ["get", "Bodemveran"],
        -5,
        "rgb(101, 72, 0)",
        0,
        "rgb(256, 256, 256)",
        5,
        "rgb(0, 0, 76)"
      ]
    }
  }, {
    "id": "bodemverandering",
    "type": "fill",
    "source": "mapbox-sources",
    "source-layer": "bodemverandering_1km-1l1ax2",
    "minzoom": 12,
    "layout": {},
    "paint": {
      "fill-color": [
        "interpolate",
        ["linear"],
        ["get", "Bodemveran"],
        -5,
        "rgb(101, 72, 0)",
        0,
        "rgb(256, 256, 256)",
        5,
        "rgb(0, 0, 76)"
      ]
    }
  },  {
    "id": "bodemverandering-hover",
    "type": "line",
    "source": "mapbox-sources",
    "source-layer": "bodemverandering_1km-1l1ax2",
    "minzoom": 12,
    "layout": {},
    "paint": {
      "line-color": "black"
    },
    'filter': ['==', 'id', '']
  }]
}, {
  "title": "Bandijken",
  "active": true,
  "mapbox-layers": [{
    "id": "bandijken-6hau6f",
    "type": "line",
    "metadata": {},
    "source": "mapbox-sources",
    "source-layer": "bandijken-6hau6f",
    "minzoom": 12,
    "layout": {},
    "paint": {
      "line-color": "hsl(112, 78%, 69%)"
    }
  }]
}, {
  "title": "Intersectie van kabels met erosie lagen",
  "active": true,
  "mapbox-layers": [{
    "id": "kabels-ddx4t2",
    "type": "symbol",
    "metadata": {},
    "source": "mapbox-sources",
    "source-layer": "kabels-ddx4t2",
    "minzoom": 12,
    "layout": {
      "text-field": "x",
      "text-font": ["Caveat Bold", "Arial Unicode MS Regular"],
      "text-size": 40,
      "text-allow-overlap": true,
      "text-pitch-alignment": "map"
    },
    "paint": {
      "text-color": "purple"
    }
  }]
}]

export {
  dataSources,
  dataLayers
}
