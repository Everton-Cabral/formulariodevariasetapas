<template>
    <div class="c-final">
        <div class="c-final__titulo">
            <h1>Finishing up</h1>

            <span>Double-check everything looks OK before confirming.</span>
        </div>

        <div class="c-final__planfeatures">
            <div class="c-final__planfeatures__typeofplan">
                <div class="c-final__planfeatures__typeofplan__description">
                    <h4>{{ this.$store.state.typeOfPlan.titulo }}({{ payment }})</h4>
                    <a href="#">Change</a>
                </div>

                <div class="c-final__planfeatures__typeofplan__price">
                    {{ price }}
                </div>
            </div>

            <hr>

            <AppAdditionalAddOns 
                description="Online service"
                price="+$1/mo"
            />

            <AppAdditionalAddOns 
                description="Larger storage"
                price="+$2/mo"
            />

        </div>

        <div class="c-final__total">
            <div class="c-final__total__description">
                Total(per month)
            </div>

            <div class="c-final__total__price">
                +$12/mo
            </div>
        </div>
    </div>
</template>

<script>
import AppAdditionalAddOns from '../additionalAddOns/AppAdditionalAddOns.vue';
export default {
    components:{AppAdditionalAddOns},
    computed:{
        payment(){
            return this.$store.state.paymentYearly ? 'Yearly ' : 'Monthly'
        },
        price(){
            return this.$store.state.paymentYearly 
                ? this.$store.state.typeOfPlan.yr 
                : this.$store.state.typeOfPlan.mo
        }
    }
}
</script>

<style src="./style.scss" lang="scss" scoped/>


