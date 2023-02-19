<template>
    <div class="c-complement" :class="activeClass">
        <div class="c-complement__leftside">
            <div class="c-complement__leftside__checkbox">
                <input type="checkbox" :checked="checked" id="my-checkbox">
            </div>

            <div class="c-complement__leftside__description">
                <h4>Online Service</h4>
    
                <span>Access to multiplayer games </span>
            </div>
        </div>

        <div class="c-complement__price">
            +$1/mo
        </div>
    </div>
</template>

<script>
export default {
    props:{
        checked:{
            type: Boolean,
            required: true
        }
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

