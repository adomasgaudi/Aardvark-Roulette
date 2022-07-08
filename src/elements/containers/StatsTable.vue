<script lang="ts" setup>
import { useUrlData } from "@/utils/stores/useUrlData";
import { storeToRefs } from "pinia";
import ButtonStats from "../components/ButtonStats.vue";

const main = useUrlData();
const { data } = storeToRefs(main);
const sortArray = (array: any[], key: string) => {
  const result = array.slice().sort((a: {}, b: {}) => a[key] - b[key]);
  return result;
};
</script>

<template>
  <div class="flex flex-row justify-center my-10">
    <div
      class="grid grid-cols-18 grid-rows-3 h-[140px] relative"
      v-if="data.config"
    >
      <div class="absolute w-full h-full rouleteCorners shadow_thick" />
      <div class="absolute w-[88.5%] right-[45px] h-[33%] shadow_tileTop" />
      <button-stats
        v-for="(tileNum, index) in data.config.positionToId"
        :key="tileNum"
        :info="{
          tileNum,
          index,
          config: data.config,
          stats: data.stats,
        }"
        :color="data.config.colors[index]"
        class="relative"
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

<style lang="sass">
.rouleteCorners
  border-radius:  30px 30px 30px 30px / 30px 30px 30px 30px
</style>
