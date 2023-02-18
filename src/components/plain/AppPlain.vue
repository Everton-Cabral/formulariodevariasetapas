<template>
    <div class="c-plain">
        
        <div class="c-plain__plans">


            <div class="c-plain__plans__plan">
                <div class="c-plain__plans__plan__img">
                    <slot name="imagem"></slot>
                </div>
                
                
                <div class="c-plain__plans__plan__price">
                    <h4>{{ titulo }}</h4> 

                    <template v-if="this.$store.state.paymentYearly">
                        <span>{{ yr }}</span> 
                        <h6>{{ free }}</h6>
                    </template>

                    <template v-else>
                        <span>{{ mo }}</span> 
                    </template>
                </div>

            </div>
        </div>    
    </div>
</template>

<script>
export default {
    props:{
        imagem:{
            type: String,
            required: true,
        },
        titulo:{
            type: String,
            required: true
        },
        mo:{
            type: String,
            required: true
        },
        yr:{
            type: String,
            required: true
        },
        free:{
            type: String,
            required: true
        }
    }
}
</script>

<style src="./style.scss" lang="scss" scoped/>


