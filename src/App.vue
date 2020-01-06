<template>
  <div id="app">
    <router-view />
    <!-- <img src="Mountains.ai.svg" alt /> -->
  </div>
</template>

<script lang="ts">
import { Vue, Component } from "vue-property-decorator";

@Component({
  components: {}
})
export default class App extends Vue {
  click = "asd";
  text = "Login ";

  toggle() {
    this.text = "Login";
  }
}
</script>

<style lang="scss" >
* {
  font-family: "Avenir", Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  font-weight: normal;
}
html {
  height: 100%;
  margin: 0%;
  padding: 0;
  background-color: #f0f0f0;
}
#app {
  font-family: "Avenir", Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}

#nav {
  padding: 18px 0px;
}
a {
  font-weight: normal;

  text-decoration: none;
}
</style>
