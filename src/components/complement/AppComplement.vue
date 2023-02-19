<template>
    <div class="c-complement" :class="activeClass">
        <div class="c-complement__leftside">
            <div class="c-complement__leftside__checkbox">
                <input type="checkbox" :checked="checked" id="my-checkbox">
            </div>

            <div class="c-complement__leftside__description">
                <h4>{{ title }}</h4>
    
                <span>{{ subTitle }} </span>
            </div>
        </div>

        <div class="c-complement__price">
          
            <span v-if="this.$store.state.paymentYearly">
               {{ yr }}
           </span>   
            <span v-else>
                {{ mo }}
            </span>    

        </div>
    </div>
</template>

<script>
export default {
    props:{
        checked:{
            type: Boolean,
            required: true
        },
        title:{
            type: String,
            required: true
        },
        subTitle:{
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
    },

    computed:{
        activeClass(){
            let resultado
            if(this.checked) resultado ='c-complement--active'
            return resultado
        }
    }
}
</script>

<style src="./style.scss" lang="scss" scoped/>

