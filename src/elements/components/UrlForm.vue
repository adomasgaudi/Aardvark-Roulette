<script lang="ts" setup>
import { useUrlData } from "@/utils/stores/useUrlData";
import { onMounted } from "vue";
const main = useUrlData();

onMounted(() => {
  main.getGame();
  // main.getSpinData();
});
</script>

<template>
  <form>
    <label for="">Current Roulete table Url</label>
    <input type="text" />
  </form>
</template>
