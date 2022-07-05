<script lang="ts" setup>
import { useUrlData } from "@/utils/stores/urldata";
import { storeToRefs } from "pinia";

const main = useUrlData();
const { data } = storeToRefs(main);
</script>

<template>
  <div>
    <p v-if="data">{{ data.next.startDelta }}</p>
    <p>event</p>
    <p>event</p>
    <p>event</p>
  </div>
</template>
