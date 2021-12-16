<template>

<div>
<!-- <transition name="fade">
<Modal @closeModal="isModal = false" :clickModal="clickModal" :artData="artData" :isModal="isModal"/>
</transition> -->
<transition name="fade">
<Modal @closeModal="isModal = false" :clickModal="clickModal" :artData="artData" :isModal="isModal"/>
</transition>


  <Hello />
  <div class="background_shop">
      <!-- 수신 코드 @openModal -->
  <ShopBody @openModal="isModal =true; clickModal = $event" :artData="artData[i]" v-for="(a,i) in artData" :key="i" />
  </div>
</div>
</template>

<script>
import Hello from './Hello.vue'
import ShopBody from './ShopBody.vue'
import data from './../../assets/data.js'
import Modal from './Modal.vue'

console.log('11',data)

export default {
    name : 'MainShop',
    components : {
        Hello,
        ShopBody,
        Modal,
    },
    data() {
        return {
            artData : data,
            isModal : false,
            clickModal : 0,
        }
    },
}
</script>

<style>
.background_shop{
    display: flex;
    flex-wrap: wrap;
}


/* 모달 */
.black-bg {
  width: 100%;
  height: 100%;
  background: rgba(0,0,0,0.5);
  position: fixed; padding: 20px;
  z-index: 999;
  justify-content: center;
}

.white-bg{
    width: 40%;
  position: fixed;
top: 50%;
left: 50%;
-webkit-transform: translate(-50%, -50%);
-moz-transform: translate(-50%, -50%);
-ms-transform: translate(-50%, -50%);
-o-transform: translate(-50%, -50%);
transform: translate(-50%, -50%);
  background: white;
  border-radius: 8px;
  padding: 20px;
}

/* .modalImg{
  width:30%
} */

.start {
  opacity: 0;
  transition: all 1s;
}

.end {
  opacity: 1;
}

.fade-enter-from {
  opacity: 0;
  transform: translateY(-1000px);
}
.fade-enter-active {
  transition: all 1s;
}
.fade-enter-to {
  opacity: 1;
  transform: translateY(0px);
}

.fade-leave-from {
  opacity: 1;
}
.fade-leave-active {
  transition: all 1s;
}
.fade-leave-to {
  opacity: 0;
}


</style>