<template>
  <div class="banner">
    <div class="navbar">
      <img src="./images/7.png" alt="" class="logo" width="100" height="100" />
      <ul>
        <li><a href="#">Anasayfa</a></li>
        <li><a href="#">Profilim</a></li>
        <li><a href="#">Çizgifilmlerim</a></li>
        <li><a href="#">İzlediklerim</a></li>
        <li><a href="#">Favorilerim</a></li>
      </ul>
    </div>
    <div class="content">
      <h1>ÇİZGİ DİZİ TV</h1>
      <p>İzlediğin her yerde istediğin her yerde</p>
      <button type="button">YOUTUBE</button>
      <button type="button">INSTAGRAM</button>
    </div>
  </div>
</template>

<style scoped>
* {
  padding: 0;
  margin: 0;
  font-family: "Courier New", Courier, monospace;
}
.banner {
  height: 100vh;
  width: 100%;
  background-image: linear-gradient(
      rgba(205, 173, 16, 0.771),
      rgba(11, 182, 234, 0.448)
    ),
    url(./images/1.jpg);
  background-position: center;
  background-size: cover;
}
.navbar {
  display: flex;
  width: 90%;
  margin: auto;
  padding: 32px 0;
  align-items: center;
  justify-content: space-between;
}
.logo {
  cursor: pointer;
  border-radius: 50%;
}
.navbar ul li {
  list-style-type: none;
  display: inline-block;
  margin: 0 25px;
}
.navbar ul li a {
  text-decoration: none;
  color: rgba(232, 28, 184, 0.725);
  font-size: 20px;
}
.navbar ul li a:hover {
  box-shadow: 0 2px #54bab9;
  transition: 1s;
}
.content {
  width: 100%;
  position: absolute;
  top: 40%;
  color: black;
  text-align: center;
}
.content h1 {
  font-size: 65px;
}
.content p {
  margin: 20px auto;
}
button {
  width: 200px;
  padding: 15px 0;
  border-radius: 35px;
  margin: 20px;
  text-align: center;
  color: aliceblue;
  cursor: pointer;
  font-weight: 600;
  background-color: #ce97b0;
  font-size: 17px;
}
button:hover {
  color: #ffdba4;
  transition: 1s;
}
</style>
