<template>
    <div class="c-plain">
        
        <div class="c-plain__plans">


            <div class="c-plain__plans__plan" :class="active">
                <div class="c-plain__plans__plan__img">
                    <slot name="imagem"></slot>
                </div>
                
                <div class="c-plain__plans__plan__price">
                    <h4>
                        {{ title }}
                    </h4> 

                    <template v-if="this.$store.state.paymentYearly">
                        <span>
                            ${{ yr }}/yr
                        </span> 
                        <h6>
                            {{ free }}
                        </h6>
                    </template>

                    <template v-else>
                        <span>
                            ${{ mo }}/mo
                        </span> 
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
        title:{
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
    },
    computed:{
        active(){
          return  this.title === this.$store.state.typeOfPlan.title ? "active" : " "
        }
    }
}
</script>

<style src="./style.scss" lang="scss" scoped/>


