<template>
  <div id="menu">
    <v-list v-for="datalayer in $store.state.dataLayers" :key="datalayer['menu-title']">
      <v-list-tile>
        <v-list-tile-avatar>
          <v-switch
            v-model="datalayer.active"
            v-on:change="toggleLayers()">
          </v-switch>
        </v-list-tile-avatar>
        <v-list-tile-content>
          <v-list-tile-title>
            {{datalayer['menu-title']}}
          </v-list-tile-title>
        </v-list-tile-content>
      </v-list-tile>
    </v-list>
  </div>
</template>

<script src="./menu-component.js">
</script>

<style>
@import '~mapbox-gl/dist/mapbox-gl.css';

#map {
  width: 100%;
  height: 100%;
}
</style>
