<template>
  <body>
    <div class="top-container">
      <img class="top-cloud" src="./images/cloud.svg" alt="cloud-img" />
      <h1>I'm Akın.</h1>
      <h2>a <span class="pro">pro</span>grammer.</h2>
      <img class="bottom-cloud" src="./images/cloud.svg" alt="cloud-img" />
      <img class="land-image" src="./images/land.svg" alt="land-img" />
    </div>

    <div class="middle-container">
      <div class="profile">
        <img src="./images/angela.png" alt="angela_yu-img" />
        <h2>Hello.</h2>
        <p>
          Lorem ipsum dolor sit amet, vitae volutpat, dui conubia, dolor urna.
          Non auctor, montes nulla distinctio.
        </p>
      </div>
      <div class="three-dot"><hr /></div>
      <div class="skills">
        <h2>My Skills.</h2>
        <div class="skill-row">
          <img
            class="computer-img"
            src="./images/computer.png"
            alt="computer-img"
          />
          <h3>Lorem & Ipsum</h3>
          <p>
            Lorem ipsum dolor sit amet, quis in duis, iaculis id felis.
            Consectetuer vestibulum, nunc urna lectus, erat ligula. Hendrerit
            nam, lectus ante, ut lorem eros.
          </p>
        </div>
        <div class="skill-row">
          <img
            class="chillies-img"
            src="./images/chillies.png"
            alt="chillies-img"
          />
          <h3>Lorem Ipsum Dolor</h3>
          <p>
            Lorem ipsum dolor sit amet, mauris sed consectetuer. Etiam et eu,
            bibendum interdum, lacus quis mauris. Curabitur wisi, quisque vel
            eu, rutrum nam.
          </p>
        </div>
      </div>
      <div class="three-dot"><hr /></div>
      <div class="contact-me">
        <h2 class="get-in-touch">Get In Touch</h2>
        <h3>Lorem ipsum dolor sit amet, non elit.</h3>
        <p>
          Lorem ipsum dolor sit amet, in quis, aenean amet. Phasellus sodales,
          tellus donec dui, ornare erat.
        </p>
        <a class="btn" href="mailto:name@email.com">Contact Me</a>
      </div>
    </div>
  </body>
</template>

<style scoped>
@import url("https://fonts.googleapis.com");
@import url("https://fonts.gstatic.com");
@import url("https://fonts.googleapis.com/css2?family=Merriweather&family=Montserrat&family=Sacramento&display=swap");

body {
  margin: 0;
  text-align: center;
  font-family: "Merriweather", serif;
  background-color: white;
}

h1 {
  font-family: "Sacramento", cursive;
  font-size: 6.5rem;
  margin: 50px auto 0 auto;
  text-align: center;
  color: #66bfbf;
}

h2 {
  font-family: "Montserrat", sans-serif;
  font-size: 2.5rem;
  font-weight: normal;
  color: #66bfbf;
}
h3 {
  font-family: "Montserrat", sans-serif;
  color: #11999e;
}

a {
  color: #11999e;
}

hr {
  margin-top: 40px;
  margin-bottom: 35px;
  width: 6%;
  border-style: dotted;
  border-bottom: none;
  border-left: none;
  border-right: none;
  border-width: 10px;
  color: #808080;
}

.top-container {
  background-color: #e4f9f5;
  position: relative;
  padding-top: 100px;
  height: 800px;
}

.subtitle {
  font-size: 40px;
}
.pro {
  text-decoration: underline;
}

.land-image {
  position: absolute;
  bottom: 0;
  width: 50%;
  right: 25%;
}

.bottom-cloud {
  position: absolute;
  top: 300px;
  left: 20%;
}
.top-cloud {
  position: absolute;
  top: 114px;
  right: 20%;
}

.skill-row {
  width: 50%;
  margin: 100px auto;
  text-align: left;
  line-height: 2;
}
.profile {
  margin-top: 80px;
}
.computer-img {
  width: 25%;
  border-radius: 50%;
  float: left;
  margin-right: 30px;
}
.chillies-img {
  width: 25%;
  float: right;
  margin-left: 30px;
}

.three-dot {
  display: flex;
  justify-content: center;
  align-items: center;
}

.middle-container {
}
.get-in-touch {
  margin-top: 60px;
  margin-bottom: 45px;
}
.btn {
  display: inline-block;
  margin: 50px auto;
  font-size: 1.4em;
  background: #3498db;
  background-image: -webkit-linear-gradient(top, #3498db, #2980b9);
  background-image: -moz-linear-gradient(top, #3498db, #2980b9);
  background-image: -ms-linear-gradient(top, #3498db, #2980b9);
  background-image: -o-linear-gradient(top, #3498db, #2980b9);
  background-image: linear-gradient(to bottom, #3498db, #2980b9);
  -webkit-border-radius: 8;
  -moz-border-radius: 8;
  border-radius: 8px;
  color: #ffffff;
  padding: 10px 20px 10px 20px;
  text-decoration: none;
}

.btn:hover {
  background: #11999e;
  background-image: -webkit-linear-gradient(top, #11999e, #11cdd4);
  background-image: -moz-linear-gradient(top, #11999e, #11cdd4);
  background-image: -ms-linear-gradient(top, #11999e, #11cdd4);
  background-image: -o-linear-gradient(top, #11999e, #11cdd4);
  background-image: linear-gradient(to bottom, #11999e, #11cdd4);
  text-decoration: none;
}

.bottom-container {
  height: 150px;
  background-color: #66bfbf;
}
</style>
