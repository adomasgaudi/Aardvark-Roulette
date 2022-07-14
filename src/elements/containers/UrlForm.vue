<script lang="ts" setup>
import { useUrlData } from "@/utils/stores/useUrlData";
import { onMounted, ref } from "vue";

const main = useUrlData();
const url = ref("https://dev-games-backend.advbet.com/v1/ab-roulette/1");
const url2 = ref("https://dev-games-backend.advbet.com/v1/ab-roulette/1");
const form = ref();

onMounted(() => {
  main.getGame(url.value);
  form.value.addEventListener("submit", (e: any) => {
    e.preventDefault();
    main.getGame(url2.value);
    main.addUrlText(url2.value);
  });
});
</script>

<template>
  <form ref="form">
    <input
      type="text"
      spellcheck="false"
      class="border-none focus:outline-none pixel text-xl font-medium p-2 bg-inherit w-[500px]"
      v-model="url2"
    />
  </form>
</template>
