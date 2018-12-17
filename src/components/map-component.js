import mapboxgl from 'mapbox-gl'
import { dataSources } from '../config/datalayers-config.js'

export default {
  name: 'map-component',
  data: () => {
    return {
      map: null,
      hover_id: '',
      table_properties: { 'hoi ': 'checking' },
      kabelpopup: false
    }
  },
  components: {
  },
  mounted () {
    this.map = this.$refs.map.map
    this.$store.commit('setMap', this.map)

    var datapopup = new mapboxgl.Popup({
      closeButton: false,
      closeOnClick: false
    })

    datapopup.setDOMContent(document.getElementById('popup-table'))

    // wait for the map to load
    this.map.on('load', () => {
      console.log('adding source')
      this.map.addSource(dataSources.name, dataSources.sources)
      this.$store.state.dataLayers.forEach((layer) => {
        layer['mapbox-layers'].forEach((maplayer) => {
          this.map.addLayer(maplayer)
        })
      })

      this.map.on('mousemove', 'kabels', (e) => {
        this.kabelpopup = true

        if (e.features[0].layer.id === 'kabels') {
          this.map.getCanvas().style.cursor = 'pointer'
          this.map.setFilter('kabels-hover', ['==', 'OBJECTID', e.features[0].properties.OBJECTID])
          this.table_properties = {}
          this.table_properties = e.features[0].properties
          datapopup.setLngLat(e.lngLat)
            .addTo(this.map)
        }
        this.kabelpopup = true
      })

      this.map.on('mouseleave', 'kabels', () => {
        datapopup.remove()
        this.map.getCanvas().style.cursor = ''
        this.map.setFilter('kabels-hover', ['==', 'OBJECTID', ''])
        this.hover_id = ''
        this.kabelpopup = false
      })

      this.map.on('mousemove', 'bodemverandering', (e) => {
        if (this.kabelpopup === false) {
          this.map.getCanvas().style.cursor = 'pointer'
          this.map.setFilter('bodemverandering-hover', ['==', 'Id', this.hover_id])

          this.table_properties = {}
          this.table_properties['Bodemverandering [cm/jaar]'] = e.features[0].properties.Bodemveran.toFixed(5)
          this.table_properties['Oppervlakte [m2]'] = e.features[0].properties.area
          this.table_properties['Volume [m3]'] = e.features[0].properties.volume
          datapopup.setLngLat(e.lngLat)
            .addTo(this.map)
          if (this.hover_id !== e.features[0].properties.Id) {
            this.hover_id = e.features[0].properties.Id
          }
        }
      })

      this.map.on('mouseleave', 'bodemverandering', () => {
        this.map.getCanvas().style.cursor = ''
        this.map.setFilter('bodemverandering-hover', ['==', 'Id', ''])
        this.hover_id = ''
        console.log('remove datapopup')
        datapopup.remove()
      })
    })
  }
}
