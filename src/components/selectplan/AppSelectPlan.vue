<template>
    <div class="c-step2">
        <AppTitle 
            title="Select your plan"
            subTitle="You have the option of monthly or yearly billing"
        />

        <div class="c-step2__plans">
            <div v-for="plain in plains" :key="plain.title">
                <AppPlain 
                    :title="plain.title"
                    :mo="plain.mo"
                    :yr="plain.yr"
                    :free="plain.free"  
                    @click="selected(plain.title, plain.mo, plain.yr)"  
                >
                <template v-slot:imagem>
                    <img :src="require(`../../assets/img/${plain.img}`)" :alt="plain.title">
                </template>

            </AppPlain>
                
            </div> 
        </div>

        <div class="c-step2__payment">
            <span :style="!this.$store.state.paymentYearly ? stylePayment : ''">
                Monthly
            </span>

            <Toggle v-model="this.$store.state.paymentYearly" class="c-step2__payment__toggle" />

            <span :style=" this.$store.state.paymentYearly ? stylePayment : ''">
                Yearly
            </span>
            
        </div>
    </div>
</template>

<script>

import AppPlain from '../plain/AppPlain.vue'
import Toggle from '@vueform/toggle'
import AppTitle from '../title/AppTitile.vue'
import { mapMutations } from 'vuex'

export default {
    components: { Toggle, AppPlain, AppTitle },

    data() {
      return {
        plains:{
            plain1:{
                title:"Arcade",
                mo:9,
                yr:90,
                free:"2 months free",
                img:"icon-arcade.svg"
            },
            plain2:{
                title:"Advanced",
                mo:12,
                yr:120,
                free:"2 months free",
                img:"icon-advanced.svg"
            },
            plain3:{
                title:"Pro",
                mo:15,
                yr:150,
                free:"2 months free",
                img:"icon-pro.svg"
            }
        },
        stylePayment: 'color: hsl(213, 96%, 18%);  font-weight: bold;'

      }
    },
    methods:{
        ...mapMutations([
            'selectedPlan'
        ]),
        selected(title,mo,yr){
           let params = {
            title,
            mo,
            yr
           }
           
           this.selectedPlan(params)
        }
    } 
}
</script>

<style src="./style.scss" lang="scss" scoped/>


