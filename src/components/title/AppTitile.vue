<template>
    <div class="c-title">
        <h1>{{ title }}</h1>
        <span>{{ subTitle }}</span>
    </div>
</template>

<script>
export default {
    props:{
        title: {
            type: String,
            required: true
        },
        subTitle: {
            type: String,
            required: true
        }
    }
}
</script>

<style lang="scss" scoped>
@import '../../scss/style.scss';
.c-title{
    margin-bottom: 30px;
    
    h1{
        color: $color-btn-azul-escuro;
        margin-bottom: 10px;
    }
    span{
        color: $color-cinza-claro-texto;
    }
}
</style>
