export default {
  name: 'map-component',
  data: () => {
    return {
      map: null
    }
  },
  components: {
  },
  mounted () {
  },
  methods: {
    sortLayers() {
      for (var i = this.$store.dataLayers.length - 2; i >= 0; --i) {
        for (var thislayer = 0; thislayer < this.dataLayers[i]['mapbox-layers'].length; ++thislayer) {
          if (this.$store.state.map.getLayer(this.dataLayers[i]['mapbox-layers'][thislayer].id) !== undefined) {
            this.$store.state.map.moveLayer(this.dataLayers[i]['mapbox-layers'][thislayer].id)
          }
        }
      }
    },
    toggleLayers() {
      console.log('toggling', this.$store.state.map, this.$store.state.dataLayers)
      if (this.$store.state.map === null) {
        return;
      }
      // Function to toggle the visibility and opacity of the layers.
      var vis = ['none', 'visible']
      this.$store.state.dataLayers.forEach((layer) => {
        console.log(layer)
        layer['mapbox-layers'].forEach((sublayer) => {
          if (this.$store.state.map.getLayer(sublayer.id) !== undefined) {
            if (layer.active) {
              this.$store.state.map.setLayoutProperty(sublayer.id, 'visibility', vis[1]);
            } else {
              this.$store.state.map.setLayoutProperty(sublayer.id, 'visibility', vis[0]);
            }
          }
        })
      })
    }
  },
}
