<script setup>
import VRow from '@/layout/VRow.vue'
import { useStore } from 'vuex'
import storeFunctionNames from '@/constants/storeFunctionNames'

const { currentQuiz } = defineProps({
  currentQuiz: Object
})
const { VERIFY_ANSWER } = storeFunctionNames
const store = useStore()
const verifyAnswer = () => {
  store.dispatch({
    type: `quiz/${VERIFY_ANSWER}`,
    payload: {
      id: currentQuiz.id
    }
  })
}
</script>

<template>
  <VRow>
    <v-btn
      :disabled="store.state.quiz.showAlert"
      class="text-capitalize"
      elevation="4"
      size="x-large"
      variant="text"
      @click="verifyAnswer"
      >Check</v-btn
    >
  </VRow>
</template>
