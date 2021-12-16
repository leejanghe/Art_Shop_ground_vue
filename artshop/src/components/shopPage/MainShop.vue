<template>
<div>
  <Hello />
  <ShopBody :artData="artData" />
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

</style>