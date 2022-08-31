<template>
  <div class="container">
    <hello-aykut></hello-aykut>

    <footer class="white-section" id="footer">
      <div class="container-fluid">
        <a href="https://github.com/akinaykut" target="_blank">
          <i class="fa fa-github footer-icon" style="font-size: 24px"> </i>
        </a>

        <a href="https://twitter.com/tukyanika" target="_blank">
          <i
            class="fa fa-twitter-square footer-icon"
            style="font-size: 24px"
          ></i>
        </a>

        <a href="https://www.linkedin.com/in/akin-aykut/" target="_blank">
          <i
            class="fa fa-linkedin-square footer-icon"
            style="font-size: 24px"
          ></i>
        </a>

        <i class="fa fa-instagram footer-icon" style="font-size: 24px"></i>
        <p>© Copyright Akin Aykut</p>
      </div>
    </footer>
  </div>
</template>

<script>
import HelloAykut from "../AykutsComponents/HelloAykut.vue";

export default {
  components: {
    HelloAykut,
  },
};
</script>

<style scoped>
@import "https://cdnjs.cloudflare.com/ajax/libs/font-awesome/4.7.0/css/font-awesome.css";

/* Footer Section  Start*/
#footer {
  margin-bottom: 0;
  display: flex;
  justify-content: center;
  align-items: center;
}
.container-fluid {
  text-align: center;
}

.white-section {
  padding: 5%;
  background-color: #66bfbf;
}

#footer a {
  color: black;
}

i {
  padding: 3%;
}

i:hover {
  color: #df7861;
}

/* Footer Section  End*/
</style>
