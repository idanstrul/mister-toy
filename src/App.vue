<template>
  <section class="app">
    <app-header></app-header>
    <div>
      <router-view /> 
      <img v-if="isLoading" src="./assets/loading.gif" alt="Loading...">
    </div>
    <app-footer></app-footer>
  </section>
</template>

<script>
import appFooter from "./components/app-footer.cmp.vue"
import appHeader from "./components/app-header.cmp.vue"

export default {
  name: 'app',
  data() {
    return {
      msg: 'hellooooo'
    }
  },
  created() {
    this.$store.dispatch('loadToys')
  },
  computed: {
    isLoading() {
      return this.$store.getters.isLoading
    }
  },
  components: {
    appFooter,
    appHeader
  }
}
</script>

<style scoped>
</style>