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
    </div>
</template>

<script>
export default {
    name: 'app',
    data: function (){
    return {
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

.price{
    font-weight: 600 !important;
    font-family: LeroyMerlinSans-Regular, sans-serif !important;
}

.retrait{
    color: #78be20
}

@import "settings-tools/_all-settings";
@import 'layouts/_l.container';
@import 'layouts/_l.flexy';
@import 'typography/_t.headings';
@import 'utilities/_u.margin.scss';
@import 'utilities/_u.padding.scss';
</style>