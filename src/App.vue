<script setup lang="ts" type="module">
import MyButton from './components/MyButton.vue'

import { ref } from 'vue'
const count = ref(0)

function increaseCount(n: number) {
  count.value += n
}
</script>

<template>
  <!-- <CustomInput v-model="searchQuery" label="Search..." /> -->
  <MyButton @increase-by="increaseCount" />
  {{ count }}
</template>
