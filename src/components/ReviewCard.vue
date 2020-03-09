<template>
  <article :id="`reviewCard-${id}`" class="review-card">
    <div class="review-card__user">
      <figure class="review-card__visual">
        <span class="review-card__visual-wrap">
          <img
            src="//s1.lmcdn.fr/8.162.1/images/common/default-user._r062b5e4d6dce_.png"
            alt="Photo de Sophie"
            class="review-card__img"
          />
        </span>
        <figcaption class="review-card__user-name">{{ review.user }}</figcaption>
      </figure>
      <p class="review-card__period">
        Achat réalisé il y a <strong>{{ review.period }}</strong>
      </p>
    </div>
    <div class="review-card__content">
      <MStarsResult :score=review.score />

      <h2 class="review-card__title">{{ review.title }}</h2>
      <p class="review-card__date">Avis déposé le {{ review.date }}</p>
      <div class="review-card__desc mt-body-m">
        <p v-html="review.desc"></p>
      </div>

      <div class="review-card__footer">
        <m-button label="Utile" theme="bordered" size="s" />
        <a href="#" class="mc-link">Signaler abus</a>
      </div>
    </div>
  </article>
</template>

<script>
import MButton from "@mozaic-ds/mozaic-vue/src/components/button/MButton";
import MStarsResult from "@mozaic-ds/mozaic-vue/src/components/ratingstars/MStarsResult";

export default {
  name: "ReviewCard",

  components: {
    MButton,
    MStarsResult
  },

  props: {
    review: {
      type: Object,
    },
  },

  data () {
    return {
      id: null,
    };
  },

  created () {
    this.id = this._uid;
  },
};
</script>

<style lang="scss" scoped>
@import "settings-tools/_all-settings";
@import "components/_c.links";

.review-card {
  background: $color-grey-000;
  display: flex;
  padding: $mu250 0;

  &__user {
    border-right: 1px solid $color-grey-200;
    width: magic-unit-rem(11.625, true);
    padding: 0 $mu100;
    display: flex;
    flex-direction: column;
    align-items: center;
    text-align: center;

    &-name {
      color: $color-font-primary-01;
      text-transform: uppercase;
      font-weight: map-get($font-weights, "semi-bold");
    }
  }

  &__visual {
    &-wrap {
      background: $color-grey-300;
      border-radius: 50%;
      display: flex;
      align-items: center;
      justify-content: center;
      height: $mu300;
      width: $mu300;
      overflow: hidden;
      margin: 0 auto $mu050;
    }
  }

  &__img {
    width: 200%;
  }

  &__period {
    color: $color-font-light;
  }

  &__content {
    padding: 0 $mu200;
    flex: 1 1 auto;
  }

  &__title {
    @include set-font-scale('06');

    margin: $mu100 auto 0;
  }

  &__date {
    @include set-font-scale('04');

    color: $color-font-light;
    margin: 0 auto;
  }

  &__desc {
    color: $color-font-light;
    margin: $mu200 0;

    p {
      margin: 0 auto;
    }
  }

  &__footer {
    border-top: 1px solid $color-grey-200;
    display: flex;
    align-items: center;
    justify-content: space-between;
    padding: $mu150	0 0;
  }
}
</style>
