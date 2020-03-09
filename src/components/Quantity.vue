<template>
  <div class="">
    <div class="stars mu-mb-100">
      <MButton
      label=""
      theme="bordered"
      class="mc-button--square minus-button"
      :left-icon="minusicon"
      :disabled="quantity==0"
      v-on:click="quantity--"
      />
      <div class="stars"> 
          <MInput v-model="quantity" class="quantity-box" />
      </div>
      <MButton
      label=""
      theme="bordered"
      class="mc-button--square add-button"
      :left-icon="addicon"
      v-on:click="quantity++"
      />
    </div>
    <MButton
    class="mu-ml-100 add-cart"
    label="Ajouter au panier"
    theme="primary"
    :left-icon="addcart"
    />        
  </div>
</template>

<script>
import MButton from '@mozaic-ds/mozaic-vue/src/components/button/MButton';
import MInput from '@mozaic-ds/mozaic-vue/src/components/textinput/MTextInput';
import addicon from '@mozaic-ds/icons/svg/Navigation_Control_More_48px.svg';
import minusicon from '@mozaic-ds/icons/svg/Navigation_Control_Less_48px.svg';
import addcart from '@mozaic-ds/icons/svg/Product_Basket_Add_48px.svg';
export default {
    name: 'app',
    components: {
        MButton,
        MInput
    },
    data: function (){
    return {
        addicon,
        addcart,
        minusicon,
        quantity: 0
    }
  },
}
</script>

<style lang="scss" scoped>
.example__font-color-lightest {
  color: #6f676c;
}

.stars {
  display: inline-block !important;
}

.add-button {
  border-top-left-radius: 0;
  border-bottom-left-radius: 0;
  min-height: 2.9rem !important;
  line-height: 1.5;
}

.minus-button {
  border-top-right-radius: 0;
  border-bottom-right-radius: 0;
  min-height: 2.9rem !important;
  line-height: 1.5;
}

.quantity-box {
  width: 60px;
  border-left: none !important;
  border-right: none !important;
  border-radius: 0 !important;
  border-top: 1px solid #78be20 !important;
  border-bottom: 1px solid #78be20 !important;
}

.add-cart {
  max-width: 900px !important;
}

body,
span {
  font-family: LeroyMerlinSans-Regular, sans-serif !important;
}

@import "settings-tools/_all-settings";
@import 'layouts/_l.container';
@import 'layouts/_l.flexy';
@import 'typography/_t.headings';
@import 'utilities/_u.margin.scss';
@import 'utilities/_u.padding.scss';
</style>