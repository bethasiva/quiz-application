<script setup>
defineProps({
  image: String
})
</script>

<template>
  <div class="d-flex w-100 justify-center my-5 my-sm-16">
    <img class="w-100" :src="image" />
  </div>
</template>
