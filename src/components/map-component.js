import {
  dataLayers
} from '../config/datalayers-config.js'

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
    this.map = this.$refs.map.map
    this.$store.commit('setMap', this.map)

    // wait for the map to load
    this.map.on('load', () => {
      console.log(dataLayers)
      dataLayers.forEach((layer) => {
        layer['mapbox-layers'].forEach((maplayer) => {
          this.map.addLayer(maplayer)
        })
      })
    })
  }
}
