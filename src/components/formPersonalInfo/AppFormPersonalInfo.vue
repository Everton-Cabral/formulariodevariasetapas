<template>
    <div class="c-step1">
        <AppTitle 
            title="Personal Info"
            subTitle="Please provide your name, email address, and phone number."
        />
        <div class="c-step1__formulario">
            
            <div class="c-step1__formulario__titulo">
                <span>Name</span> 
                <span v-show="name_required" class="c-step1__formulario__titulo__required">This field is required</span>
            </div>
            <input v-model="this.$store.state.step1.name" :style="name_required ? 'border-color: red;' : ''" type="text" placeholder="e.g Stephen King">
            

            <div class="c-step1__formulario__titulo">
                <span>Email Address</span> 
                <span v-show="email_required" class="c-step1__formulario__titulo__required">This field is required</span>
            </div>
            <input v-model="this.$store.state.step1.email" :style="email_required ? 'border-color: red;' : ''" type="email" placeholder="e.g stephenking@lorem.com">


            <div class="c-step1__formulario__titulo">
                <span>Phone Number</span> 
                <span v-show="phone_required" class="c-step1__formulario__titulo__required">This field is required</span>
            </div>
            <input v-model="this.$store.state.step1.phone" :style="phone_required ? 'border-color: red;' : ''" type="number" placeholder="e.g + 1 234 567 890">
        </div>
    </div>
</template>

<script>
import AppTitle from '../title/AppTitile.vue'
import { mapState } from 'vuex';

export default {
    components:{ AppTitle },
    computed:{
        ...mapState({
            name: state => state.step1.name,
            email: state => state.step1.email,
            phone: state => state.step1.phone,
            gatilho: state => state.step1.gatilho
        }),
        
    name_required(){
        return  this.name === '' && this.gatilho
    },
    email_required(){
        const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/
        return  !emailRegex.test(this.email)  && this.gatilho 
    },
    phone_required(){
        return  this.phone === '' && this.gatilho 
    },

    },
    methods:{
      
    }
  
}
</script>

<style src="./style.scss" lang="scss" scoped/>

