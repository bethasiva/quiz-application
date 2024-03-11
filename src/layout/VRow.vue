<template>
  <v-container class="ma-0 w-auto d-flex" :class="$attrs.flex">
    <v-row>
      <v-col cols="auto" class="d-flex flex-wrap ga-10" :class="$attrs.width_100">
        <slot></slot>
      </v-col>
    </v-row>
  </v-container>
</template>
