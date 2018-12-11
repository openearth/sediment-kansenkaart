import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    map: null,
    dataLayers: []
  },
  mutations: {
    setMap (state, map) {
      map.resize()
      state.map = map
    },
    setDataLayers (state, dataLayers) {
      state.dataLayers = dataLayers
    }
  },
  actions: {

  }
})
