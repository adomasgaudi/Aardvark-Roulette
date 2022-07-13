<script lang="ts" setup>
import { useUrlData } from "@/utils/stores/useUrlData";
import { storeToRefs } from "pinia";
import ButtonEvent from "../components/ButtonEvent.vue";

const main = useUrlData();
const { startDelta, data } = storeToRefs(main);
defineProps(["curTileNum"]);
</script>

<template>
  <div v-if="startDelta && data && data.config && data.next">
    <div class="flex">
      <button-event
        v-if="!!curTileNum == true || curTileNum == 0"
        :color="data.config.colors[curTileNum]"
      >
        <template v-slot:number>
          {{ data.next.id.toString().slice(-3) }}
        </template>
        <template v-slot:result>
          {{ curTileNum }}
        </template>
      </button-event>
      <p v-if="startDelta.timer < 10">The result was:</p>
      <button-event
        v-if="startDelta.timer < 10 && data.gameById"
        :color="data.config.colors[data.history[0].result]"
      >
        <template v-slot:number>
          {{ data.gameById.id.toString().slice(-3) }}
        </template>
        <template v-slot:result>
          {{ data.gameById.result }}
        </template>
      </button-event>
    </div>
    <p v-if="startDelta.fake > 0">
      Game {{ data.next.id.toString().slice(-3) }} ends in
      {{ startDelta.fake }} sec
    </p>
    <p v-if="startDelta.fake <= 0">Spinning the wheel</p>
    <hr class="border-b border-b-gray-400 h-0" />

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
