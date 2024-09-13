<script setup lang="ts" type="module">
import { onBeforeMount, onMounted, useTemplateRef } from 'vue'
const input = useTemplateRef('my-input')

onBeforeMount(() => {
  console.log('onBeforeMount')
  // console.log(input.value)
})

onMounted(() => {
  console.log(`onMounted`)
  console.log(input.value.value)
})
</script>

<template>
  <input ref="my-input" />
</template>
