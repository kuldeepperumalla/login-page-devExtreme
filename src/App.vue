<template>
  <div id="app">
    <router-link to="/">HOME</router-link>
    <router-view />
  </div>
</template>

<script lang="ts">
import { Vue, Component } from "vue-property-decorator";
import "./assets/index.scss";

@Component({
  components: {}
})
export default class App extends Vue {}
</script>

<style lang="scss" >
#app {
  font-family: "Avenir", Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}

#box {
  padding: 18px 0px;
}
</style>
