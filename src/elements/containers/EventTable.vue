<script lang="ts" setup>
import { useUrlData } from "@/utils/stores/useUrlData";
import { storeToRefs } from "pinia";
import EventBox from "../components/EventBox.vue";
import ButtonRoulete from "../components/ButtonRoulete.vue";
import ButtonEvent from "../components/ButtonEvent.vue";

const main = useUrlData();
const { startDelta, eventsArr, data } = storeToRefs(main);

defineProps(["tileNum"]);
</script>

<template>
  <div v-if="eventsArr && startDelta && data && data.config && data.next">
    <p v-if="startDelta.fake > 0">
      Game {{ data.next.id.toString().slice(-3) }} starts in
      {{ startDelta.fake }} sec {{ tileNum }}
    </p>
    <button-event
      v-if="!!tileNum == true || tileNum == 0"
      :color="data.config.colors[tileNum]"
    >
      <template v-slot:number>
        {{ data.next.id.toString().slice(-3) }}
      </template>
      <template v-slot:result>
        {{ tileNum }}
      </template>
    </button-event>
    <p v-if="startDelta.fake <= 0">Spinning the wheel</p>

    <div class="flex flex-wrap">
      <button-event
        v-for="item in data.history"
        :key="item"
        :color="data.config.colors[item.result]"
      >
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
