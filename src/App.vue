<template>
  <nav>
    <router-link to="/" class="display-5">Home</router-link>
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
</style>
