<template>
  <div>
      <DiaryCard :diary="diary[i]" v-for="(a,i) in diary" :key="i"/>
      <!-- <div>{{diary}}</div> -->
  </div>
</template>

<script>

import DiaryCard from './DiaryCard.vue'

export default {
    name : 'DirayCard',
    components : {
        DiaryCard,
    },
    props: {
        diary : Object,
    },
}
</script>

<style>

</style>