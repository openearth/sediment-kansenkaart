<template>
  <div id="map">
    <v-mapbox
      access-token="pk.eyJ1Ijoic2lnZ3lmIiwiYSI6Il8xOGdYdlEifQ.3-JZpqwUa3hydjAJFXIlMA"
      map-style="mapbox://styles/mapbox/light-v9"
      :center="[5.673272, 52.079502]"
      :zoom="7.88"
      :pitch="0"
      :bearing="0"
      id="map"
      ref="map"
      >
    </v-mapbox>
    <div id="popup-table">
      <table class="tg">
        <tr v-for="(props, key) in table_properties">
          <td>{{key}}</td>
          <td>{{props}}</td>
        </tr>
      </table>
    </div>
  </div>
</template>

<script src="./map-component.js">
</script>

<style>
@import '~mapbox-gl/dist/mapbox-gl.css';

#map {
  width: 100%;
  height: 100%;
}

.tg {
  position: relative;
  table-layout: fixed;
  border-collapse: collapse;
  border-spacing: 0;
  border-color: #e6e6e6;
  position: relative
}

.tg td {
  position: relative;
  padding: 10px 5px;
  border-style: solid;
  border-width: 0px;
  overflow: hidden;
  word-break: normal;
  border-top-width: 1px;
  border-bottom-width: 1px;
  border-color: #e6e6e6;
  color: #333;
  background-color: #fff;
}

.tg th {
  position: relative;
  padding: 10px 5px;
  border-style: solid;
  border-width: 0px;
  overflow: hidden;
  word-break: normal;
  border-top-width: 1px;
  border-bottom-width: 1px;
  border-color: #e6e6e6;
  color: #333;
  background-color: #f0f0f0;
}

.tg .tg-0lax {
  text-align: left;
  vertical-align: top
}
</style>
