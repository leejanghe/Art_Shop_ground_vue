<template>
  <div class="discount">
  <div>Enjoy Art!</div>
  <Search />
</div>
</template>

<script>
import Search from './Search.vue'
export default {
  components: { Search },
    name : 'Hello'
}
</script>

<style>
.discount{
background-image: url("https://rhythmartgallery.com/wp-content/uploads/2021/10/Jagannath-Paul-Artist-Rhythm-Art-Gallery-Mumbai.jpg");
background-repeat: no-repeat;
background-size : cover;
max-width: 100%;
height:27rem;
text-align: center;
color: rgb(240, 144, 0);

  /* border-radius: 15px; */
  /* margin-top: 5; */
  /* margin-bottom: 0.3rem; */
  font-weight: 500;
  line-height: 5;
  font-size: 4rem;
}
</style>