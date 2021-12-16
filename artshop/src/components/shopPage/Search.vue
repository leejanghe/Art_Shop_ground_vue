<template>
  <form class="d-flex">
        <input @input="search($event.target.value)" class="form-control me-10" type="search" placeholder="Search" aria-label="Search">
        <button class="btn btn-outline-danger" type="submit">Search</button>
      </form>
</template>

<script>
export default {
  name: 'Search',
}
</script>

<style>

.d-flex{
     display: block;
    background-position: center;
    justify-content: center;
}

.form-control{
    width: 30%;
    padding: 10px;
    margin:0;
}

</style>