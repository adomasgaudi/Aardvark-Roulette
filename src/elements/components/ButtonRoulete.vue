<script lang="ts" setup>
const props = defineProps(["color"]);

const redcss = "bg-red-400 hover:bg-red-500";
const greencss = "bg-green-500 hover:bg-green-600";
const blackcss = "bg-gray-700 hover:bg-gray-900";
</script>

<template>
  <button
    class="w-[55px] text-center shadowHov_thick text-lg px-4 py-1 font-bold text-white border-none rounded-md mx-[0.5px] my-[2px]"
    :class="color === 'red' ? redcss : color === 'green' ? greencss : blackcss"
  >
    <!---->
    <slot />
  </button>
</template>
