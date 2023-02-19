<template>
    <div class="c-formulario">
        <div class="c-formulario__corpo">
            <router-view />    
           
        </div>
        <div class="c-formulario__footer">
            <AppBtnBack  @click="back"/>
            <AppBtnNext @click="next"/>    
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
            currentStep: 1
        }
    },
  
    methods:{ 

        back(){
            this.currentStep--
            if(this.currentStep === 0) this.currentStep = 1
            this.$router.push(`/step${this.currentStep}`)
        },

        next(){
            this.currentStep++
            if(this.currentStep === 4) this.currentStep = 1
            this.$router.push(`/step${this.currentStep}`)
            this.$store.state.step1.gatilho = true 
           
        }
    },

}
</script>

<style src="./style.scss" lang="scss" scoped/>


