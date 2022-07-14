<script lang="ts" setup>
import { ref } from "vue";
import ButtonTile from "./ButtonTile.vue";

const button = ref();
defineProps(["color", "info"]);

const redcss = "bg-red-400 hover:bg-red-500";
const greencss = "bg-green-500 hover:bg-green-600";
const blackcss = "bg-gray-700 hover:bg-gray-900";
</script>

<template>
  <button-tile
    ref="button"
    class="w-[45px]"
    :class="color === 'red' ? redcss : color === 'green' ? greencss : blackcss"
    v-if="info"
    :info="info"
  >
    <slot />
  </button-tile>
</template>
