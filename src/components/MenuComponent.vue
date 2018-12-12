<template>
  <div id='menu'>
    <v-list v-for='datalayer in $store.state.dataLayers' :key='datalayer.title' two-line>
      <v-list-tile>
        <v-list-tile-avatar>
          <v-switch
            v-model='datalayer.active'
            v-on:change='toggleLayers()'>
          </v-switch>
        </v-list-tile-avatar>
        <v-list-tile-content>
          <v-list-tile-title>
            {{datalayer.title}}
          </v-list-tile-title>
          <v-list-tile-sub-title>
            <div v-if='datalayer.barlegend' class='bar-wrapper'>
              <div :style='datalayer.barlegend' class='bar'></div>
              <div class='bartext'>{{datalayer.bartext}} </div>
            </div>
          </v-list-tile-sub-title>
        </v-list-tile-content>
      </v-list-tile>
    </v-list>
  </div>
</template>

<script src='./menu-component.js'>
</script>

<style>
@import '~mapbox-gl/dist/mapbox-gl.css';

#map {
  width: 100%;
  height: 100%;
}

.bar {
  width: 100%;
  height: 10px;
}

.bar-wrapper {
  display: block;
  width: 100%;
  margin-bottom: 10px;
}
.bartext {
  width: 100%;
  display: inline-block;
  text-align: justify;
  text-align-last: justify
}
</style>
