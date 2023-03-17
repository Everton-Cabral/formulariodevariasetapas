<template>
    <div class="c-thanks">
        <div class="c-thanks__img">
            <img src="../../assets/img/icon-thank-you.svg" alt="thanks">
        </div>
        <div class="c-thanks__title">
            <h1>Thank you</h1>
        </div>
        <div class="c-thanks__subTitle">
           <P></P> Thanks for confirming yout subscrition! We hope you have fun using our platform. If you ever nee support, please feel free to email us at support@loremgaming.com
        </div>
    </div>
</template>

<script>
export default {

}
</script>

<style lang="scss" scoped>
@import '../../scss/style.scss';


.c-thanks{
    @extend .d-flex;
    @extend .flex-direction-column;
    @extend .align-items-center;
    @extend .justify-content-center;
    height: 100%;
    padding: 50px;
    font-family: $font-principal;
    
    
    &__img{
        padding-bottom: 20px;
        img{
            height: 70px;
        }
    }
    &__title{
        padding-bottom: 20px;
        color: $color-btn-azul-escuro;
    }
    &__subTitle{
        color:$color-cinza-claro-texto;
        line-height: 24px;
        align-items: stretch;
    }
}
@media screen and (max-width: 999px){ 
    .c-thanks{
        background-color: white;
        padding: 25% 5% 25% 5%; 
        margin: -65px 15px 0px 15px;
        border-radius: 10px;
        text-align: center;
        height: auto;
    }
}
</style>
