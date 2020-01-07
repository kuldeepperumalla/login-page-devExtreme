<template>
  <div>
    <login-page />
  </div>
</template>

<script lang="ts">
import LoginPage from "../components/LoginPage.vue";

import { Component, Vue } from "vue-property-decorator";

@Component({
  components: {
    LoginPage
  }
})
export default class Login extends Vue {}
</script>
