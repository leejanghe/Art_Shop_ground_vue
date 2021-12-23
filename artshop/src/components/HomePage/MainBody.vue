<template>
  <!-- START THE FEATURETTES -->
  <div>
<div>
    <div class="row featurette">
      <div class="col-md-5">
        <h2 class="featurette-heading mt-5">정렬 기능<span class="text-muted"> (sort활용하기)</span></h2>
        <p class="lead">자바스크립트에 내장된 함수 sort를 활용해서 정렬 기능을 구현 하였습니다.</p>
      </div>
      <div class="col-md-7">
        <img src="https://user-images.githubusercontent.com/75570030/147210185-d27c14cd-7698-4f64-b56e-692eb97c147c.gif" width="700px">

      </div>
    </div>

    <hr class="featurette-divider">

    <div class="row featurette">
      <div class="col-md-5 order-md-3">
        <h2 class="featurette-heading mt-5" >더보기 기능 <span class="text-muted"> (ajax요청)</span></h2>
        <p class="lead">무료 목업 api사이트에서 더미 api서버를 만들었습니다. 그리고 axios get요청을 통해 더보기 기능을 만들었습니다. </p>
      </div>
      <div class="col-md-7 order-md-1">
        <img src="https://user-images.githubusercontent.com/75570030/147208488-263177c2-11ae-4313-9480-03a8a363a784.gif" width="700px">

      </div>
    </div>

    <hr class="featurette-divider">

    <!-- /END THE FEATURETTES -->
 <div class="row featurette">
      <div class="col-md-5">
        <h2 class="featurette-heading mt-5">상세 페이지 유효성<span class="text-muted"> (watcher)</span></h2>
        <p class="lead">v-model을 활용해서 값을 받아오는 연습을 하였고 watcher함수를 통해 간단한 유효성검사를 만들었습니다. 또한 sweetalert을 활용하여 이쁜 알림창도 만들었습니다.</p>
      </div>
      <div class="col-md-7">
        <img src="https://user-images.githubusercontent.com/75570030/147208139-b3ad0ecf-0ceb-40be-8e4a-04ccf821099d.gif" width="700px">

      </div>
    </div>

  </div><!-- /.container -->

 <hr class="featurette-divider">

 <div class="row featurette">
      <div class="col-md-5 order-md-3">
        <h2 class="featurette-heading mt-5" >이미지 업로드 및 글 발행 <span class="text-muted"> (createObjectURL)</span></h2>
        <p class="lead">html input태그 속성을 활용하였고 더불어 Url.createObjectURL을 활용하여 이미지 url받아와서 이미지를 추가 하는 기능을 만들었습니다.</p>
      </div>
      <div class="col-md-7 order-md-1">
        <img src="https://user-images.githubusercontent.com/75570030/147207927-a242efb5-2d27-4e4c-bdf1-ce4468804d44.gif">

      </div>
    </div>

<hr class="featurette-divider">

<div class="row featurette">
      <div class="col-md-5">
        <h2 class="featurette-heading mt-5">좋아요 기능<span class="text-muted"> (Vuex)</span></h2>
        <p class="lead">Vuex에서 store에 저장된 데이터를 mutations함수를 활용하여 좋아요 기능을 만들었습니다.</p>
      </div>
      <div class="col-md-7">
        <img src="https://user-images.githubusercontent.com/75570030/147207632-4dbe3f1a-28a0-4d2f-8fb5-3e2431fb3c30.gif">

      </div>
    </div>

<hr class="featurette-divider">

 </div>
</template>

<script >
export default {
    name : 'MainBody',
}
</script>

<style scoped>

.lead{
  padding: 50px;
}

</style>