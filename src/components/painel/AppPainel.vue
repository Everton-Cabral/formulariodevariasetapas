<template>
    <div class="c-painel">
        <AppStep numero="1" step="STEP 1" descricao="YOUR INFO"/>
        <AppStep numero="2" step="STEP 2" descricao="SELECT PLAN"/>
        <AppStep numero="3" step="STEP 3" descricao="ADD-ONS"/>
        <AppStep numero="4" step="STEP 4" descricao="SUMMARY"/>
    </div>
</template>

<script>
import AppStep from '../step/AppStep.vue'
export default {
    components:{AppStep}
}
</script>

<style src="./style.scss" lang="scss" scoped/>


