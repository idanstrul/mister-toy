<template>
  <section class="app">
    <app-header></app-header>
    <router-view />
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
  created(){
    this.$store.dispatch('loadToys')
  },
  components: {
    appFooter,
    appHeader
  }
}
</script>

<style scoped>
</style>