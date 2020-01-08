<template>
  <div class="main">
    <slot name="content"></slot>
  </div>
</template>

<script lang="ts">
import { Component, Prop, Vue } from "vue-property-decorator";

@Component
export default class HomePage extends Vue {}
</script>


<style scoped lang="scss">
.main {
  font-family: "Avenir", Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}

.text {
  padding: 0px;

  h1 {
    font-weight: bold;
    color: #2c3e50;
  }
}
</style>
