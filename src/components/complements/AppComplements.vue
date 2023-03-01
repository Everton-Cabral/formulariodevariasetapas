<template>
    <div class="c-complements">
        <div class="c-complements__titulo">
            <h1>Pick add-ons</h1>

            <span>Add-ons help enhance your gaming experience.</span>
        </div>

        <div v-for="complement in this.$store.state.addOns" :key="complement.title">
            <AppComplement 
            @click="addComplement(complement)"
            :complement="complement"
            />
        </div>
    </div>
</template>

<script>
import AppComplement from '../complement/AppComplement.vue'
import { mapMutations } from 'vuex'
export default {
    components:{AppComplement},
    data(){
        return{
            
        }
    },

    methods:{
        ...mapMutations([
            'selectedComplements'
        ]),
        addComplement(params){
            params.checked = !params.checked
            this.selectedComplements(params)
        }
    }
}
</script>

<style src="./style.scss" lang="scss" scoped/>


