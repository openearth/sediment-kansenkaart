<template>
  <div id='menu'>
    <div v-for="data in menulayers" :key="data.layer">
      <v-toolbar flat>
        {{data.title}}
      </v-toolbar>
      <v-list two-line>
        <v-list-tile v-for='datalayer in dataLayers(data.layer)' :key='datalayer.title'>
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
              <div v-if="datalayer.colorlegend">
                <div v-for="i in datalayer.colorlegend" :key="i.name" class="color-label"  >
                  <span class="colored-span" :style="i.color"></span>
                  <label class="ma-1" >{{i.name}}</label>
                </div>
              </div>
              <div v-if="datalayer.texticonlegend">
                <div v-for="i in datalayer.texticonlegend" :key="i.name" class="color-label"  >
                  <span :style="i.style">{{i.texticon}}</span>
                  <label class="ma-1" >{{i.name}}</label>
                </div>
              </div>
            </v-list-tile-sub-title>
          </v-list-tile-content>
        </v-list-tile>
      </v-list>
    </div>
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

.color-label {
  display: flex;
}

.colored-span {
  width: 20px;
  height: 20px;
  border-radius: 5px;
  margin: 4px;
}
</style>
