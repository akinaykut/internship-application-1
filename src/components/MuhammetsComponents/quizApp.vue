<template>
  <section>
    <div class="main-flex-container">
      <h1>Soru</h1>
      <p>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Animi, fugiat
        vero? Itaque necessitatibus illum minima distinctio, provident officiis
        eveniet. Obcaecati pariatur voluptatum aliquam reprehenderit animi
        consequuntur optio doloribus hic facere.
      </p>
      <div id="questions"></div>
      <div id="answer"></div>
    </div>
  </section>
</template>

<script>
const questionDisplay = document.querySelector("#questions");
const answerDisplay = document.querySelector("#answer");
const questions = [
  {
    id: 0,
  },
  {},
  {},
  {},
  {},
];
</script>

<style>
@import url("https://fonts.googleapis.com/css2?family=Montserrat:wght@100;300;500;600;700&display=swap");
* {
  font-family: "Montserrat", sans-serif;
}
template {
  display: flex;
  justify-content: center;
}
section {
  width: 600px;
}
h1 {
  font-size: 2.5rem;
  line-height: 1.05;
  text-align: left;
}
p {
  font-size: 1.125rem;
  line-height: 1.2;
}
</style>
