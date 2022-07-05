<script setup lang="ts">
import ContainDiv from "../components/ContainDiv.vue";
import { ref } from "vue";

import RouleteTable from "../components/RouleteTable.vue";

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
  <contain-div classin="bg-blue-100" classout="bg-gray-100">
    <div class="text-xl font-bold fadeInUp p-4">
      <h1 class="text-3xl">Welcome to the ardvark roulete game</h1>
      <p>Gameboard</p>
      <roulete-table :arr="arr2" @select="selectNumber" />
      <div>selected: {{ selected }}</div>
      <p>Events</p>
    </div>
  </contain-div>
</template>
