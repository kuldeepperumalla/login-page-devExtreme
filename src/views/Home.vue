<template>
  <div class="home">
    <home-page>
      <div slot="content" class="text">
        <h2>Home page</h2>
        <router-link to="/signup">Join us? | Sign Up</router-link>
      </div>
    </home-page>
  </div>
</template>

<script>
import HomePage from "@/components/HomePage.vue";

export default {
  name: "home",
  components: {
    HomePage
  }
};
</script>
<style lang="css" scoped>
</style>

