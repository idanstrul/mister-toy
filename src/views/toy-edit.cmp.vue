<template>
    <section v-if="toy" class="toy-edit">
        <pre>{{toy}}</pre>
        <input type="text" v-model="toy.name" placeholder="Toy name...">
        <input type="number" v-model="toy.price">

    </section>
</template>

<script>
export default {
    name: 'toy-edit',
    data() {
        return {
            toy: null
        }
    },
    created() {
        // console.log('edit created');
        const toyId = this.$route.params.toyId
        if (toyId) this.$store.dispatch({ type: 'getById', toyId })
            .then(toy => this.toy = JSON.parse(JSON.stringify(toy)))
        else this.$store.dispatch('getEmptyToy')
            .then(toy => this.toy = JSON.parse(JSON.stringify(toy)))
    },
}
</script>

<style>
</style>