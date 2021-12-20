<template>
  <div class="gallery__image">
    <img :src="image.thumb">
  </div>
</template>

<script setup>

const props = defineProps({
  image: {
    type: Object,
    required: true
  }
})
</script>