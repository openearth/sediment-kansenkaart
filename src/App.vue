<template>
  <v-app>
    <map-component>
    </map-component>
  </v-app>
</template>

<script>
import MapComponent from './components/MapComponent'

export default {
  name: 'App',
  components: {
    'map-component': MapComponent
  },
  data () {
    return {
    }
  }
}
</script>

<style>
html, body {
  width: 100vw;
  height: 100vh;
  margin: 0;
  padding: 0;
  overflow-y: hidden;
}

#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  color: #2c3e50;
  width: 100%;
  height: 100%;
}
</style>
