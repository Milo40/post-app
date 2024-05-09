<script lang="ts">
export default {
  name: 'PostCard',
  props: {
    title: String,
    description: String
  }
}
</script>

<template>
  <div class="bg-white shadow-md border border-gray-200 rounded-lg w-full h-full">
    <a href="#">
      <img class="rounded-t-lg" src="https://flowbite.com/docs/images/blog/image-1.jpg" alt="" />
    </a>
    <div class="p-5">
      <a href="#">
        <h5 class="text-gray-900 font-bold text-2xl tracking-tight mb-2">
          {{ title }}
        </h5>
      </a>
      <p class="font-normal text-gray-700 mb-3">
        {{ description }}
      </p>
      <a
        class="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:ring-blue-300 font-medium rounded-lg text-sm px-3 py-2 text-center inline-flex items-center"
        href="#"
      >
        Read more
      </a>
    </div>
  </div>
</template>

<style></style>
