<script setup>
import { useStore } from 'vuex'
import { computed, onMounted, ref } from 'vue'
import QuizOptions from '@/components/quiz/QuizOptions.vue'
import QuizScore from '@/components/quiz/QuizScore.vue'
import Alert from '@/components/quiz/Alert.vue'
import PageLoader from '@/components/quiz/PageLoader.vue'
import QuizImage from '@/components/quiz/QuizImage.vue'
import QuizText from '@/components/quiz/QuizText.vue'
import storeFunctionNames from '@/constants/storeFunctionNames'
import VerifyAnswer from '@/components/quiz/VerifyAnswer.vue'

const store = useStore()
const currentIndex = ref(0)
const currentQuiz = computed(() => store.state.quiz.quizes[currentIndex.value])
const { ADD_QUIZES } = storeFunctionNames

onMounted(async () => {
  await store.dispatch({
    type: `quiz/${ADD_QUIZES}`
  })
})
</script>

<template>
  <template v-if="currentQuiz">
    <Alert />
    <QuizScore />
    <QuizText :currentQuiz="currentQuiz" />
    <QuizImage :image="currentQuiz.task_image" />
    <div class="d-flex flex-wrap w-100 justify-space-between buttons-container">
      <QuizOptions :options="currentQuiz.answer_options" :id="currentQuiz.id" />
      <VerifyAnswer :currentQuiz="currentQuiz" />
    </div>
  </template>
  <template v-else>
    <PageLoader />
  </template>
</template>

<style>
.buttons-container {
  background: #a9a9aa3d;
}

.buttons-container button {
  background-color: #ffffff42;
}
</style>
