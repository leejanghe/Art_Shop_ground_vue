<template>
<div>
<Jumbotron />
<MainBody />
<Footer />
</div>
</template>

<script>
import Jumbotron from './Jumbotron.vue'
import MainBody from './MainBody.vue'
import Footer from './Footer.vue'

export default {
    name : 'LandingHome',
    components :{
        Jumbotron,
        MainBody,
        Footer
    }
}
</script>

<style>

</style>