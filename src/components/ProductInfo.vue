<template>
    <div class="mu-pr-200 mu-pl-200 ">
        <span class="mt-heading mt-heading--s price">{{product.price}} €</span>
        <span class="mt-body-s mt-body-s--line-height-m example__font-color-lightest mu-pr-100">{{product.ecoPart}} </span>
        <br />
        <br />
        <span class="mt-body-s mt-body-s--line-height-m retrait">{{product.retrait}}</span><span> à Saint Denis (St Denis-la-Plaine)</span>
        <br />
        <br />
        <br />
        <hr />
        <Quantity />
        <br />
        <div class="availability">
            <span>Dans votre magasin de Saint Denis (St Denis-la-Plaine)</span>
            <div >
                <MIcon class="logo" size="s" color="primary-01-500" :icon="stock"  />
                <span class="stock" >7 unités en stock</span>
            </div>
        </div>
    </div>
</template>

<script>
import addicon from '@mozaic-ds/icons/svg/Product_Basket_Add_48px.svg';
import stock from '@mozaic-ds/icons/svg/Navigation_Notification_Circle--Available_48px.svg';
import Quantity from './Quantity';
import MIcon from '@mozaic-ds/mozaic-vue/src/components/icon/MIcon';

export default {
    name: 'app',
    components: {
        Quantity,
        MIcon
    },
    data: function (){
        addicon
    return {
        addicon,
        stock,
        product: {
            name: 'Extincteur 2kg nf poudre abc LIFEBOX',
            ref: 'Réf 80030041',
            price: '29.90',
            ecoPart: 'dont 2.16 € éco-part au recyclage des D3E',
            retrait: 'Retrait 2 heures en magasin',
            prixRetrait: 'Gratuit',
        }
    }
  },
}
</script>

<style lang="scss">
.example__font-color-lightest {
  color: #6f676c;
}

.price {
  font-weight: 600 !important;
  font-family: LeroyMerlinSans-Regular, sans-serif !important;
}

.retrait {
  color: #78be20;
}

.logo {
  display: inline-block;
  margin-right: 5px;
  padding-top: 5;
}

.stock {
  color: #78be20;
}

.availability {
  border-radius: 4px;
  border: 1px solid #d3d2d6;
  padding: 0.75rem 1rem;
  margin-top: 1.5rem;
}

@import "settings-tools/_all-settings";
@import 'layouts/_l.container';
@import 'layouts/_l.flexy';
@import 'typography/_t.headings';
@import 'utilities/_u.margin.scss';
@import 'utilities/_u.padding.scss';
</style>