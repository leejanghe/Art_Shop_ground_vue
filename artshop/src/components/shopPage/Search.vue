<template>

<div>
  <form class="d-flex">
        <input @input="onSearch = $event.target.value" class="form-control me-10" type="search" placeholder="Search" aria-label="Search">
        <button class="btn btn-outline-danger" type="button" @click="search">Search</button>
  </form>
</div>
</template>

<script>


export default {
  name: 'Search',
  props : {
    artData : Array,
  },
  data() {
    return {
      onSearch: '',
    }
  },
  methods :{
    search(){
      // console.log('111',this.artData)
      this.emitter.emit('작명',this.onSearch)
     }
    },
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