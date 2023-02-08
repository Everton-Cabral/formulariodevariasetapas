<template>
    <div class="c-container">
        <AppPainel/>
        <AppFormulario />
    </div>
</template>

<script>
import AppPainel from '../painel/AppPainel.vue'
import AppFormulario from '../formulario/AppFormulario.vue'
export default {
    components:{AppPainel, AppFormulario}
}
</script>

<style src="./style.scss" lang="scss" scoped/>


