export default {
  name: 'map-component',
  data: () => {
    return {
      map: null,
      menulayers: [{
        layer: 'datalayers',
        title: 'Data lagen'
      }, {
        layer: 'consequences',
        title: 'Consequenties'
      }]
    }
  },
  methods: {
    toggleLayers () {
      console.log('toggling', this.$store.state.map, this.$store.state.dataLayers)
      if (this.$store.state.map === null) {
        return
      }
      // Function to toggle the visibility and opacity of the layers.
      var vis = ['none', 'visible']
      this.$store.state.dataLayers.forEach((layer) => {
        console.log(layer)
        layer['mapbox-layers'].forEach((sublayer) => {
          if (this.$store.state.map.getLayer(sublayer.id) !== undefined) {
            if (layer.active) {
              this.$store.state.map.setLayoutProperty(sublayer.id, 'visibility', vis[1])
            } else {
              this.$store.state.map.setLayoutProperty(sublayer.id, 'visibility', vis[0])
            }
          }
        })
      })
    },
    dataLayers (type) {
      return this.$store.state.dataLayers.filter(x => x.type === type)
    }
  }
}
