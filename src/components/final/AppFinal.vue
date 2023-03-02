<template>
    <div class="c-final">
        <AppTitle 
            title="Finishing up"
            subTitle="Double-check everything looks OK before confirming."
        />
      
        <div class="c-final__planfeatures">
            <div class="c-final__planfeatures__typeofplan">
                <div class="c-final__planfeatures__typeofplan__description">
                    <h4>
                        {{ this.$store.state.typeOfPlan.title }}
                        ({{ payment }})
                    </h4>

                    <a href="#">Change</a>
                </div>

                <div class="c-final__planfeatures__typeofplan__price">
                    <template v-if="this.$store.state.paymentYearly">
                        ${{ price }}/yr
                    </template>

                    <template v-else>
                        ${{ price }}/mo
                    </template>
                  
                </div>
            </div>

            <hr>
            
            <div v-for="complement in this.$store.state.complements" :key="complement.title">
                <AppAdditionalAddOns 
                    :description= complement.title
                    :mo= complement.mo
                    :yr= complement.yr
                />
            </div>
        </div>

        <div class="c-final__total">
            <div class="c-final__total__description">
                Total(per {{paymentper}})
            </div>

            <div class="c-final__total__price">
                <template v-if="this.$store.state.paymentYearly">
                    +${{ finalpriceyr }}/yr
                </template>
               <template v-else>
                    +${{ finalpricemo }}/mo
                </template>
            </div>
        </div>
    </div>
</template>

<script>
import AppTitle from '../title/AppTitile.vue'
import AppAdditionalAddOns from '../additionalAddOns/AppAdditionalAddOns.vue';
export default {
    components:{AppAdditionalAddOns, AppTitle},
    computed:{
        payment(){
            return this.$store.state.paymentYearly ? 'Yearly ' : 'Monthly'
        },
        paymentper(){
            return this.$store.state.paymentYearly ? 'year' : 'month'
        },
        price(){
            return this.$store.state.paymentYearly 
                ? this.$store.state.typeOfPlan.yr 
                : this.$store.state.typeOfPlan.mo
        },
        finalpricemo(){
            return this.$store.getters.finalpricemo
        },
        finalpriceyr(){
            return this.$store.getters.finalpriceyr
        }
    }
}
</script>

<style src="./style.scss" lang="scss" scoped/>


