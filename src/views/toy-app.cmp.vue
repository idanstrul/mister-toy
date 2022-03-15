<template>
  <section class="toy-app">
      <h1>Toy app!</h1>
      <toy-filter @changed-filter="filterToys"></toy-filter>
      <toy-list></toy-list>
      <pre>{{toysForDisplay}}</pre>
  </section>
</template>

<script>
import toyList from "../components/toy-list.cmp.vue"
import toyFilter from "../components/toy-filter.cmp.vue"

export default {
    name: 'toy-app',
    computed:{
        toysForDisplay(){
            return this.$store.getters.toysForDisplay
        }
    },
    methods: {
        filterToys(filterBy){
            this.$store.dispatch({type: 'setFilterBy', filterBy})
        }
    },
    components: {
        toyList,
        toyFilter
    }
}
</script>

<style>

</style>
