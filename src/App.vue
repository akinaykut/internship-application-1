<template>
  <hello-aykut></hello-aykut>
  <hello-muhammet></hello-muhammet>
  <table-vue></table-vue>
</template>

<script>
import HelloAykut from "./components/AykutsComponents/HelloAykut.vue";
import HelloMuhammet from "./components/MuhammetsComponents/HelloMuhammet.vue";
import TableVue from "./components/MuhammetsComponents/TableVue";
export default {
  name: "App",
  components: {
    HelloAykut,
    HelloMuhammet,
    TableVue
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
