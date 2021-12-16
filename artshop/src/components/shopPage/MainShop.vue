<template>
<div>
  <Hello />
  <div class="background_shop">
  <ShopBody :artData="artData[i]" v-for="(a,i) in artData" :key="i" />
  </div>
</div>
</template>

<script>
import Hello from './Hello.vue'
import ShopBody from './ShopBody.vue'
import data from './../../assets/data.js'

console.log('11',data)

export default {
    name : 'MainShop',
    components : {
        Hello,
        ShopBody,
    },
    data() {
        return {
            artData : data,
        }
    },
}
</script>

<style>
.background_shop{
    display: flex;
    flex-wrap: wrap;
}

</style>