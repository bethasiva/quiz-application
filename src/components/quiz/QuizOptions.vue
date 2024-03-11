<script setup>
import { useStore } from 'vuex'
import VRow from '@/layout/VRow.vue'
import storeFunctionNames from '@/constants/storeFunctionNames'

const store = useStore()
defineProps({
  id: {
    type: String,
    required: true
  },
  options: {
    type: Object,
    required: true
  }
})

const selectOption = (id, value) => {
  store.dispatch({
    type: `quiz/${storeFunctionNames.SELECTED_OPTION_ANSWER}`,
    payload: {
      id,
      selectedOptionAnswer: value
    }
  })
}
</script>

<template>
  <VRow width_100="w-100" flex="flex-1-1">
    <v-btn
      :class="{ highlight: value === store.state.quiz.selectedOptionAnswer }"
      :disabled="store.state.quiz.showAlert"
      class="flex-1-1 text-capitalize"
      elevation="4"
      size="x-large"
      variant="text"
      v-for="(value, key) in options"
      :key="value"
      @click="selectOption(id, value)"
    >
      {{ key }}
    </v-btn>
  </VRow>
</template>

<style scoped>
.highlight {
  background: rgb(215, 212, 212);
}
</style>
