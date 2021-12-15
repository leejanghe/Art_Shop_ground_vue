<template>
  <nav class="navbar navbar-expand-lg navbar navbar-dark bg-dark">
  <div class="container-fluid">
    <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarTogglerDemo01" aria-controls="navbarTogglerDemo01" aria-expanded="false" aria-label="Toggle navigation">
      <span class="navbar-toggler-icon"></span>
    </button>
    <div class="collapse navbar-collapse" id="navbarTogglerDemo01">
      <router-link to="/"><a class="navbar-brand" href="#">Art Shop Ground</a></router-link>
      <ul class="navbar-nav me-auto mb-2 mb-lg-0">
        <li class="nav-item">
         <router-link to="/"><a class="nav-link active" aria-current="page" href="#">Home</a></router-link>
        </li>
        <li class="nav-item">
          <router-link to="/shop"><a class="nav-link active" href="#">Shop</a></router-link>
        </li>
        <li class="nav-item">
          <router-link to="/like"><a class="nav-link active">Likes</a></router-link>
        </li>
      </ul>
      <!-- <form class="d-flex">
        <input class="form-control me-2" type="search" placeholder="Search" aria-label="Search">
        <button class="btn btn-outline-success" type="submit">Search</button>
      </form> -->
    </div>
  </div>
</nav>
</template>

<script>
export default {
        name: 'Header',
}
</script>



<style scoped>

a{
  text-decoration-line: none;
}

</style>