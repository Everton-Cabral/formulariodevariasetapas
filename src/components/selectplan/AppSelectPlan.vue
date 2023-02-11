<template>
    <div class="c-step2">
        <div class="c-step2__titulo">
            <h1>Select your plan</h1>
            <span>You have the option of monthly or yearly billing</span>
        </div>

        <div class="c-step2__plans">


            <div class="c-step2__plans__plan">
                <div class="c-step2__plans__plan__img">
                    <img src="../../assets/img/icon-arcade.svg" alt="arcade">
                </div>
                
                
                <div class="c-step2__plans__plan__price">
                    <h4>Arcade</h4> 
                    <span v-show="payment==='monthly'">$9/mo</span> 
                    <span v-show="payment==='yearly'">$90/yr</span> 
                    <h6 v-show="payment==='yearly'">2 months free</h6>
                </div>

            </div>


            <div class="c-step2__plans__plan">
                <div class="c-step2__plans__plan__img">
                    <img src="../../assets/img/icon-advanced.svg" alt="advanced">
                </div>
                
                <div class="c-step2__plans__plan__price">
                    <h4>Advanced</h4>
                    <span v-show="payment==='monthly'">$12/mo</span>  
                    <span v-show="payment==='yearly'">$120/yr</span> 
                    <h6 v-show="payment==='yearly'">2 months free</h6>
                </div>

            </div>


            <div class="c-step2__plans__plan">
                <div class="c-step2__plans__plan__img">
                    <img src="../../assets/img/icon-pro.svg" alt="pro">
                </div>
                
                <div class="c-step2__plans__plan__price">
                    <h4>Pro</h4>
                     <span v-show="payment==='monthly'">$15/mo</span>   
                     <span v-show="payment==='yearly'">$150/yr</span> 
                    <h6 v-show="payment==='yearly'">2 months free</h6>
                </div>
        
            </div>

        </div>

        <div class="c-step2__payment">
            <span :style="payment ==='monthly' ? stylePayment: ''">Monthly</span>
            <Toggle v-model="value" class="c-step2__payment__toggle" />
            <span :style="payment ==='yearly' ? stylePayment: ''">Yearly</span>
            
        </div>
    </div>
</template>

<script>

import Toggle from '@vueform/toggle'

export default {
    data() {
      return {
        value: false,
        stylePayment: 'color: hsl(213, 96%, 18%);  font-weight: bold;'

      }
    },
  components: { Toggle },
  
  computed:{
    payment(){
       return this.value ? 'yearly' : 'monthly'
    }
  }
}
</script>

<style src="./style.scss" lang="scss" scoped/>


