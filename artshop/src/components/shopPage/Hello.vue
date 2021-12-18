<template>
  <div class="main_shop_bg">
  <div>Enjoy Art!</div>
  <!-- <Search :artData="artData"/> -->
  <h2>go look around</h2>
</div>
</template>

<script>
// import Search from './Search.vue'
export default {
//   components: { Search },
    name : 'Hello',
    props : {
        artData : Array,
    },
}
</script>

<style>
.main_shop_bg{
background-image: url("https://rhythmartgallery.com/wp-content/uploads/2021/10/Jagannath-Paul-Artist-Rhythm-Art-Gallery-Mumbai.jpg");
background-repeat: no-repeat;
background-size : cover;
max-width: 100%;
height:25rem;
text-align: center;
text-shadow: 2px 2px 2px rgb(39, 37, 37);
color: rgb(249, 245, 242);

  /* border-radius: 15px; */
  /* margin-top: 5; */
  /* margin-bottom: 0.3rem; */
  font-weight: 500;
  line-height: 4;
  font-size: 4rem;
}
</style>