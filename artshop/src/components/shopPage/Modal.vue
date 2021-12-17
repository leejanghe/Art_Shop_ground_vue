<template>
  <div class="black-bg" v-if="isModal === true">
    <div class="white-bg">
        <img :src="artData[clickModal].image" style="width:50%">
        <hr />
        <h4>{{artData[clickModal].title}}</h4>
        <p>{{artData[clickModal].content}}</p>
        <input v-model.number="quantity">
        <p> {{artData[clickModal].price * quantity}} 원</p>
        <button class="btn btn-danger" @click="close">닫기</button>
    </div>
</div>
</template>

<script>
export default {
    name: 'Modal',
    data(){
        return {
             quantity : 1,
        }
    },
    props : {
        clickModal: Number,
        isModal: Boolean,
        artData: Array,
    },
    methods:{
        close(){
            this.$emit('closeModal', this.artData.id)
        }
    },
    watch :{
        quantity(a){
           if(isNaN(a) === true){
            //   alert('글자 입력은 안됩니다.')
            this.$swal('글자 입력은 안됩니다.','숫자만써주세요^^','error');
              this.quantity = 1; 
           } else if(a > 3){
            //    alert('3이하만 구입 가능합니다')
            this.$swal('3이하만 가능합니다','죄송합니다ㅠ','error');
               this.quantity =1;
           }
        }
    },
}
</script>

<style>

</style>