<script setup lang="ts">
import KkboxSearchItem from "@/components/KKBOX.vue";
import CustomInput from "@/components/form/CustomInput.vue";
import { ref, onMounted } from "vue";

interface Data {
  searchInput: string;
  form: {
    email: string;
  };
}

const state = ref<Data>({ searchInput: "", form: { email: "白鹿" } })


onMounted(() => {
  onSearch();
})

const onChange = (e: Event) => {
  state.value.searchInput = (e.target as HTMLInputElement).value;
}

const onSearch = () => {
  console.log(state.value.form);
  state.value.searchInput = state.value.form.email;
}

</script>

<template>
  <div>
    <CustomInput :value="state.form.email" @change="onChange" />
    <button @click="onSearch">搜尋</button>
    <kkbox-search-item :search="state.searchInput"></kkbox-search-item>
  </div>
</template>
