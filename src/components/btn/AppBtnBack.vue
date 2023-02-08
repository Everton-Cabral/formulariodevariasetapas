<template>
    <div class="c-btn-back">
       Go Back
    </div>
</template>

<script>

export default {
    
}
</script>

<style lang="scss" scoped>

@import '../../scss/style.scss';
.c-btn-back{
    

   @extend .d-flex;
   @extend .justify-content-center;
   @extend .align-items-center;

    background-color: white;
    color: $color-cinza-claro-texto;
    width: 105px;
    height: 40px;
    border-radius: 5px;
    font-family: $font-principal;
    font-weight: 700;
  
}
.c-btn-back:hover{
    color: $color-btn-azul-escuro;
    
    cursor: pointer;
}
</style>


