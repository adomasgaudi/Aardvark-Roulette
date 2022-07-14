<script lang="ts" setup>
import { useUrlData } from "@/utils/stores/useUrlData";
import { storeToRefs } from "pinia";
import ButtonRoulete from "../components/ButtonRoulete.vue";

const main = useUrlData();
const { data } = storeToRefs(main);
defineProps(["arr"]);
const emit = defineEmits(["select"]);
const rouleteSelect = (tileNum: number) => {
  emit("select", tileNum);
};
</script>

<template>
  <div class="flex flex-row justify-center my-10">
    <div
      class="grid grid-cols-18 grid-rows-3 h-[140px] relative"
      v-if="data.history && data.config"
    >
      <div
        class="pointer-events-none col-start-1 col-end-19 row-start-1 row-end-5 rounded-[30px] shadow_thick z-10"
      />
      <div
        class="pointer-events-none col-start-2 col-end-18 row-start-1 shadow_tileTop"
      />
      <button-roulete
        v-for="(tileNum, index) in data.config.positionToId"
        :key="tileNum"
        :info="{ tileNum, index, config: data.config, history: data.history }"
        :color="data.config.colors[tileNum]"
        @click="rouleteSelect(tileNum)"
      >
        {{ tileNum }}
      </button-roulete>
    </div>
  </div>
</template>
