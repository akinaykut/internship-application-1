<template>
  <div class="flip-card">
    <div class="flip-card-inner">
      <div class="flip-card-front">
        <img
          src="../MuhammetsComponents/img/images123.jpg"
          alt="Avatar"
          style="width: 300px; height: 300px"
        />
        <h1>What is actually Vue.js ?</h1>
        <p>
          Vue.js is an open-source model–view–viewmodel front end JavaScript
          framework for building user interfaces and single-page applications.
          It was created by Evan You, and is maintained by him and the rest of
          the active core team members.
        </p>
      </div>
      <div class="flip-card-back">
        <h1>Muhammet Ali Şimşek</h1>
        <p>Front End Intern</p>
        <p>Training on Vue.js</p>
        <div class="contact-details">
          <a href="https://www.instagram.com/the.finifugal/" target="_blank"
            >Instagram</a
          >
          <br />
          <a
            href="https://www.linkedin.com/in/ma-simsek-379776202/"
            target="_blank"
            >LinkedIn</a
          >
          <br />
          <a href="https://github.com/MSimsek07" target="_blank">Github</a>
        </div>
      </div>
    </div>
  </div>
</template>

<script></script>

<style>
.flip-card {
  background-color: transparent;
  width: 500px;
  height: 600px;
  border: 1px solid #f1f1f1;
  perspective: 1000px;
  margin: auto;
}

.flip-card-inner {
  position: relative;
  width: 100%;
  height: 100%;
  text-align: center;
  transition: transform 0.8s;
  transform-style: preserve-3d;
}

.flip-card:hover .flip-card-inner {
  transform: rotateY(180deg);
}

.flip-card-front,
.flip-card-back {
  position: absolute;
  width: 500px;
  height: 600px;
  -webkit-backface-visibility: hidden;
  backface-visibility: hidden;
}

.flip-card-front {
  background-color: rgb(35, 194, 146);
  color: white;
  font-family: "Lucida Sans", "Lucida Sans Regular", "Lucida Grande",
    "Lucida Sans Unicode", Geneva, Verdana, sans-serif;
  font-size: 1.2em;
}

.flip-card-back {
  background-color: rgb(35, 194, 146);
  color: white;
  transform: rotateY(179deg);
  text-align: center;
  font-family: "Franklin Gothic Medium", "Arial Narrow", Arial, sans-serif;
}
.contact-details {
  font-size: large;
  font-family: "Segoe UI", Tahoma, Geneva, Verdana, sans-serif;
}
</style>
