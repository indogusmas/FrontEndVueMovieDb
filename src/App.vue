<template>
  <div id="app">
    <nav class="navbar navbar-expand-lg navbar-light bg-light">
      <div class="collapse navbar-collapse" id="navbarSupportedContent">
        <ul class="nav navbar-nav mx-auto">
          <li class="nav-item">
            <router-link class="navbar-brand" to="/">Popular</router-link>
            <router-link class="navbar-brand" to="/about">About</router-link>
          </li>
        </ul>
      </div>
    </nav>
    <br>
    <div class="container">
      <router-view />
    </div>
  </div>
</template>



<script>
import "bootstrap/dist/css/bootstrap.css";
export default {};
</script>
<style scoped>
.navbar-brand {
  color: #000 !important; 
}
.navbar-brand:hover, .navbar-brand:focus {
color: #42b983 !important;
}
</style>