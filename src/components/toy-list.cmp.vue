<template>
  <section class="toy-list">
      <toy-preview v-for="toy in toys" :key="toy._id" :toy="toy"></toy-preview>
  </section>
</template>

<script>
import toyPreview from "./toy-preview.cmp.vue"
export default {
    name: 'toy-list',
    props: {
        toys: Array
    },
    components: {
        toyPreview
    }
}
</script>

<style>

</style>