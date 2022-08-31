<template>
  <the-header v-if="this.$route.path === '/'"></the-header>
  <router-view></router-view>
  

</template>

<script>
import TheHeader from "./components/Header/TheHeader.vue";
export default {
  name: "App",
  components: {
    TheHeader,},
  
  };

</script>


<style>
* {
  margin: 0;
  padding: 0;
  box-sizing: border-box;
}
body {
  /* height: 5000px; */
  background-color: bisque;
}
</style>

