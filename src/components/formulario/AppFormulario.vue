<template>
    <div class="c-formulario">
        <div class="c-formulario__corpo">
            <router-view />    
           
        </div>
        <div class="c-formulario__footer">
          <router-link :to="steps[count]"><AppBtnBack  @click="back"/></router-link>  
            <router-link :to="steps[count]"><AppBtnNext @click="next"/></router-link>
          
            
        </div>
    </div>
</template>

<script>
import AppBtnNext from '../btn/AppBtnNext.vue';
import AppBtnBack from '../btn/AppBtnBack.vue'

export default {
    components:{AppBtnNext, AppBtnBack},

    data(){
        return{
            count:0,
            steps:['/step1','/step2','/step3']
        }
    },

    methods:{ 

        back(){
            this.count--
        },

        next(){
            this.count++
            this.$store.state.step1.gatilho = true 
        }
    },

    computed:{
        step(){
            return ''
        }
    }
}
</script>

<style src="./style.scss" lang="scss" scoped/>


