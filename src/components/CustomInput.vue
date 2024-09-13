<script setup lang="ts">
defineProps({
  label: {
    type: String,
    default: 'Search...'
  },
  modelValue: {
    type: String,
    required: true
  }
})
const emit = defineEmits(['update:modelValue'])

const handleInput = ($event: Event) => {
  emit('update:modelValue', ($event.target as HTMLInputElement).value)
}
</script>

<template>
  <div class="table-search-container">
    <div class="table-search-container-input-icon-wrapper">
      <input
        id="input"
        type="text"
        :value="modelValue"
        @input="handleInput($event)"
        :placeholder="label"
        class="table-search-input"
      />
    </div>
  </div>
</template>

<style scoped></style>

<script setup>
const emit = defineEmits({
  // No validation
  click: null,

  // Validate submit event
  submit: ({ email, password }) => {
    if (email && password) {
      return true
    } else {
      console.warn('Invalid submit event payload!')
      return false
    }
  }
})

function submitForm(email, password) {
  emit('increaseBy', { email, password })
}
</script>

<template>
  <button @click="submitForm($event)">按鈕</button>
</template>
