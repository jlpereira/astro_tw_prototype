<template>
  <div class="gallery">
    <GalleryImage
      v-for="image in images"
      :key="image.id"
      :image="image"/>
  </div>
</template>

<script setup>
import GalleryImage from './GalleryImage.vue'

const props = defineProps({
  images: {
    type: Object,
    required: true
  }
})
</script>

<style>
.gallery {
  
}
</style>