<template>
  <div id="app">
      <Navigation/>
      <router-view/>
      
  </div>    
</template>

<script>
import Navigation from './components/Navigation'


export default {
  name: 'app',
  components: {
    Navigation
  },
  methods: {
  }
}
</script>

<style lang="scss" scoped>
@import "settings-tools/_all-settings";
@import 'layouts/_l.container';
@import 'layouts/_l.flexy';
@import 'typography/_t.headings';
</style>

<style lang="scss">
@import './src/assets/variables.scss';

html, body {
  margin: 0;
  padding: 0;
}
body {
  background-color: #E2DBD9 !important;
}

.loginBox {
  height: 300px;
  width: 500px;
  background-color: white;
  padding: 50px;
}
.app {
  min-height: 100vh;
}
</style>
