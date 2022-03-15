<template>
  <section class="toy-details">
      <pre>{{toy}}</pre>
      <toy-reviews></toy-reviews>
  </section>
</template>

<script>
import toyReviews from "../components/toy-reviews.cmp.vue"

export default {
    name: 'toy-details',
    data(){
        return {
            toy: null
        }
    },
    created(){
        const toyId = this.$route.params.toyId
        this.$store.dispatch({type: 'getById', toyId})
            .then(toy => this.toy = toy)
    },
    components: {
        toyReviews
    }
}
</script>

<style>

</style>