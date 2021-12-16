<template>
  <div class="black-bg" v-if="isModal === true">
    <div class="white-bg">
        <img :src="artData[clickModal].image" style="width:50%">
        <hr />
        <h4>{{artData[clickModal].title}}</h4>
        <p>{{artData[clickModal].content}}</p>
        <p>{{artData[clickModal].price}} 원</p>
        <button @click="close">닫기</button>
    </div>
</div>
</template>

<script>
export default {
    name: 'Modal',
    props : {
        clickModal: Number,
        isModal: Boolean,
        artData: Array,
    },
    methods:{
        close(){
            this.$emit('closeModal', this.artData.id)
        }
    }
}
</script>

<style>

</style>