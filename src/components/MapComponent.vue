<template>
  <div id="map">
    <v-mapbox
      access-token="pk.eyJ1Ijoic2lnZ3lmIiwiYSI6Il8xOGdYdlEifQ.3-JZpqwUa3hydjAJFXIlMA"
      map-style="mapbox://styles/mapbox/satellite-v9"
      :center="[5.673272, 52.079502]"
      :zoom="7.88"
      :pitch="0"
      :bearing="0"
      id="map"
      ref="map"
      >
    </v-mapbox>
  </div>
</template>

<script>
export default {
  name: 'map-component',
  components: {
  }
}
</script>

<style>
@import '~mapbox-gl/dist/mapbox-gl.css';

#map {
  width: 100%;
  height: 100%;
}
</style>
