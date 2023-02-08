<template>
    <div class="c-step1">
        <div class="c-step1__titulo">
            <h1>Personal Info</h1>
            <span>Please provide your name, email address, and phone number.</span>
        </div>
        <div class="c-step1__formulario">
            
            <div class="c-step1__formulario__titulo">
                <span>Name</span> 
                <span v-show="name_required" class="c-step1__formulario__titulo__required">This field is required</span>
            </div>
            <input v-model="this.$store.state.step1.name" type="text" placeholder="e.g Stephen King">


            <div class="c-step1__formulario__titulo">
                <span>Email Address</span> 
                <span v-show="email_required" class="c-step1__formulario__titulo__required">This field is required</span>
            </div>
            <input v-model="this.$store.state.step1.email" type="email" placeholder="e.g stephenking@lorem.com">


            <div class="c-step1__formulario__titulo">
                <span>Phone Number</span> 
                <span v-show="phone_required" class="c-step1__formulario__titulo__required">This field is required</span>
            </div>
            <input v-model="this.$store.state.step1.phone" type="text" placeholder="e.g + 1 234 567 890">

        </div>
    </div>
</template>

<script>
import { mapState } from 'vuex';

export default {
    data() {
        return {
          
        }
    },
    computed: mapState({
        
        name_required: state => state.step1.name === '' && state.step1.gatilho ? true : false,
        email_required: state => state.step1.email === '' && state.step1.gatilho ? true : false,
        phone_required: state => state.step1.phone === '' && state.step1.gatilho ? true : false,
            
    }),
    
  
}
</script>

<style src="./style.scss" lang="scss" scoped/>


