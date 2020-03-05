<template>
  <div>
    <h2>Nav Bar</h2>
    <nav>
      <router-link class="spacing" v-for="routes in links" 
      v-bind:key="routes.id"
      :to="`${routes.page}`">{{routes.text}}</router-link>
    </nav>
  </div>
</template>

<script>

export default {
  name: 'Navigation',
  data() {
    return {
      links: [
        {
          id: 0,
          text: 'Login',
          page:'/Login'
        },
        {
          id: 1,
          text: 'Product Page',
          page:'/Product'
        },
        {
          id: 2,
          text: 'Reviews Page',
          page:'/Reviews'
        },
      ]
    }
  }
}
</script>
<style>
.spacing {
  margin-right: 10px;
}
</style>