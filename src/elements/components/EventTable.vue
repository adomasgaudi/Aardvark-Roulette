<script lang="ts" setup>
import { useUrlData } from "@/utils/stores/useUrlData";
import { storeToRefs } from "pinia";

const main = useUrlData();
const { startDelta, eventsArr, data } = storeToRefs(main);
</script>

<template>
  <div v-if="eventsArr && startDelta && data">
    <p v-if="startDelta.fake > 0">
      Game {{ data.next.id.toString().slice(-3) }} starts in
      {{ startDelta.fake }} sec
    </p>
    <p v-if="startDelta.fake <= 0">Spinning the wheel</p>
    <p v-for="event in eventsArr">{{ event }}</p>
  </div>
</template>
