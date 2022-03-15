<template>
  <section class="toy-preview">
      <h1>Toy preview!</h1>
      <pre>{{toy}}</pre>
  </section>
</template>

<script>
export default {
    name: 'toy-preview',
    props: {
        toy: Object
    }


}
</script>

<style>

</style>