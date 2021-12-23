<template>
  <div>
      <div v-if="step === 0">
      <DiaryCard 
      :diary="diary[i]" v-for="(a,i) in diary" :key="i" />
      </div>
      <div v-if="step === 1">
   <div class="upload-image" :style="`background-image:url(${uploadImg})`"></div>
    <div class="write">
        <textarea @input="$emit('write',$event.target.value)" class="write-box">write!</textarea>
    </div>
</div>
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
        step : Number,
        uploadImg : String,
    },
}
</script>

<style>
.upload-image{
width: 100%;
height: 500px;
background: cornflowerblue;
background-size : cover;
}

.write-box {
border: none;
width: 90%;
height: 100px;
padding: 15px;
margin: auto;
display: block;
outline: none;
}
</style>