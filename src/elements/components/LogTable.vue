<script lang="ts" setup>
import { useUrlData } from "@/utils/stores/urldata";
import { storeToRefs } from "pinia";
import moment from "moment";

const main = useUrlData();
const { data } = storeToRefs(main);
</script>

<!--
  



  -->

<template>
  <div class="p-2">
    <p
      v-if="data"
      class="text-sm m-0 font-light px-2 bg-gray-200"
      v-for="log in data.history"
      :key="log"
    >
      {{ moment(log.startTime).format("LTS") }}
    </p>
  </div>
</template>
