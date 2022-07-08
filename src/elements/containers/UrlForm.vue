<script lang="ts" setup>
import { useUrlData } from "@/utils/stores/useUrlData";
import { onMounted, ref } from "vue";
const main = useUrlData();

onMounted(() => {
  main.getGame();
});

const url = ref("https://dev-games-backend.advbet.com/v1/ab-roulette/1/");
</script>

<template>
  <form>
    <input
      type="text"
      spellcheck="false"
      class="border-none focus:outline-none pixel text-xl font-medium p-2 bg-inherit w-[500px]"
      v-model="url"
    />
  </form>
</template>
