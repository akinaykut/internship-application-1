<template>
  <the-header class=""></the-header>
  <div class="container">
    <div
      id="carouselExampleCaptions"
      class="carousel slide mt-5 p-5"
      data-bs-ride="carousel"
    >
      <div class="carousel-indicators">
        <button
          type="button"
          data-bs-target="#carouselExampleCaptions"
          data-bs-slide-to="0"
          class="active"
          aria-current="true"
          aria-label="Slide 1"
        ></button>
        <button
          type="button"
          data-bs-target="#carouselExampleCaptions"
          data-bs-slide-to="1"
          aria-label="Slide 2"
        ></button>
        <button
          type="button"
          data-bs-target="#carouselExampleCaptions"
          data-bs-slide-to="2"
          aria-label="Slide 3"
        ></button>
      </div>
      <div class="carousel-inner">
        <div class="carousel-item active">
          <img
            src="https://community-cdn-digitalocean-com.global.ssl.fastly.net/VWgNzkr4k1aKz7fmAiXjy3Xp"
            class="d-block w-100"
            alt="..."
          />
          <div class="carousel-caption d-none d-md-block">
            <h5>First slide label</h5>
            <p>Some representative placeholder content for the first slide.</p>
          </div>
        </div>
        <div class="carousel-item">
          <img
            src="https://lenguajejs.com/vuejs/introduccion/que-es-vue/vuejs.png"
            class="d-block w-100"
            alt="..."
          />
          <div class="carousel-caption d-none d-md-block">
            <h5>Second slide label</h5>
            <p>Some representative placeholder content for the second slide.</p>
          </div>
        </div>
        <div class="carousel-item">
          <img
            src="https://blog.logrocket.com/wp-content/uploads/2019/07/using-vue-js-slots-pass-html-content-components.png"
            class="d-block w-100"
            alt="..."
          />
          <div class="carousel-caption d-none d-md-block">
            <h5>Third slide label</h5>
            <p>Some representative placeholder content for the third slide.</p>
          </div>
        </div>
      </div>
      <button
        class="carousel-control-prev"
        type="button"
        data-bs-target="#carouselExampleCaptions"
        data-bs-slide="prev"
      >
        <span class="carousel-control-prev-icon" aria-hidden="true"></span>
        <span class="visually-hidden">Previous</span>
      </button>
      <button
        class="carousel-control-next"
        type="button"
        data-bs-target="#carouselExampleCaptions"
        data-bs-slide="next"
      >
        <span class="carousel-control-next-icon" aria-hidden="true"></span>
        <span class="visually-hidden">Next</span>
      </button>
    </div>

    <div class="row p-5">
      <div class="col-8 mt-1">
        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit.</p>
        <p>Omnis quis maiores asperiores odit praesentium modi ex.</p>
        <p>Consequuntur, odio fugit quisquam ratione omnis recusandae magni.</p>
        <p>Minima accusamus id perferendis suscipit, mollitia officiis a.</p>
        <p>Eveniet doloremque vitae optio dolore temporibus maxime cum.</p>
        <p>Officiis totam earum saepe libero, consequuntur sequi error.</p>
        <p>
          Nostrum distinctio eveniet soluta sapiente magni tenetur laudantium!
        </p>
        <p>Suscipit excepturi animi quas fuga. Autem, maxime aut.</p>
      </div>
      <div class="col-4 mt-5">
        <img src="../MuhammetsComponents/img/images123.jpg" alt="" />
      </div>
    </div>
  </div>
</template>

<script>
import TheHeader from "../Header/TheHeader.vue";
export default {
  name: "App",
  components: {
    TheHeader,
  },
};
</script>
