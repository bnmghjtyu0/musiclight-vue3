<script setup lang="ts">
interface Props {
  value: string;
}
const props = defineProps<Props>()

</script>

<template>
  <input type="text" :value="props.value" @change.enter="$emit('change', $event)" />
</template>
