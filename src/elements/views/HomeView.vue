<script setup lang="ts">
import ContainDiv from "../components/ContainDiv.vue";
import RouleteTable from "../components/RouleteTable.vue";
import EventTable from "../components/EventTable.vue";
import LogTable from "../components/LogTable.vue";
import PartDiv from "../components/PartDiv.vue";
import StatsTable from "../components/StatsTable.vue";
import UrlForm from "../components/UrlForm.vue";
import { useUrlData } from "@/utils/stores/useUrlData";
import { ref } from "vue";
import { storeToRefs } from "pinia";

const main = useUrlData();
const { loading } = storeToRefs(main);

const arr = [
  "0",
  "1",
  "2",
  "3",
  "4",
  "5",
  "6",
  "7",
  "8",
  "9",
  "10",
  "11",
  "12",
  "13",
  "14",
  "15",
  "16",
  "17",
  "18",
  "19",
  "20",
  "21",
  "22",
  "23",
  "24",
  "25",
  "26",
  "27",
  "28",
  "29",
  "30",
  "31",
  "32",
  "33",
  "34",
  "35",
  "36",
];
// const arr3 = arr.sort()
const arr2 = [
  "0",
  "1",
  "4",
  "7",
  "10",
  "13",
  "16",
  "19",
  "22",
  "25",
  "28",
  "31",
  "34",
  "2",
  "5",
  "8",
  "11",
  "14",
  "17",
  "20",
  "23",
  "26",
  "29",
  "32",
  "35",
  "3",
  "6",
  "9",
  "12",
  "15",
  "18",
  "21",
  "24",
  "27",
  "30",
  "33",
  "36",
];

const selected = ref(null);

const selectNumber = (item) => {
  selected.value = item;
};
</script>

<template>
  <contain-div classin="" classout=" ">
    <div class="text-xl font-bold fadeInUp p-4 w-full mb-[200px]">
      <h1 class="text-3xl">Roulette table</h1>
      <h1>{{ loading }}</h1>
      <p>url</p>
      <url-form />
      <p>Stats</p>
      <stats-table />
      <p>Gameboard</p>
      <roulete-table :arr="arr2" @select="selectNumber" />
      <div>selected: {{ selected }}</div>
      <div class="flex flex-row">
        <part-div>
          <div>
            <p>Events</p>
            <event-table />
          </div>
        </part-div>
        <part-div>
          <div>
            <p>Logs</p>
            <log-table />
          </div>
        </part-div>
      </div>
    </div>
  </contain-div>
</template>
