<script lang="ts" setup>
import ButtonStats from "../components/ButtonStats.vue";
import { useUrlData } from "@/utils/stores/useUrlData";
import { storeToRefs } from "pinia";

const main = useUrlData();
const { data } = storeToRefs(main);
</script>

<template>
  <div class="flex flex-row justify-center my-10">
    <div v-if="data.config" class="grid grid-cols-12 h-[140px]">
      <button-stats
        v-for="thing in data.stats"
        :color="thing.count"
        :key="thing"
      >
        {{ thing.result }}
      </button-stats>
    </div>
  </div>
</template>
