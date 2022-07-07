<script lang="ts" setup>
import { useUrlData } from "@/utils/stores/useUrlData";
import { storeToRefs } from "pinia";
import moment from "moment";

const main = useUrlData();
const { data, logText } = storeToRefs(main);
</script>

<!--
  



  -->

<template>
  <div class="p-2 pixel" v-if="logText">
    <p class="text-md font-thin m-0 px-2" v-for="log in logText" :key="log">
      {{ log }}
    </p>
  </div>
</template>
