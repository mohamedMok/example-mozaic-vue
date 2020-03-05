<template>
  <section class="opinions">
    <h1 class="mt-heading mt-heading--s mt-heading--underline mt-heading--center">Avis</h1>
    <p class="mt-body-m">Pour tout commentaire relatif au service (magasin, SAV, livraison), merci de le déposer dans notre rubrique contactez-nous.</p>

    <!-- Opinions Recap -->
    <ReviewsRecap />

    <p>Afficher par <strong>{{ reviewsNbFilter }} avis</strong></p>
    <div class="reviews-list">
      <ReviewCard v-for="(review, index) in reviews" :review="review" :key="index" />
    </div>
  </section>
</template>

<script>
import ReviewsRecap from "../components/ReviewsRecap";
import ReviewCard from "../components/ReviewCard";

export default {
  components: {
    ReviewsRecap,
    ReviewCard
  },

  data() {
    return {
      reviewsNbFilter: 3,
      reviews: [
        {
          user: "Sophie",
          period: "moins d'une semaine",
          score: 4.5,
          title: "Excellent produit",
          date: "10 Juin 2019",
          desc: "Produit top avec son manomètre <br />Support fixable sur n'importe quel mur."
        },
        {
          user: "WALDEMAR",
          period: "plus d'un mois",
          score: 1,
          title: "Extrêmement mal conçu",
          date: "05 octobre 2018",
          desc: "Support mal conçu."
        }
      ]
    };
  }
};
</script>

<style lang="scss">
@import "settings-tools/_all-settings";
@import "typography/_t.bodys";

.reviews-list {
  margin-bottom: $mu400;
  padding-bottom: $mu400;
}

.review-card {
  &:not(:last-child) {
    margin-bottom: $mu100;
  }
}
</style>
