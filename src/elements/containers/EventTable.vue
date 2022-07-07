<script lang="ts" setup>
import { useUrlData } from "@/utils/stores/useUrlData";
import { storeToRefs } from "pinia";
import EventBox from "../components/EventBox.vue";
import ButtonRoulete from "../components/ButtonRoulete.vue";
import ButtonEvent from "../components/ButtonEvent.vue";

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
    <!-- <event-box v-for="event in eventsArr" :key="event">
      <p class="m-0">{{ event }}</p>
    </event-box> -->
    <div class="flex flex-wrap">
      <button-event v-for="item in data.history" :key="item">
        <template v-slot:number>
          {{ item.id.toString().slice(-3) }}
        </template>
        <template v-slot:result>
          {{ item.result }}
        </template>
      </button-event>
    </div>
  </div>
</template>
