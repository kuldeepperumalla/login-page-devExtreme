<template>
  <signup-page />
</template>

<script lang="ts">
import { Vue, Component } from "vue-property-decorator";
import SignupPage from "../components/SignupPage.vue";

@Component({
  components: {
    SignupPage
  }
})
export default class Signup extends Vue {}
</script>
