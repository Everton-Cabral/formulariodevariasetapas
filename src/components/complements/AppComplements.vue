<template>
    <div class="c-complements">
        <div class="c-complements__titulo">
            <h1>Pick add-ons</h1>

            <span>Add-ons help enhance your gaming experience.</span>
        </div>

        <AppComplement 
            @click="addComplement('onlineService')"
            :checked="checked.onlineService"
            title="Online Service"
            subTitle="Access to multiplayer games"
            mo="+$1/mo"
            yr="+$10/yr"
        />

        <AppComplement 
            @click="addComplement('largerStorage')"
            :checked="checked.largerStorage"
            title="Larger storage"
            subTitle="Extra 1TB of cloud save"
            mo="+$2/mo"
            yr="+$20/yr"
        />

        <AppComplement 
            @click="addComplement('CustomProfile')"
            :checked="checked.CustomProfile"
            title="Customizable profile"
            subTitle="Custom theme on your profile"
            mo="+$2/mo"
            yr="+$20/yr"
        />
    </div>
</template>

<script>
import AppComplement from '../complement/AppComplement.vue'
export default {
    components:{AppComplement},
    data(){
        return{
            checked:{
                onlineService:false,
                largerStorage:false,
                CustomProfile:false
            }
        }
    },

    methods:{
        addComplement(params){
            this.checked[params] = !this.checked[params]
        }
    }
}
</script>

<style src="./style.scss" lang="scss" scoped/>


