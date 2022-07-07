<script lang="ts" setup>
import { useUrlData } from "@/utils/stores/useUrlData";
import { storeToRefs } from "pinia";

const main = useUrlData();
const { data } = storeToRefs(main);
</script>

<!--  -->

<template>
  <div>
    <div class="flex flex-wrap" v-if="data">
      <div v-for="item in data.stats" :key="item" class="flex flex-col">
        <div class="border border-gray-300 text-center bg-gray-200 w-[40px]">
          {{ item.result }}
        </div>
        <div class="border border-gray-300 text-center bg-gray-200 w-[40px] mb-10">
          {{ item.count }}
        </div>
      </div>
    </div>
  </div>
</template>
