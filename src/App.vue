<template>
  <nav>
    <img src="../src/assets/Vivo_Energy-Logo.wine.png" alt="logo" class="logo">
    <div class="home-link">
      <router-link to="/">Home</router-link>
    </div>
  </nav>
  <router-view/>
</template>

<style>
@import url('https://fonts.googleapis.com/css2?family=EB+Garamond:wght@700&family=Raleway:wght@600&display=swap');
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #000;
  background-color: #ffffff;
}

nav {
  padding: 30px;
  font-size: 25px;
  display: flex; 
  align-items: center;
  justify-content: space-between;
}

nav a {
  font-weight: bold;
  color: black;
  text-decoration: none;
  font-family: 'Raleway', sans-serif;
}

nav a.router-link-exact-active {
  color: #000;
}

nav a:hover {
  background-color: #000;
  border-radius: 20px;
  color: #fff;
}

.logo {
  width: 150px; 
  height: auto; 
  display: inline-block; 
}

.home-link {
  margin-right: 20px;
}
</style>
