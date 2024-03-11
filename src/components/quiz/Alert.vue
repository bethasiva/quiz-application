<script setup>
import { useStore } from 'vuex'

const store = useStore()
</script>

<template>
  <div
    v-if="store.state.quiz.showAlert"
    class="position-absolute w-100 d-flex justify-center align-center h-100"
  >
    <v-alert class="pa-10 text-h6 text-center" style="z-index: 20" color="primary">
      {{ store.state.quiz.alertMessage }}
    </v-alert>
  </div>
</template>
