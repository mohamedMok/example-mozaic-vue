<template>
  <div id="app">
    <Navigation />

    <div class="ml-container">
      <router-view />
    </div>
  </div>
</template>

<script>
import Navigation from "./components/Navigation";

export default {
  name: "app",
  components: {
    Navigation
  },
  methods: {}
};
</script>

<style lang="scss">
@import "./assets/variables.scss";

* {
  &::after,
  &::before {
    box-sizing: border-box;
  }
}

html,
body {
  font: 100%;
  margin: 0;
  padding: 0;
}

$font-stack: "LeroyMerlin", sans-serif;

body {
  background-color: white;
  font-family: $font-stack;
}

.app {
  min-height: 100vh;
}
</style>

<style lang="scss" scoped>
@import "settings-tools/_all-settings";
@import "layouts/_l.container";
@import "layouts/_l.flexy";
@import "typography/_t.headings";
</style>
