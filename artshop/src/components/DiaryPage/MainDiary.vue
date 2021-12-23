<template>

<div class="mainDiary">

    <div class="intro" v-if="page === true" >
        <h1 class="intro_text">좋아하는 작품을 다이어리에 기록해요!</h1>
        <button class="px-3 btn btn-danger" style="font-size: 1.5rem" @click="page = false">닫기</button>
    </div>

   <div class="header">
    <ul class="header-button-left">
      <li @click="step = 0">Cancel</li>
    </ul>
    <ul class="header-button-right">
      <!-- <li v-if="step ===1" @click="step++">Next</li> -->
      <li v-if="step ===1" @click="publish">발행</li>
    </ul>
    <div class="logo">Art Diary</div>
   </div>


<DiaryBody @write="myWrite = $event" :diary="diary" :step="step" :uploadImg="uploadImg"/>


 <div class="footer">
    <ul class="footer-button-plus">
      <input @change="upload" accept="image/*" type="file" id="file" class="inputfile" />
      <label for="file" class="input-plus">+</label>
    </ul>
 </div>
</div>

</template>

<script>

import DiaryBody from './DiaryBody.vue'
import {dairyData} from '../../assets/data.js'

console.log('da',dairyData)

export default {
    name: 'MainDiary',
    data() {
        return {
            page : true,
            diary : [...dairyData],
            step : 0,
            uploadImg :'',
            myWrite:'',
        }
    },
    components : {
        DiaryBody,
    },
    methods: {
        upload(e){
        let img = e.target.files;
        console.log('1',img[0])
        let url = URL.createObjectURL(img[0]);
        console.log(url);
        this.uploadImg = url;
        this.step++
        },

        publish(){
        let myPost = {
        name: "JoyCoding",
        userImage: "https://placeimg.com/100/100/people",
        postImage: this.uploadImg,
        likes: 36,
        date: new Date().toISOString().substr(0, 10),
        liked: false,
        content: this.myWrite,
      };
        this.diary.unshift(myPost);
        this.step = 0;
        }
    },
}
</script>

<style scoped>


ul {
  /* padding: 5px; */
  list-style-type: none;
  color: #fff;
}

.logo {
  width: 100px;
  margin: auto;
  color: #fff;
  display: block;
  position: absolute;
  left: 0;
  right: 0;
  top: 8px;
} 

.intro {
    background: rgb(116, 5, 62);
    height: 670px;
    color: #fff;
}

.intro_text {
    margin-top : auto;
    padding: 250px 0px 30px 0px;
}


.header {
  width: 100%;
  height: 40px;
  background-color: rgb(5, 61, 82);
  padding-bottom: 8px;
  position: sticky;
  top: 56px;
}
.header-button-left {
  color: #fff;
  float: left;
  width: 50px;
  padding-left: 20px;
  cursor: pointer;
  margin-top: 10px;
  z-index: 2;
}
.header-button-right {
  color: #fff;
  float: right;
  width: 80px;
  cursor: pointer;
  margin-top: 10px;
}

.header-button-left:hover {
  color: rgb(241, 255, 83);
  font-weight: 700;
}


.header-button-right:hover {
    color: rgb(241, 255, 83);
  font-weight: 700;
}


.footer {
  width: 100%;
  position: sticky;
  bottom: 0;
  padding-bottom: 10px;
  background-color: white;
}
.footer-button-plus {
  width: 80px;
  margin: auto;
  text-align: center;
  cursor: pointer;
  font-size: 24px;
  padding-top: 12px;
}
.sample-box {
  width: 100%;
  height: 600px;
  background-color: bisque;
}
.inputfile {
  display: none;
}
.input-plus {
  cursor: pointer;
  color: black;
}
.mainDiary{
  box-sizing: border-box;
  font-family: "consolas";
  margin-top: 60px;
  width: 100%;
  max-width: 670px;
  margin: auto;
  position: relative;
  border-right: 1px solid #eee;
  border-left: 1px solid #eee;
}
</style>