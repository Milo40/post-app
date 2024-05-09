<script setup lang="ts">
import PostCard from './postCard.vue'
</script>

<template>
  <main>
    <div class="grid grid-cols-1 md:grid-cols-3 gap-5">
      <div v-for="article in articles" :key="article.id" class="col-span-1 w-full h-full">
        <PostCard :title="article.title" :description="article.body" />
      </div>
    </div>
  </main>
</template>

<script lang="ts">
import axios from 'axios'
export default {
  name: 'PostsLayout',
  data() {
    return {
      articles: []
    }
  },
  mounted() {
    this.fetchNews()
  },
  methods: {
    async fetchNews() {
      try {
        const response = await axios.get('https://jsonplaceholder.typicode.com/posts')
        this.articles = response.data
        console.log('News fetched : ', this.articles)
      } catch (error) {
        console.error('Error fetching news : ', error)
      }
    }
  }
}
</script>
