<template>
  <v-app>
    <v-toolbar height="64px" prominent fixed>
      <v-toolbar-side-icon @click.stop="drawer = !drawer"></v-toolbar-side-icon>
      <v-toolbar-title>Erosion, Consequences and Opportunities</v-toolbar-title>
    </v-toolbar>
    <v-navigation-drawer
      id="navdrawer"
      fixed
      v-model="drawer"
      hide-overlay
      >
      <menu-component>
      </menu-component>
    </v-navigation-drawer>
    <map-component>
    </map-component>

  </v-app>
</template>

<script src="./app.js">
</script>

<style>
#navdrawer {
  top: 64px;
  z-index: 1;
}

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
