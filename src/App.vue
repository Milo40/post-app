<script setup lang="ts">
import { RouterLink, RouterView } from 'vue-router'
</script>

<template>
      <nav>
        <RouterLink to="/">Home</RouterLink>
        <RouterLink to="/post">Posts</RouterLink>
      </nav>

  <RouterView />
</template>

<style scoped>

</style>
