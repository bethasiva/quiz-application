<script setup>
import { ref } from 'vue'

const dialog = ref(false)

const toggleModal = () => {
  dialog.value = !dialog.value
}
</script>

<template>
  <div>
    <slot :toggleModal="toggleModal"></slot>
    <v-dialog v-model="dialog" width="auto">
      <v-card width="100%" min-width="300" height="200px">
        <template v-slot:actions>
          <v-btn class="ms-auto" text="Close" @click="toggleModal"></v-btn>
        </template>
      </v-card>
    </v-dialog>
  </div>
</template>
