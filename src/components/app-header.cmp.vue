<template>
    <header class="app-header">
        <h1>I'm a header</h1>
        <nav>
            <router-link to="/">Home</router-link> | 
            <router-link to="/about">About</router-link> | 
            <router-link to="/about">About</router-link> | 
            <router-link to="/toy">Toys</router-link> | 
            <router-link to="/toy/edit">Add a toy</router-link> | 
            <router-link to="/login">Log-in</router-link> | 
        </nav>
    </header>
</template>

<script>
export default {
    name: 'app-header',
}
</script>

<style></style>