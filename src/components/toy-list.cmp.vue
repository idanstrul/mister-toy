<template>
  <section class="toy-list">
      <toy-preview></toy-preview>
  </section>
</template>

<script>
import toyPreview from "./toy-preview.cmp.vue"
export default {
    name: 'toy-list',
    components: {
        toyPreview
    }
}
</script>

<style>

</style>