<template>
    <div class="c-complement" :class="activeClass">
        <div class="c-complement__leftside">
            <div class="c-complement__leftside__checkbox">
                <input type="checkbox" :checked="complement.checked" id="my-checkbox">
            </div>

            <div class="c-complement__leftside__description">
                <h4>
                    {{ complement.title }}
                </h4>
    
                <span>
                    {{ complement.subTitle }} 
                </span>
            </div>
        </div>

        <div class="c-complement__price">
          
            <span v-if="this.$store.state.paymentYearly">
              +${{ complement.yr }}/yr
           </span>   
            <span v-else>
                +${{ complement.mo }}/mo
            </span>    

        </div>
    </div>
</template>

<script>

export default {
    props:{
        complement:{
            type: Object,
            required: true
        }
    },
   
    computed:{
        activeClass(){
            let resultado
            if(this.complement.checked) resultado ='c-complement--active'
            return resultado
        }
    },
 
   
}
</script>

<style src="./style.scss" lang="scss" scoped/>

