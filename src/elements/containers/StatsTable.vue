<script lang="ts" setup>
import { useUrlData } from "@/utils/stores/useUrlData";
import { storeToRefs } from "pinia";
import ButtonStats from "../components/ButtonStats.vue";

const main = useUrlData();
const { data } = storeToRefs(main);
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
        v-for="(item, index) in data.config.positionToId"
        :key="item"
        :info="{ item, index, config: data.config }"
        :color="data.config.colors[index]"
      >
        {{ item }}
      </button-stats>
    </div>
  </div>
</template>

<style lang="sass">
.rouleteCorners
  border-radius:  30px 30px 30px 30px / 30px 30px 30px 30px
</style>
