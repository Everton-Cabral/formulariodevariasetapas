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
       
        step1_required(){
           this.$store.state.step1.name === '' ? this.$store.state.step1.name_required = true : this.$store.state.step1.name_required = false
           this.$store.state.step1.email === '' ? this.$store.state.step1.email_required = true : this.$store.state.step1.email_required = false
           this.$store.state.step1.phone === '' ? this.$store.state.step1.phone_required = true : this.$store.state.step1.phone_required = false
        },

        next(){
            this.step1_required()  
        }
    }
}
</script>

<style src="./style.scss" lang="scss" scoped/>


