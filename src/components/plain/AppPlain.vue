<template>
    <div class="c-plain">
        
        <div class="c-plain__titulo">
            <h1>Select your plan</h1>
            <span>You have the option of monthly or yearly billing</span>
        </div>

        <div class="c-plain__plans">


            <div class="c-plain__plans__plan">
                <div class="c-plain__plans__plan__img">
                    <img src="../../assets/img/icon-arcade.svg" alt="arcade">
                </div>
                
                
                <div class="c-plain__plans__plan__price">
                    <h4>Arcade</h4> 
                    <span v-show="payment==='monthly'">$9/mo</span> 
                    <span v-show="payment==='yearly'">$90/yr</span> 
                    <h6 v-show="payment==='yearly'">2 months free</h6>
                </div>

            </div>
        </div>    
    </div>
</template>

<script>
export default {

}
</script>

<style src="./style.scss" lang="scss" scoped/>


