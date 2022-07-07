<script lang="ts" setup>
import { useUrlData } from "@/utils/stores/useUrlData";
import { storeToRefs } from "pinia";

import ButtonRoulete from "../components/ButtonRoulete.vue";
// import { ref } from "vue";
// import { defineEmits } from "vue";

const main = useUrlData();
const { data } = storeToRefs(main);

defineProps(["arr"]);

// const emit = defineEmits(["select"]);

// const selected = ref(null);

// const rouleteSelect = (item) => {
//   emit("select", item);
//   // console.log(item);
//   selected.value = item;
// };
</script>

<template>
  <div class="flex flex-row justify-center my-10">
    <div class="grid grid-cols-19 grid-rows-4 h-[140px]" v-if="data.config">
      <button-roulete
        v-for="(item, index) in data.config.positionToId"
        :key="item"
        :data="{ item, index }"
      >
        {{ item }}
      </button-roulete>
    </div>
  </div>
</template>
