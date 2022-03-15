<template>
    <section class="toy-filter">
        <input type="text" placeholder="Search toy name..." v-model="filterBy.name" />

        <label>
            <input type="radio" :value="null" v-model="filterBy.inStock" />
            All
        </label>
        <label>
            <input type="radio" :value="true" v-model="filterBy.inStock" />
            In stock
        </label>
        <label>
            <input type="radio" :value="false" v-model="filterBy.inStock" />
            Out of stock
        </label>

        <label for="label-select">Filter by labels:</label>
        <select id="label-select" v-model="filterBy.labels" multiple>
            <option>Doll</option>
            <option>Battery Powered</option>
            <option>Baby</option>
            <option>Funny</option>
            <option>Adult</option>
            <option>Educational</option>
        </select>

        <label for="sortby-select">Sort by:</label>
        <select id="sortby-select" v-model="filterBy.sortBy">
            <option value>None</option>
            <option value="name">Name</option>
            <option value="price">Price</option>
            <option value="createdAt">Creation</option>
        </select>

        <button @click="resetFilterBy">Reset filters and sorting</button>

        <pre>{{ filterBy }}</pre>
    </section>
</template>

<script>

export default {
    name: 'toy-filter',
    data() {
        return {
            filterBy: {
                name: '',
                inStock: null,
                labels: [],
                sortBy: ''
            },
        }
    },
    methods: {
        resetFilterBy(){
            this.filterBy = {
                name: '',
                inStock: null,
                labels: [],
                sortBy: ''
            }
        }
    },
    watch: {
        filterBy: {
            handler() {
                console.log('Filter changed');
                const filterBy = JSON.parse(JSON.stringify(this.filterBy))
                this.$emit('changedFilter', filterBy)
            },
            deep: true
        }
    }
}
</script>

<style>
</style>