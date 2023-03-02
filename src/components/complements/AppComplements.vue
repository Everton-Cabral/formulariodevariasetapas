<template>
    <div class="c-complements">
        <AppTitle 
            title="Pick add-ons"
            subTitle="Add-ons help enhance your gaming experience."
        />

        <div v-for="complement in this.$store.state.addOns" :key="complement.title">
            <AppComplement 
            @click="addComplement(complement)"
            :complement="complement"
            />
        </div>
    </div>
</template>

<script>
import AppTitle from '../title/AppTitile.vue'
import AppComplement from '../complement/AppComplement.vue'
import { mapMutations } from 'vuex'
export default {
    components:{AppComplement, AppTitle},
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


