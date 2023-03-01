<template>
    <div class="c-addAddOns">
        <div class="c-addAddOns__description">
            {{ description }}
        </div>
        <div class="c-addAddOns__price">
            <template v-if="this.$store.state.paymentYearly">
                +${{ yr }}/yr
            </template>

            <template v-else>
                +${{ mo }}/mo
            </template>
            
        </div>
    </div>
</template>

<script>
export default {
    props:{
        description: {
            type: String,
            required: true
        },
        mo: {
            type: String,
            required: true
        },
        yr: {
            type: String,
            required: true
        }
    }
}
</script>

<style lang="scss" scoped>
@import '../../scss/style.scss';
.c-addAddOns{
    @extend .d-flex;
    @extend .justify-content-space-between;
    margin-top: 15px;
    color: $color-cinza-claro-texto;

    &__price{
        font-weight: 400;
        color: $color-btn-azul-escuro;
    }
}
</style>
