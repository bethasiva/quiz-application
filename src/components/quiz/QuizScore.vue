<script setup>
import { useStore } from 'vuex'
import coin from '@/assets/coin.png'

const store = useStore()
</script>

<template>
  <div class="score-board text-right my-10 mx-4">
    <p class="text-h6">{{ store.state.quiz.user }}</p>
    <div class="ga-1">
      <p class="text-h6 text-left d-inline-block pr-2">{{ store.state.quiz.score }}</p>
      <v-img class="d-inline-block" aspect-ratio="1" :src="coin" width="20"></v-img>
    </div>
  </div>
</template>
