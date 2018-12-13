import {
  dataSources
} from '../config/datalayers-config.js'

 export default {
  name: 'map-component',
  data: () => {
    return {
      map: null,
      hover_id: ""
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
      this.map.addSource(dataSources.name, dataSources.sources)
      this.$store.state.dataLayers.forEach((layer) => {
        layer['mapbox-layers'].forEach((maplayer) => {
          this.map.addLayer(maplayer)
        })
      })

      this.map.on('mousemove', 'bodemverandering', (e) => {
        this.map.getCanvas().style.cursor = 'pointer';
        console.log('e.features', e.features[0])
        if(this.hover_id !== e.features[0].properties.Id) {
          this.hover_id = e.features[0].properties.Id
          this.map.setFilter("bodemverandering-hover", ["==", "Id", this.hover_id])
        }
      })

      this.map.on('mouseleave', 'bodemverandering', () => {
        this.map.getCanvas().style.cursor = '';
        this.map.setFilter("bodemverandering-hover", ["==", "Id", ""])
        this.hover_id = ""
      })
    })
  }
}
