<script lang="ts" setup>
import { useUrlData } from "@/utils/stores/useUrlData";
import { storeToRefs } from "pinia";

const main = useUrlData();
const { logText } = storeToRefs(main);
</script>

<template>
  <div class="p-2" v-if="logText">
    <p
      class="text-md pixel lighter font-thin m-0 px-2 leading-5"
      v-for="log in logText"
      :key="log"
    >
      {{ log }}
    </p>
  </div>
</template>
