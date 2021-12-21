<template>
  <div class="post">
    <div class="post-header">
      <div class="profile" :style="{ backgroundImage : `url(${diary.userImage})`}"></div>
      <span class="profile-name">{{diary.name}}</span>
    </div>
    <div class="post-body" :style="{ backgroundImage : `url(${diary.postImage})`}"></div>
    <div class="post-content">
      <p>{{diary.likes}} Likes</p>
      <p><strong>{{diary.name}}</strong> {{diary.content}}</p>
      <p class="date">{{diary.date}}</p>
      <hr />
    </div>
</div>
</template>

<script>
export default {
    name : 'DiaryCard',
    props : {
        diary : Object,
    },
}
</script>

<style scoped>

.post {
  width: 100%;
  /* margin: auto; */
  text-align: left;
}
.profile {
  background-image: url("https://placeimg.com/640/480/animals");
  width: 40px;
  height: 40px;
  background-size: 100%;
  border-radius: 50%;
  float: left;
}
.profile-name {
  display: block;
  float: left;
  padding-left: 10px;
  padding-top: 7px;
  font-size: 14px;
}
.post-header {
  height: 70px;
  padding: 20px;
}
.post-body {
 /* background-image: url("https://bramptonist.com/wp-content/uploads/2018/10/art-paint-painting.jpeg"); */
 /* background-image: url("https://www.crescenthill.com/wp-content/uploads/2021/07/Banner-Image-188435-e1626372383514.jpg");
     background-image: url("https://www.pictureframesexpress.co.uk/blog/wp-content/uploads/2020/05/7-Tips-to-Finding-Art-Inspiration-Header-1024x649.jpg");
         background-image: url("https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSQdlKqr6Jxh8DOE0o1sTrgELhbmjGboVtDaw&usqp=CAU"); */
  height: 500px;
  width: 100%;
  background-position: center;
  background-size: cover;
  margin: auto;
  scale: 0.5;
}

.post-content {
  padding-left: 15px;
  padding-right: 15px;
  font-size: 14px;
  padding-top: 10px;
}
.date {
  font-size: 11px;
  color: grey;
  margin-top: -8px;
}

</style>