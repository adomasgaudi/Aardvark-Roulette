<script lang="ts" setup>
const props = defineProps(["color"]);

const redcss = "bg-red-400 hover:bg-red-500";
const greencss = "bg-green-500 hover:bg-green-600";
const blackcss = "bg-gray-700 hover:bg-gray-900";
</script>

<template>
  <button
    class="w-[55px] text-center shadowHov_thick text-lg px-8 py-4 font-bold text-white border-none rounded-md m-2 relative flex justify-center"
    :class="color === 'red' ? redcss : color === 'green' ? greencss : blackcss"
  >
    <!---->
    <div class="text-sm font-bold absolute top-0 left-1 text-gray-400">
      <slot name="number" />
    </div>
    <p class="m-0">
      <slot name="result" />
    </p>
  </button>
</template>
<!--  -->
