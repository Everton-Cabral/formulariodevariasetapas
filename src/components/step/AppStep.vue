<template>
    <div class="c-step">
        
        <div class="c-step__number ">
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
    }
}
</script>

<style src="./style.scss" lang="scss" scoped/>


