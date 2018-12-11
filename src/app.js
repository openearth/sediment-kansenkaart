import MapComponent from './components/MapComponent'
import MenuComponent from './components/MenuComponent'
import {
  dataLayers
} from './config/datalayers-config.js'

export default {
  name: 'App',
  components: {
    'map-component': MapComponent,
    'menu-component': MenuComponent
  },
  data () {
    return {
      drawer: true
    }
  },
  mounted () {
    this.$store.commit('setDataLayers', dataLayers)
  },
  methods: {
    toggleLayers() {
      if (_.isNil(this.map)) {
        return;
      }
      // Function to toggle the visibility and opacity of the layers.
      var vis = ['none', 'visible']
      _.each(this.layers, (layer) => {
        _.each(layer.data, (sublayer) => {
          if (this.map.getLayer(sublayer.id) !== undefined) {
            if (layer.active) {
              this.map.setLayoutProperty(sublayer.id, 'visibility', vis[1]);
            } else {
              this.map.setLayoutProperty(sublayer.id, 'visibility', vis[0]);
            }
          }
            // if layer === deckgl-layer: use deck gl updateTrigger ergument
        })
      })
    }
  }
}
