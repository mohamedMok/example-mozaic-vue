<template>
    <div class="mu-pt-200 mu-pr-200 mu-pl-200">
        <span class="mt-heading mt-heading--s mu-pb-100">{{product.name}}</span>
        <span class="mt-body-s mt-body-s--line-height-m example__font-color-lightest mu-pr-100">{{product.ref}} </span>|
        <MStarsResult :score=4 size="s" class="stars mu-pl-100 mu-pr-100" />|
        <span class="mt-body-s .mt-body-s--line-height-m example__font-color-lightest mu-pl-100 mu-pr-100"> 1 question/réponse</span>|
    </div>
</template>

<script>
import MStarsResult from '@mozaic-ds/mozaic-vue/src/components/ratingstars/MStarsResult';
export default {
    name: 'app',
    components: {
        MStarsResult
    },
    data: function (){
    return {
        product: {
            name: 'Extincteur 2kg nf poudre abc LIFEBOX',
            ref: 'Réf 80030041',
            price: '29.90'
        }
    }
  },
}
</script>

<style lang="scss" scoped>
.example__font-color-lightest {
  color: #6f676c;
}
.stars 
{
    display: inline-block !important;
}
body, span {
  font-family: LeroyMerlinSans-Regular, sans-serif !important;
}
@import "settings-tools/_all-settings";
@import 'layouts/_l.container';
@import 'layouts/_l.flexy';
@import 'typography/_t.headings';
@import 'utilities/_u.margin.scss';
@import 'utilities/_u.padding.scss';
</style>