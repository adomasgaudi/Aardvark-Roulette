<script setup lang="ts">
import ContainDiv from "../components/ContainDiv.vue";
import RouleteTable from "../containers/RouleteTable.vue";
import EventTable from "../containers/EventTable.vue";
import LogTable from "../containers/LogTable.vue";
import PartDiv from "../components/PartDiv.vue";
import StatsTable from "../containers/StatsTable.vue";
import UrlForm from "../containers/UrlForm.vue";
import { ref } from "vue";

const tileNum = ref(0);
const selectNumber = (tilenumber: number) => {
  tileNum.value = tilenumber;
};
const showingStats = ref(false);
const showStats = () => (showingStats.value = !showingStats.value);
</script>

<template>
  <contain-div classin="" classout=" ">
    <div class="text-xl fadeInUp p-4 w-full mb-[200px]">
      <h1 class="text-3xl">Roulette table</h1>
      <div class="flex justify-between aling-center">
        <url-form />
        <button
          @click="showStats"
          class="border-none pixel text-xl font-medium bg-inherit hover:border-b-2 hover:border-b-gray-400 cursor-pointer"
        >
          show stats
        </button>
      </div>
      <stats-table v-if="showingStats" />
      <roulete-table v-if="!showingStats" @select="selectNumber" />
      <div class="flex flex-row">
        <part-div> <event-table :curTileNum="tileNum" /> </part-div>
        <part-div class="pl-[100px]"> <log-table /></part-div>
      </div>
    </div>
  </contain-div>
</template>
