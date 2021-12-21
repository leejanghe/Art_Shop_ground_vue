<template>
    <div class="project">
          <img className="project__img" :src="artData.image"/>
            <div class="project__description">
                <h3 @click="send" class="imgtext">{{artData.title}}</h3>
                <h5 class="imgtext">{{artData.price}} 원</h5>
            </div>
    </div>
</template>

<script>
export default {
    name: "ShopBody",
    props: {
        artData: Object,
    },
    // 부모에게 보낼때 emit쓰기 프롭스는 read only여서 변경 x
     methods:{
        send(){
            this.$emit('openModal', this.artData.id)
        }
    }
}
</script>

<style>

.project{
    position: relative;
    width: 460px;
    height: 500px;
    /* background-color: red; */
    margin:  8px;
    
    text-align: center;
    color: #fff;
    display: flex;
    justify-content: center;
    align-items: center;
}

.project__img{
    width: 100%;
    height: 100%;
    background-position: center;
    background-size: 100px;
    background-repeat: no-repeat;
    border-radius: 15px;
    /* object-fit:cover; */
}

.project__description{
 position: absolute;
 background-color: rgb(0, 0, 0, 0);
 display: flex;
 flex-direction: column;
 justify-content: center;
 width: 100%;
 height: 100%;
 top:0;
 left: 0;
 /* opacity: 0; */
 transition: all ease .9s;
 cursor: pointer;
 border-radius: 15px;
}

.imgtext{
    /* z-index: 1; */
    opacity: 0;
    transition: all ease .9s;
}

.project:hover .project__description {
    /* opacity: .5; */
    background-color: rgba( 0, 0, 0, 0.5 );
}


.project:hover .imgtext{
    opacity: 1;
}

</style>