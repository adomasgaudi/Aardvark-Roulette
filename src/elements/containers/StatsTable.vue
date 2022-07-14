<script lang="ts" setup>
import { useUrlData } from "@/utils/stores/useUrlData";
import { storeToRefs } from "pinia";
import ButtonStats from "../components/ButtonStats.vue";

const main = useUrlData();
const { data } = storeToRefs(main);

type anyO = Record<string, unknown>;
const sortArray = (array: anyO[], key: string) => {
  const result = array.slice().sort((a: anyO, b: anyO) => a[key] - b[key]);
  return result;
};

//
</script>

<template>
  <div class="flex flex-row justify-center my-10">
    <div
      class="grid grid-cols-18 grid-rows-3 h-[140px] relative"
      v-if="data.config"
    >
      <div
        class="pointer-events-none col-start-1 col-end-19 row-start-1 row-end-5 rounded-[30px] shadow_thick z-10"
      />
      <div
        class="pointer-events-none col-start-2 col-end-18 row-start-1 shadow_tileTop"
      />
      <button-stats
        v-for="(tileNum, index) in data.config.positionToId"
        :key="tileNum"
        :info="{
          tileNum,
          index,
          config: data.config,
          stats: data.stats,
        }"
      >
        <div class="flex flex-col justify-center items-center">
          <div
            class="text-center font-bold text-gray-500 leading-5 border-b border-b-gray-400"
          >
            {{ tileNum }}
          </div>
          <div
            class="fadeInUp10 text-center text-sm font-bold text-gray-600 leading-5"
          >
            {{ sortArray(data.stats, "result")[tileNum].count }}
          </div>
        </div>
      </button-stats>
    </div>
  </div>
</template>
