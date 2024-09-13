<script setup lang="ts">
const emit = defineEmits(['increaseBy'])

function submitForm(e: Event, num: number) {
  emit('increaseBy', num)
}
</script>

<template>
  <button @click="(e) => submitForm(e, 1)">按鈕</button>
</template>
