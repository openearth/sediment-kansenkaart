import {
  dataSources
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
      console.log('adding source')
      this.map.addSource(
        "mapbox-sources", {
          "url": "mapbox://sedimentkaart.4pl8i6e6,sedimentkaart.1ios0psi,sedimentkaart.4i9lah49,sedimentkaart.bbbxkvbv",
          "type": "vector"}
        )
      this.$store.state.dataLayers.forEach((layer) => {
        layer['mapbox-layers'].forEach((maplayer) => {
          this.map.addLayer(maplayer)
        })
      })

      this.map.on('mousemove', 'bodemverandering', (e) => {
        this.map.getCanvas().style.cursor = 'pointer';
        console.log(e.features[0])
        if(this.hover_id !== e.features[0].properties.Transect_id) {
          this.hover_id = e.features[0].properties.Transect_id
          this.map.setFilter("shoreline-profiles-hover", ["==", "Transect_id", this.hover_id])
        }
      })

      this.map.on('mouseleave', 'bodemverandering', () => {
        this.map.getCanvas().style.cursor = '';
        this.map.setFilter("shoreline-profiles-hover", ["==", "Transect_id", ""])
        this.hover_id = ""
      })
    })
  }
}
