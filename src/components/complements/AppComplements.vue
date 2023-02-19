<template>
    <div class="c-complements">
        <div class="c-complements__titulo">
            <h1>Pick add-ons</h1>
            <span>Add-ons help enhance your gaming experience.</span>
        </div>
        <AppComplement 
            @click="addComplement"
            :checked="checked"
        />
    </div>
</template>

<script>
import AppComplement from '../complement/AppComplement.vue'
export default {
    components:{AppComplement},
    data(){
        return{
            checked: false
        }
    },

    methods:{
        addComplement(){
            this.checked = !this.checked
        }
    }
}
</script>

<style src="./style.scss" lang="scss" scoped/>


