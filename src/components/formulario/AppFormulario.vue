<template>
    <div class="c-formulario">
        <div class="c-formulario__corpo">
            <AppFormPersonalInfo />
        </div>
        <div class="c-formulario__footer">
            <AppBtnBack />
            <AppBtnNext @click="next"/>
        </div>
    </div>
</template>

<script>
import AppBtnNext from '../btn/AppBtnNext.vue';
import AppBtnBack from '../btn/AppBtnBack.vue'
import AppFormPersonalInfo from '../formPersonalInfo/AppFormPersonalInfo.vue'
export default {
    components:{AppBtnNext, AppBtnBack, AppFormPersonalInfo},

    methods:{ 

        next(){
            this.$store.state.step1.gatilho = true 
        }
    }
}
</script>

<style src="./style.scss" lang="scss" scoped/>


