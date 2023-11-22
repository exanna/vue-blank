<script setup>
import { RouterLink, RouterView } from 'vue-router'

</script>

<template>
    <header>
        <nav>
            <RouterLink to="/">Główna</RouterLink>
            <RouterLink to="/about">O nas</RouterLink>
        </nav>
    </header>
    <RouterView />
</template>

