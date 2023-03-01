<template>
    <div class="c-btn-next" :style="cor">
        <template v-if="this.$store.state.currentStep != 4">Next Step</template>
        <template v-else>Confirm</template>
       
    </div>
</template>

<script>

export default {
    computed:{
        cor(){
            return this.$store.state.currentStep === 4 
             ? 'background-color: hsl(243, 100%, 62%)' : 
             ''
        }
    }
}
</script>

<style lang="scss" scoped>

@import '../../scss/style.scss';
.c-btn-next{
    

   @extend .d-flex;
   @extend .justify-content-center;
   @extend .align-items-center;

    background-color: $color-btn-azul-escuro;
    color: white;
    width: 105px;
    height: 40px;
    border-radius: 5px;
    font-family: $font-principal;  
}
.c-btn-next:hover{
    background-color: hsl(213, 30%, 35%);
    cursor: pointer;
}

</style>


