<template>
    <div class="c-step">
        
        <div class="c-step__number" :class="active">
            {{ numero }}
        </div>
        <div class="c-step__descricao">
            <span>{{ step }}</span>
            <h5>{{ descricao }}</h5>
        </div>
    </div>
</template>

<script>
export default {
    props:{
        numero: String,
        step: String,
        descricao: String,
    },
    computed:{
        active(){
            let resultado
            if(this.$store.state.currentStep == this.numero ){
            resultado = 'active'
            } else if(this.$store.state.currentStep == 5 && this.numero == 4){
                resultado = 'active'
            }
            return resultado
            } 
        }
}
</script>

<style src="./style.scss" lang="scss" scoped/>


