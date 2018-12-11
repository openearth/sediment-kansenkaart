<template>
  <div id="app">
  <v-app>
    <v-navigation-drawer
      id="navdrawer"
      persistent
      fixed
      v-model="drawer"
      >
      <menu-component>
      </menu-component>
    </v-navigation-drawer>

    <v-toolbar id="toolbar"  xs6 color="grey lighten-4">
      <v-toolbar-side-icon @click.stop="drawer = !drawer"></v-toolbar-side-icon>
      <v-toolbar-title>Erosion, Consequences and Opportunityies(ECO)</v-toolbar-title>
    </v-toolbar>
    <map-component>
    </map-component>

    </v-app>
  </div>
</template>

<script src="./app.js">
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
