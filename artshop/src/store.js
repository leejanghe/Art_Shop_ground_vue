import {createStore} from 'vuex'
import {dairyData} from '../src/assets/data.js' 

const store = createStore({
    state(){
        return{
            name : 'kim',
            data : dairyData,
            liked : 35,
            isLike : false,
            color : '',
        }
     },
     mutations:{
        likeCard(state){
            if(state.isLike === false){
                state.liked++;
                state.isLike = true;
                state.color = 'red';
            }else{
                state.liked--;
                state.isLike = false;
                state.color = '';
            }
        },
     },
})

    export default store