<script setup>
import crossIcon from '@/assets/close_btn.png'
import bulb from '@/assets/bulb.png'
import ModalBox from '@/components/quiz/ModalBox.vue'

defineProps({
  currentQuiz: Object
})
</script>

<template>
  <div class="d-flex justify-space-between mx-4">
    <v-btn size="40" variant="text" elevation="4">
      <v-img aspect-ratio="1" :src="crossIcon" width="30"></v-img>
    </v-btn>
    <p class="text-center text-h6">{{ currentQuiz.task_condition }}</p>
    <ModalBox v-slot="{ toggleModal }">
      <v-btn @click="toggleModal" size="40" variant="text" elevation="4">
        <v-img aspect-ratio="1" :src="bulb" width="30"></v-img>
      </v-btn>
    </ModalBox>
  </div>
  <p class="text-center text-h5 ma-3">{{ currentQuiz.task_text }}</p>
</template>
