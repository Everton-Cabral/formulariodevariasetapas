<template>
    <div class="c-step2">
        <div class="c-step2__titulo">
            <h1>Select your plan</h1>
            <span>You have the option of monthly or yearly billing</span>
        </div>

        <div class="c-step2__plans">


            <AppPlain 
                titulo="Arcade"
                mo="$9/mo"
                yr="$90/yr"
                free="2 months free"
            >

                <template v-slot:imagem>
                    <img src="../../assets/img/icon-arcade.svg" alt="arcade">
                </template>
            </AppPlain>

            <AppPlain 
                titulo="Advanced"
                mo="$12/mo"
                yr="$120/yr"
                free="2 months free"
            >

                <template v-slot:imagem>
                    <img src="../../assets/img/icon-advanced.svg" alt="advanced">
                </template>
            </AppPlain>

            <AppPlain 
                titulo="Advanced"
                mo="$15/mo"
                yr="$150/yr"
                free="2 months free"
            >

                <template v-slot:imagem>
                    <img src="../../assets/img/icon-pro.svg" alt="advanced">
                </template>
            </AppPlain>
            


        </div>

        <div class="c-step2__payment">
            <span :style="!this.$store.state.paymentYearly ? stylePayment : ''">Monthly</span>
            <Toggle v-model="this.$store.state.paymentYearly" class="c-step2__payment__toggle" />
            <span :style=" this.$store.state.paymentYearly ? stylePayment : ''">Yearly</span>
            
        </div>
    </div>
</template>

<script>

import AppPlain from '../plain/AppPlain.vue'
import Toggle from '@vueform/toggle'

export default {
    data() {
      return {
        stylePayment: 'color: hsl(213, 96%, 18%);  font-weight: bold;'

      }
    },
  components: { Toggle, AppPlain },
  
 
}
</script>

<style src="./style.scss" lang="scss" scoped/>


