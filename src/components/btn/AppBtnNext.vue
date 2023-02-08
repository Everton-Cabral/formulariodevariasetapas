<template>
    <div class="c-btn-next">
       Next Step
    </div>
</template>

<script>

export default {
    
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


