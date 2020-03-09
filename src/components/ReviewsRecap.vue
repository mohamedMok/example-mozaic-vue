<template>
  <div class="reviews-recap">
    <div class="reviews-recap__main">
      <p class="reviews-recap__average-score"><span>3,0</span>/5</p>
      <div class="reviews-recap__average-global">
        <MStarsResult :score=3.0 size="m" />
        <strong>(2)</strong>
      </div>

      <ul class="reviews-recap__list">
        <li class="reviews-recap__list-item" v-for="(average, index) in reviewsAverage" :key="index">
          <MStarsResult :score=average.score size="s" />
          <span :class="`reviews-recap__range reviews-recap__range--${average.range}`"></span>
          <span class="reviews-recap__score">{{ average.number }}</span>
        </li>
      </ul>

    </div>
    <div class="reviews-recap__aside">
      <div class="reviews-recap__aside-wrapper">
        <m-button label="Donner votre avis" />
        <p class="reviews-recap__recommandation"><strong>50%</strong> des clients recommandent ce produit</p>
        <p class="reviews-recap__mention">Tous les avis sont soumis à modération <m-icon :icon="icon" /></p>
      </div>
    </div>
  </div>
</template>

<script>
import MButton from "@mozaic-ds/mozaic-vue/src/components/button/MButton";
import MStarsResult from "@mozaic-ds/mozaic-vue/src/components/ratingstars/MStarsResult";
import MIcon from "@mozaic-ds/mozaic-vue/src/components/icon/MIcon";
import IconInfo from '@mozaic-ds/icons/svg/Navigation_Notification_Information_24px.svg';

export default {
  name: "ReviewRecap",

  components: {
    MButton,
    MStarsResult,
    MIcon
  },

  props: {
    reviewsAverage: {
      type: Object,
      default: null
    },
    icon: {
      type: String,
      default: IconInfo
    },
  },

  data () {
    return {
      id: null,
    }
  },

  created () {
    this.id = this._uid;
  },
};
</script>

<style lang="scss" scoped>
@import "settings-tools/_all-settings";
@import "components/_c.links";
@import "typography/_t.bodys";

.reviews-recap {
  background: $color-grey-000;
  display: flex;
  padding: $mu200;
  
  &__main {
    border-right: 1px solid $color-grey-200;
  }

  &__average-score {
    @include set-font-scale('06');
    font-weight: map-get($font-weights, 'semi-bold');
    text-align: center;
    margin: 0 auto;

    span {
      @include set-font-scale('09');
    }
  }

  &__average-global {
    align-items: center;
    display: flex;
    font-size: 18px;
    margin: 0 auto $mu150;
    max-width: 165px;

    strong {
      margin-left: $mu125;
    }
  }

  &__list {
    @include unstyle-list();
    margin: 0 auto;
    width: 14.375rem;

    &-item {
      display: flex;
      align-items: center;
    }
  }

  &__range {
    background: $color-grey-100;
    display: inline-block;
    height: 6px;
    margin: 0 $mu100 0 $mu050;
    position: relative;
    width: $mu700;

    &::before {
      background: $color-primary-01-500;
      bottom: 0;
      content: "";
      display: block;
      left: 0;
      position: absolute;
      top: 0;
    }

    @for $i from 1 through 10 {
      $rangeValue: $i * 10;
      &--#{$rangeValue} {
        &::before {
          width: $rangeValue * 1%;
        }
      }
    }
  }

  &__score {
    color: $color-font-light;
    @include set-font-scale('04', 's');
    font-weight: map-get($font-weights, 'semi-bold');
  }

  &__aside {
    text-align: center;

    &-wrapper {
      padding: $mu200;      
    }
  }

  &__main,
  &__aside {
    width: 50%;
  }

  &__recommandation {
    margin: $mu300 auto 0;

    strong {
      @include set-font-scale('08');
    }
  }

  &__mention {
    @include set-font-scale('04');
    color: $color-font-light;
    margin: 0 auto;

    & > * {
      display: inline-block;
      vertical-align: middle;
    }

    svg {
      width: $mu150;
    }
  }
}
</style>
