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
.header {
  position: fixed;
  top: 0;
  z-index: 99;
  width: 100%;
  height: 12%;
  background-color: #df7861;
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
  padding: 1rem;
}

a {
  color: #222831;
  text-decoration: none;
  font-size: 1.2rem;
  font-family: sans-serif;
  letter-spacing: 2px;
  transition: 1ms;
}

a:hover {
  color: black;
}
</style>
