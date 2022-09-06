<template>
  <div class="header">
    <div class="container">
      <h1>Innovance Interns</h1>
      <nav>
        <ul>
          <li><router-link to="/">Home</router-link></li>
          <li><router-link to="/akinaykut">Aykut</router-link></li>

          <li><router-link to="/simsekmu">Muhammet</router-link></li>

          <li><router-link to="/ahmets">Ahmet</router-link></li>

          <li><a href="">Portfolio</a></li>
          <li><a href="">Contact</a></li>
        </ul>
      </nav>
    </div>
  </div>
</template>

<style scoped>
@import url("https://fonts.googleapis.com/css2?family=Lobster&display=swap");
.header {
  position: fixed;
  top: 0;
  z-index: 99;
  width: 100%;
  height: 8%;
  background: rgb(229, 228, 240);
  background: linear-gradient(
    90deg,
    rgb(178, 6, 221) 0%,
    rgb(111, 7, 172) 35%,
    rgb(61, 3, 109) 100%
  );
}
.container {
  width: 80%;
  height: 100%;
  margin: 0 auto;
  display: flex;
  justify-content: space-between;
  align-items: center;
}

ul {
  display: flex;
  justify-content: center;
  align-items: center;
  height: 100%;
}
li {
  list-style-type: none;
  padding: 2rem;
}

a {
  color: #e6ebf3;
  text-decoration: none;
  font-size: 1.3rem;
  font-family: sans-serif;
  letter-spacing: 2px;
  transition: 1ms;
}
h1 {
  color: #e6ebf3;
}

a:hover {
  font-family: "Lobster", sans-serif;
  cursor: pointer;
  text-decoration: wavy;
  color: #e6ebf3;
  border-radius: 8px;
  background: linear-gradient(
    90deg,
    rgb(61, 3, 109) 0%,
    rgb(111, 7, 172) 35%,
    rgb(178, 6, 221) 90%
  );
}
</style>
