<script setup lang="ts">
import type {
  Oauth2TokenResponse,
  SearchResponse,
  Datum,
} from "@/models/kkbox-api.model";
import axios from "axios";
import { onMounted, ref, defineProps, watch, computed } from "vue";

interface Props {
  search: string
}
const props = defineProps<Props>()

const kkboxSearchRes = ref<SearchResponse | null>()

onMounted(() => {
  const urlencoded = new URLSearchParams();
  urlencoded.append("client_id", "553a1507830c7ab1e16a170256e21983");
  urlencoded.append("grant_type", "client_credentials");
  urlencoded.append("client_secret", "8429837199a5542bf73c5857c1421ebc");

  axios
    .post<Oauth2TokenResponse>("/oauth2/token", urlencoded, {
      headers: {
        "Content-Type": "application/x-www-form-urlencoded",
      },
    })
    .then(async (response) => {
      localStorage.setItem(
        "accessToken",
        JSON.stringify(
          `${response.data.token_type} ${response.data.access_token}`
        )
      );
    });
})

watch(() => props.search, async (val, OldVal) => {
  if (val) {
    const searchRes = (await axios.get)<SearchResponse>(
      `https://api.kkbox.com/v1.1/search?q=${val}&type=track&territory=TW`
    );

    const json = await searchRes;

    kkboxSearchRes.value = json.data;
  } else {
    kkboxSearchRes.value = null;
  }
})

const getTracks = computed<Datum[]>(() => {
  return kkboxSearchRes.value?.tracks.data ?? [];
})

</script>

<template>
  <div v-if="kkboxSearchRes">
    <ul>
      <li v-for="(item, itemIndex) in getTracks" :key="itemIndex">
        <img :src="item.album.images[0].url" />
        <h4>{{ item.name }}</h4>
      </li>
    </ul>
  </div>
</template>
