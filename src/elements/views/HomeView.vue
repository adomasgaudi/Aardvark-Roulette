<script setup lang="ts">
import ContainDiv from "../components/ContainDiv.vue";
import RouleteTable from "../containers/RouleteTable.vue";
import EventTable from "../containers/EventTable.vue";
import LogTable from "../containers/LogTable.vue";
import PartDiv from "../components/PartDiv.vue";
import StatsTable from "../containers/StatsTable.vue";
import UrlForm from "../containers/UrlForm.vue";
import { useUrlData } from "@/utils/stores/useUrlData";
import { ref } from "vue";

const selected = ref(null);

const selectNumber = (item: any) => {
  selected.value = item;
};

const showingStats = ref(false);

const showStats = () => (showingStats.value = !showingStats.value);
</script>

<template>
  <contain-div classin="" classout=" ">
    <div class="text-xl fadeInUp p-4 w-full mb-[200px]">
      <h1 class="text-3xl">Roulette table</h1>
      <url-form />
      <button @click="showStats">show stats</button>
      <stats-table v-if="showingStats" />
      <roulete-table v-if="!showingStats" @select="selectNumber" />
      <div class="flex flex-row">
        <part-div> <event-table /> </part-div>
        <part-div> <log-table /></part-div>
      </div>
    </div>
  </contain-div>
</template>
