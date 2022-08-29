<template>
  <hello-aykut></hello-aykut>
</template>

<script>
import HelloAykut from "./components/AykutsComponents/HelloAykut.vue";
import HelloMuhammetVue from "./components/MuhammetsComponents/HelloMuhammet.vue";
export default {
  name: "App",
  components: {
    HelloAykut,
    HelloMuhammet
  },
};
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
