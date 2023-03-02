<template>
    <div class="c-formulario">
        <div class="c-formulario__corpo">
            <router-view />    
           
        </div>
        <div class="c-formulario__footer" v-show="this.$store.state.currentStep != 5">
            <AppBtnBack  @click="back"/>
            <AppBtnNext  @click="next"/>    
        </div>
    </div>
</template>

<script>
import AppBtnNext from '../btn/AppBtnNext.vue';
import AppBtnBack from '../btn/AppBtnBack.vue';
import { mapMutations } from 'vuex';

export default {
    components:{AppBtnNext, AppBtnBack},
    
   
  
    methods:{ 
        ...mapMutations([
            'backStep',
            'nextStep'
        ]),

        back(){
           this.backStep()
            this.$router.push(`/step${this.$store.state.currentStep}`)
        },
        
        next(){
            this.$store.state.step1.gatilho = true     
            this.nextStep()
            this.$router.push(`/step${this.$store.state.currentStep}`)
        }
    },

}
</script>

<style src="./style.scss" lang="scss" scoped/>


